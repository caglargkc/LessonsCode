package com.example.instagram.controller;

import com.example.instagram.domain.Post;
import com.example.instagram.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    // Gönderi oluşturma
    @PostMapping
    public ResponseEntity<Post> createPost(@RequestParam("username") String username,
                                           @RequestParam("content") String content,
                                           @RequestParam("image") MultipartFile image) {
        try {
            Post post = postService.createPost(username, content, image);
            return ResponseEntity.ok(post);
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    // Kullanıcının gönderilerini listeleme
    @GetMapping("/{username}")
    public ResponseEntity<List<Post>> getUserPosts(@PathVariable String username) {
        List<Post> posts = postService.getPostsByUser(username);
        return ResponseEntity.ok(posts);
    }
}
