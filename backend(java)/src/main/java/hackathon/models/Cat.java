package hackathon.models;

import java.time.LocalDate;

public class Cat extends Pet {

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
    private String donorId;

    @Override
    public String getName() {
        return name;
    }

    @Override
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String getBreed() {
        return breed;
    }

    @Override
    public void setBreed(String breed) {
        this.breed = breed;
    }

    @Override
    public String getSex() {
        return sex;
    }

    @Override
    public void setSex(String sex) {
        this.sex = sex;
    }

    @Override
    public int getAge() {
        return age;
    }

    @Override
    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public boolean isTransfusion() {
        return isTransfusion;
    }

    @Override
    public void setTransfusion(boolean transfusion) {
        isTransfusion = transfusion;
    }

    @Override
    public boolean isSterilized() {
        return isSterilized;
    }

    @Override
    public void setSterilized(boolean sterilized) {
        isSterilized = sterilized;
    }

    @Override
    public boolean isPregnant() {
        return isPregnant;
    }

    @Override
    public void setPregnant(boolean pregnant) {
        isPregnant = pregnant;
    }

    @Override
    public boolean isSpleenRemoved() {
        return isSpleenRemoved;
    }

    @Override
    public void setSpleenRemoved(boolean spleenRemoved) {
        isSpleenRemoved = spleenRemoved;
    }

    @Override
    public boolean isSurgicalTherapy() {
        return isSurgicalTherapy;
    }

    @Override
    public void setSurgicalTherapy(boolean surgicalTherapy) {
        isSurgicalTherapy = surgicalTherapy;
    }

    @Override
    public boolean isMedicines() {
        return isMedicines;
    }

    @Override
    public void setMedicines(boolean medicines) {
        isMedicines = medicines;
    }

    @Override
    public boolean isAutoimmune() {
        return isAutoimmune;
    }

    @Override
    public void setAutoimmune(boolean autoimmune) {
        isAutoimmune = autoimmune;
    }

    @Override
    public boolean isInfected() {
        return isInfected;
    }

    @Override
    public void setInfected(boolean infected) {
        isInfected = infected;
    }

    @Override
    public boolean isAggressive() {
        return isAggressive;
    }

    @Override
    public void setAggressive(boolean aggressive) {
        isAggressive = aggressive;
    }

    @Override
    public LocalDate getVaccinationDate() {
        return vaccinationDate;
    }

    @Override
    public void setVaccinationDate(LocalDate vaccinationDate) {
        this.vaccinationDate = vaccinationDate;
    }

    @Override
    public LocalDate getFutureVaccinationDate() {
        return futureVaccinationDate;
    }

    @Override
    public void setFutureVaccinationDate(LocalDate futureVaccinationDate) {
        this.futureVaccinationDate = futureVaccinationDate;
    }

    @Override
    public String getPreparation() {
        return preparation;
    }

    @Override
    public void setPreparation(String preparation) {
        this.preparation = preparation;
    }

    @Override
    public String getDonorId() {
        return donorId;
    }

    @Override
    public void setDonorId(String donorId) {
        this.donorId = donorId;
    }

    public Cat() {

    }

}
