package com.example.instagram.infrastructure;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class EventProducer {

    private final KafkaTemplate<String, String> kafkaTemplate;

    public void sendEvent(String topic, String event) {
        kafkaTemplate.send(topic, event);
        log.info("Gönderilen event -> Topic: {}, Event: {}", topic, event);
    }
}
