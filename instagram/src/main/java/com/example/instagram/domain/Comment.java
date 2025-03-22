package com.example.instagram.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "comments")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Yorumu yapan kullanıcı
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // İlgili gönderi
    @ManyToOne
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;

    @Column(length = 1024)
    private String content;

    private LocalDateTime createdAt;
}
