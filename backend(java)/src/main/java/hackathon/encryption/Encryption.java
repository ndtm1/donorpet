package hackathon.encryption;

import at.favre.lib.crypto.bcrypt.BCrypt;

import java.security.*;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

public class Encryption {

    static {
        KeyPairGenerator generator = null;
        try {
            generator = KeyPairGenerator.getInstance("RSA");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
        generator.initialize(2048);
        KeyPair pair = generator.generateKeyPair();

        publicKey = (RSAPublicKey) pair.getPublic();
        privateKey = (RSAPrivateKey) pair.getPrivate();
    }

    public static RSAPublicKey publicKey;
    public static RSAPrivateKey privateKey;

    public static String bcryptPassword(String password) {
        char[] passwordChar = password.toCharArray();
        return BCrypt.withDefaults().hashToString(12, passwordChar);
    }

}
