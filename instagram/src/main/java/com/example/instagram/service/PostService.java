package com.example.instagram.service;

import com.example.instagram.domain.Post;
import com.example.instagram.domain.User;
import com.example.instagram.exception.ResourceNotFoundException;
import com.example.instagram.infrastructure.EventProducer;
import com.example.instagram.infrastructure.FileStorageService;
import com.example.instagram.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final UserService userService;
    private final FileStorageService fileStorageService;
    private final MentionService mentionService;
    private final EventProducer eventProducer;

    public Post createPost(String username, String content, MultipartFile image) throws IOException {
        User user = userService.getUserByUsername(username);

        String imageUrl = fileStorageService.uploadFile(image);

        Post post = Post.builder()
                .user(user)
                .content(content)
                .imageUrl(imageUrl)
                .createdAt(LocalDateTime.now())
                .build();
        Post savedPost = postRepository.save(post);

        // Mention (örn. "@kullanıcıadı") tespit et
        List<String> mentions = mentionService.extractMentions(content);
        if (!mentions.isEmpty()) {
            String event = "Post " + savedPost.getId() + " mention: " + String.join(", ", mentions);
            eventProducer.sendEvent("mentions", event);
        }

        return savedPost;
    }

    public List<Post> getPostsByUser(String username) {
        User user = userService.getUserByUsername(username);
        return postRepository.findByUser(user);
    }
}
