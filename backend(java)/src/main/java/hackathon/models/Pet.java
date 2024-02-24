package hackathon.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "donors")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Pet {

    @Id
    private int id;
    private String name;
    private String breed;
    private String sex;
    private int age;
    private boolean isTransfusion;
    private boolean isSterilized;
    private boolean isPregnant;
    private boolean isSpleenRemoved;
    private boolean isSurgicalTherapy;
    private boolean isMedicines;
    private boolean isAutoimmune;
    private boolean isInfected;
    private boolean isAggressive;
    private LocalDate vaccinationDate;
    private LocalDate futureVaccinationDate;
    private String preparation;
    private String type;
    private String donorId;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=true)
    private User user;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public boolean isTransfusion() {
        return isTransfusion;
    }

    public void setTransfusion(boolean transfusion) {
        isTransfusion = transfusion;
    }

    public boolean isSterilized() {
        return isSterilized;
    }

    public void setSterilized(boolean sterilized) {
        isSterilized = sterilized;
    }

    public boolean isPregnant() {
        return isPregnant;
    }

    public void setPregnant(boolean pregnant) {
        isPregnant = pregnant;
    }

    public boolean isSpleenRemoved() {
        return isSpleenRemoved;
    }

    public void setSpleenRemoved(boolean spleenRemoved) {
        isSpleenRemoved = spleenRemoved;
    }

    public boolean isSurgicalTherapy() {
        return isSurgicalTherapy;
    }

    public void setSurgicalTherapy(boolean surgicalTherapy) {
        isSurgicalTherapy = surgicalTherapy;
    }

    public boolean isMedicines() {
        return isMedicines;
    }

    public void setMedicines(boolean medicines) {
        isMedicines = medicines;
    }

    public boolean isAutoimmune() {
        return isAutoimmune;
    }

    public void setAutoimmune(boolean autoimmune) {
        isAutoimmune = autoimmune;
    }

    public boolean isInfected() {
        return isInfected;
    }

    public void setInfected(boolean infected) {
        isInfected = infected;
    }

    public boolean isAggressive() {
        return isAggressive;
    }

    public void setAggressive(boolean aggressive) {
        isAggressive = aggressive;
    }

    public LocalDate getVaccinationDate() {
        return vaccinationDate;
    }

    public void setVaccinationDate(LocalDate vaccinationDate) {
        this.vaccinationDate = vaccinationDate;
    }

    public LocalDate getFutureVaccinationDate() {
        return futureVaccinationDate;
    }

    public void setFutureVaccinationDate(LocalDate futureVaccinationDate) {
        this.futureVaccinationDate = futureVaccinationDate;
    }

    public String getPreparation() {
        return preparation;
    }

    public void setPreparation(String preparation) {
        this.preparation = preparation;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDonorId() {
        return donorId;
    }

    public void setDonorId(String donorId) {
        this.donorId = donorId;
    }

    public Pet() {

    }

    public Pet(Cat cat) {
        this.type = "cat";
    }

    public Pet(Dog dog) {
        this.type = "dog";
    }
}
