package com.example.instagram.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class KafkaConfig {

    // Kafka topic oluşturulması (örneğin, mention eventleri için)
    @Bean
    public NewTopic mentionsTopic() {
        return new NewTopic("mentions", 3, (short) 1);
    }
}
