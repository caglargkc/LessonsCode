package com.example.instagram.controller;

import com.example.instagram.domain.Comment;
import com.example.instagram.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    // Yorum ekleme
    @PostMapping("/{postId}")
    public ResponseEntity<Comment> addComment(@PathVariable Long postId,
                                              @RequestParam("username") String username,
                                              @RequestParam("content") String content) {
        Comment comment = commentService.addComment(postId, username, content);
        return ResponseEntity.ok(comment);
    }

    // Gönderiye ait yorumları listeleme
    @GetMapping("/{postId}")
    public ResponseEntity<List<Comment>> getComments(@PathVariable Long postId) {
        List<Comment> comments = commentService.getCommentsByPost(postId);
        return ResponseEntity.ok(comments);
    }
}
