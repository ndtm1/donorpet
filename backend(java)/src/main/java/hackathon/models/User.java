package hackathon.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.Set;

@Entity
@Table(name = "users")
@JsonIgnoreProperties(ignoreUnknown = true)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "users_generator")
    private int id;

    private String firstName;
    private String lastName;
    private String middleName;
    private String email;
    private String phoneNumber;
    private String password;
    private String gender;
    private boolean withoutMiddleName;

    @OneToMany(mappedBy = "user")
    private Set<Pet> pet;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public boolean isWithoutMiddleName() {
        return withoutMiddleName;
    }

    public void setWithoutMiddleName(boolean withoutMiddleName) {
        this.withoutMiddleName = withoutMiddleName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public User(String firstName, String lastName, String middleName, String gender, boolean withoutMiddleName, String email, String phoneNumber, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.withoutMiddleName = withoutMiddleName;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }

    public User() {
        this.firstName = "";
        this.lastName = "";
        this.middleName = "";
        this.email = "";
        this.gender = "";
        this.phoneNumber = "";
        this.password = "";
    }
}
