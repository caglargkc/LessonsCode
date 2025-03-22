package com.example.instagram.controller;

import com.example.instagram.domain.User;
import com.example.instagram.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // Kullanıcı kayıt
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User registered = userService.registerUser(user);
        return ResponseEntity.ok(registered);
    }

    // Kullanıcı bilgisi getirme
    @GetMapping("/{username}")
    public ResponseEntity<User> getUser(@PathVariable String username) {
        User user = userService.getUserByUsername(username);
        return ResponseEntity.ok(user);
    }

    // Takip etme (followerUsername, takip edilecek kullanıcı adı)
    @PostMapping("/{followerUsername}/follow/{toFollowUsername}")
    public ResponseEntity<User> followUser(@PathVariable String followerUsername,
                                           @PathVariable String toFollowUsername) {
        User updated = userService.followUser(followerUsername, toFollowUsername);
        return ResponseEntity.ok(updated);
    }
}
