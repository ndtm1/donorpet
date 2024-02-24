package hackathon.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import hackathon.models.Pet;
import hackathon.models.PhoneAndCode;
import hackathon.service.PetService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping(value = "/api/v1/pet", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
public class PetController {

    private final PetService petService;

    public PetController(PetService petService) {
        this.petService = petService;
    }

    @PostMapping(value = "/addPet")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public Pet registerPet(@RequestBody JsonNode pet) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        Pet reg = objectMapper.treeToValue(pet, Pet.class);

        return petService.registerPet(reg);
    }


}
