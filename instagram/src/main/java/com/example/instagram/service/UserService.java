package com.example.instagram.service;

import com.example.instagram.domain.User;
import com.example.instagram.exception.ResourceNotFoundException;
import com.example.instagram.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User registerUser(User user) {
        // Şifreleme, validasyon vs. eklenebilir
        return userRepository.save(user);
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("Kullanıcı bulunamadı: " + username));
    }

    public User followUser(String followerUsername, String toFollowUsername) {
        User follower = getUserByUsername(followerUsername);
        User toFollow = getUserByUsername(toFollowUsername);
        follower.getFollowing().add(toFollow);
        return userRepository.save(follower);
    }
}
