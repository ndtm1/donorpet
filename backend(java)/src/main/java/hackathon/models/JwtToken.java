package hackathon.models;

public class JwtToken {
    private String jwt;

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public JwtToken(String jwt) {
        this.jwt = jwt;
    }

    public JwtToken(){}
}
