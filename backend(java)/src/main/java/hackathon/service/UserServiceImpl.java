package hackathon.service;

import at.favre.lib.crypto.bcrypt.BCrypt;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import hackathon.encryption.Encryption;
import hackathon.exception.UserAuthException;
import hackathon.exception.UserFoundException;
import hackathon.exception.UserUnknownException;
import hackathon.models.JwtToken;
import hackathon.models.SmsAeroClient;
import hackathon.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import hackathon.repository.UserRepository;

import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class UserServiceImpl implements UserService{

    @SuppressWarnings("unused")
    private final UserRepository userRepository;
    private final StringRedisTemplate redisTemplate;
    private final ValueOperations<String, String> valueOps;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, StringRedisTemplate redisTemplate) {
        this.userRepository = userRepository;
        this.redisTemplate = redisTemplate;
        valueOps = redisTemplate.opsForValue();
    }

    final Logger LOGGER = Logger.getLogger(UserServiceImpl.class.getName());

    @Override
    public JwtToken register(User user) {
        user.setPassword(Encryption.bcryptPassword(user.getPassword()));
//        user.setExpirationTime(LocalTime.now().plusMinutes(10));

        userRepository.save(user);

        return new JwtToken(generateJwt());
    }

    @Override
    public JwtToken auth(String phoneNumber, String password) throws UserAuthException {
        User foundedUser = userRepository.findByPhoneNumber(phoneNumber).orElse(new User());

        boolean correctPassword = BCrypt.verifyer().verify(password.toCharArray(),
            foundedUser.getPassword()).verified;

        if (correctPassword) {
            return new JwtToken(generateJwt());
        }
        else
            throw new UserAuthException(HttpStatus.UNAUTHORIZED.value(), "incorrect login or password");

    }


    @SuppressWarnings("SameReturnValue")
//    @Override
//    public String  verification(String phoneNumber, String code) throws UserVerificationException {
//        Optional<User> user = userRepository.findByPhoneNumber(phoneNumber);
//
//        if(user.isPresent() && user.get().getCode().equals(code)) {
//            String token = "";
//            try {
//                Algorithm algorithm = Algorithm.RSA256(Encryption.publicKey, Encryption.privateKey);
//                token = JWT.create()
//                        .withIssuer("auth")
//                        .sign(algorithm);
//            } catch (JWTCreationException ignored){
//
//            }
//
//            userRepository.updateAfterVerification(phoneNumber);
//
//            return token;
//        } else
//            throw new UserVerificationException(HttpStatus.NOT_FOUND.value(), "wrong code");
//
//    }
    @Override
    public boolean verification(String phoneNumber, String code) {
        String a = valueOps.get(phoneNumber);
//        redisTemplate.delete(phoneNumber);

        if(a != null)
            return a.equals(code);

        return false;
    }

    @Override
    public User getUser(String phoneNumber) throws UserFoundException {
        Optional<User> user = userRepository.findByPhoneNumber(phoneNumber);

        if(user.isPresent())
            return user.get();
        else
            throw new UserFoundException(HttpStatus.NOT_FOUND.value(), "does not exist in the database");
    }

    @Override
    public boolean changePassword(String phoneNumber, String newPassword) throws UserFoundException {
        Optional<User> user = userRepository.findByPhoneNumber(phoneNumber);

        if(user.isPresent()) {
            String password = Encryption.bcryptPassword(newPassword);
            userRepository.updatePassword(phoneNumber, password);

            return true;
        } else
            throw new UserFoundException(HttpStatus.NOT_FOUND.value(), "does not exist in the database");
    }

    @Override
    public boolean setCode(String phoneNumber, String code) throws UserUnknownException {
        try {
            valueOps.set(phoneNumber, code);
            redisTemplate.expire(phoneNumber, 10, TimeUnit.MINUTES);

            return true;
        } catch (Exception ex) {
            throw new UserUnknownException(HttpStatus.BAD_GATEWAY.value(), "idk");
        }
    }

    @Override
    public boolean sendOtp(String phoneNumber) throws UserUnknownException {
        String code = generateCode();

        try {
            SmsAeroClient client = new SmsAeroClient("degtarevn454@gmail.com", "J85quuOQVH4mPQklevq0M4SqC_keG42s");

            try {

                client.Send(phoneNumber, code, "SMSAero");

                valueOps.set(phoneNumber, code);
                redisTemplate.expire(phoneNumber, 10, TimeUnit.MINUTES);

            } catch (Exception e) {
                e.printStackTrace();
            }

            LOGGER.log(Level.INFO, "success");

            return true;
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return false;
    }

    public String generateJwt() {
        String token = "";
        try {
            Algorithm algorithm = Algorithm.RSA256(Encryption.publicKey, Encryption.privateKey);
            token = JWT.create()
                    .withIssuer("auth")
                    .sign(algorithm);
        } catch (JWTCreationException ignored){

        }

        return token;
    }

    public String generateCode() {
        int code = ThreadLocalRandom.current().nextInt(10000, 99999);

        return code + "";
    }
}
