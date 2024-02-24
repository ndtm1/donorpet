package hackathon.repository;

import hackathon.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM users WHERE expiration_time < :d", nativeQuery = true)
    void deleteExpired(@Param("d")LocalTime delete);

    Optional<User> findByPhoneNumber(String phoneNumber);

    @Transactional
    @Modifying
    @Query(value = "UPDATE users SET is_verified = true, expiration_time = NULL, code = NULL WHERE phone_number = :phone", nativeQuery = true)
    void updateAfterVerification(@Param("phone") String phoneNumber);

    @Transactional
    @Modifying
    @Query(value = "UPDATE users SET password = :password WHERE phone_number = :phone", nativeQuery = true)
    void updatePassword(@Param("phone") String phoneNumber, @Param("password") String password);

    @Transactional
    @Modifying
    @Query(value = "UPDATE users SET code = :code WHERE phone_number = :phone", nativeQuery = true)
    void setCode(@Param("phone") String phoneNumber, @Param("code") String code);

}
