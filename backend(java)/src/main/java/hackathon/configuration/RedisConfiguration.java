package hackathon.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import redis.clients.jedis.Connection;
import redis.clients.jedis.Jedis;

@Configuration
public class RedisConfiguration {

    @Bean
    public void connection() {
        Jedis jedis = new Jedis("redis://default:HA8BcEOdPu7Zd5PYWqfvI20zgqJ30ZDh@redis-17063.c293.eu-central-1-1.ec2.cloud.redislabs.com:17063");
        Connection connection = jedis.getConnection();
    }


}
