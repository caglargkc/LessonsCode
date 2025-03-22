package com.example.instagram.service;

import com.example.instagram.domain.Comment;
import com.example.instagram.domain.Post;
import com.example.instagram.domain.User;
import com.example.instagram.exception.ResourceNotFoundException;
import com.example.instagram.repository.CommentRepository;
import com.example.instagram.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final PostRepository postRepository;
    private final UserService userService;

    public Comment addComment(Long postId, String username, String content) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Gönderi bulunamadı: " + postId));
        User user = userService.getUserByUsername(username);

        Comment comment = Comment.builder()
                .post(post)
                .user(user)
                .content(content)
                .createdAt(LocalDateTime.now())
                .build();

        return commentRepository.save(comment);
    }

    public List<Comment> getCommentsByPost(Long postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Gönderi bulunamadı: " + postId));
        return commentRepository.findByPost(post);
    }
}
