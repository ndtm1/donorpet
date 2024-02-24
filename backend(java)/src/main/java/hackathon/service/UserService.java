package hackathon.service;

import hackathon.exception.UserAuthException;
import hackathon.exception.UserFoundException;
import hackathon.exception.UserUnknownException;
import hackathon.exception.UserVerificationException;
import hackathon.models.JwtToken;
import hackathon.models.User;

public interface UserService {
    JwtToken register(User user) throws UserVerificationException;

    JwtToken auth(String email, String password) throws UserAuthException;

    boolean verification(String phoneNumber, String code) throws UserVerificationException;

    User getUser(String phoneNumber) throws UserFoundException;

    boolean changePassword(String phoneNumber, String newPassword) throws UserFoundException;

    boolean setCode(String phoneNumber, String code) throws UserFoundException, UserUnknownException;

    boolean sendOtp(String phoneNumber) throws UserUnknownException;
}
