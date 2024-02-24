package hackathon.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import hackathon.exception.UserFoundException;
import hackathon.exception.UserUnknownException;
import hackathon.exception.UserVerificationException;
import hackathon.models.JwtToken;
import hackathon.models.PhoneAndCode;
import hackathon.models.User;
import hackathon.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping(value = "/api/v1/user", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    private final UserService userService;


    public UserController(UserService userService) {
        Assert.notNull(userService, "UserService must not be null");
        this.userService = userService;
    }

    @PostMapping(value = "/register")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public JwtToken register(@RequestBody JsonNode node) throws UserVerificationException, JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        User user = objectMapper.treeToValue(node, User.class);
        return userService.register(user);
    }

    @PostMapping(value = "/login")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public JwtToken auth(@RequestBody JsonNode phoneNumber, @RequestBody JsonNode password) throws Exception {
        return userService.auth(phoneNumber.get("phoneNumber").asText(),
                password.get("password").asText());
    }

    @PostMapping(value = "/verify")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public boolean verify(@RequestBody JsonNode node) throws UserVerificationException, JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        PhoneAndCode phoneAndCode = objectMapper.treeToValue(node, PhoneAndCode.class);

        return userService.verification(phoneAndCode.getPhoneNumber(), phoneAndCode.getCode());
    }

    @PostMapping(value = "/getUser")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public User getUser(@RequestBody JsonNode phoneNumber) throws UserFoundException {
        return userService.getUser(phoneNumber.get("phoneNumber").asText());
    }

    @PostMapping(value = "/changePassword")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public boolean changePassword(String phoneNumber, String newPassword) throws UserFoundException {
        return userService.changePassword(phoneNumber, newPassword);
    }

    @PostMapping(value = "/sendOtp")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public boolean sendOtp(@RequestBody JsonNode phoneNumber) throws UserUnknownException {
        return userService.sendOtp(phoneNumber.get("phoneNumber").asText());
    }

}
