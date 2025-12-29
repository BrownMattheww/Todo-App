package com.matthew.todo.Auth;

import com.matthew.todo.User;
import com.matthew.todo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public User signUp(String username, String password){
        if (userRepository.existsByUsername(username)){
            throw new IllegalArgumentException("Username already exists.");
        }

        String encodedPassword = passwordEncoder.encode(password);

        User user = User.builder()
                .username(username)
                .password(encodedPassword)
                .build();

        return userRepository.save(user);
    }
}

