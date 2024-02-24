package hackathon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import springfox.documentation.oas.annotations.EnableOpenApi;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.io.IOException;

@SpringBootApplication(scanBasePackages = "hackathon.service, hackathon.controller, hackathon.configuration")
@EnableSwagger2
@EnableOpenApi
@EnableWebMvc
@EnableScheduling
public class Start {
    public static void main(String[] args) throws IOException, InterruptedException {
        SpringApplication.run(Start.class);

    }
}