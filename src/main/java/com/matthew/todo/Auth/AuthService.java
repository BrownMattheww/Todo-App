package com.matthew.todo.Auth;

import com.matthew.todo.User;
import com.matthew.todo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public ResponseEntity<AuthResponseDTO> signUp(String username, String password){
        if(userRepository.existsByUsername(username)){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "This username already is in use");
        }

        String encodedPassword = passwordEncoder.encode(password);

        User user = User.builder()
                .username(username)
                .password(encodedPassword)
                .build();

        userRepository.save(user);

        String token = jwtService.generateToken(username);

        AuthResponseDTO response = AuthResponseDTO.builder()
                .username(username)
                .token(token)
                .build();

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}

