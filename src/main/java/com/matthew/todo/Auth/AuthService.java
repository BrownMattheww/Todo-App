package com.matthew.todo.Auth;

import com.matthew.todo.Users.Users;
import com.matthew.todo.Users.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
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

        Users user = Users.builder()
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

    public ResponseEntity<AuthResponseDTO> logIn(String username, String password) {
        Users loggingIn = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED));

        if(!passwordEncoder.matches(password, loggingIn.getPassword())){
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
        }

        String token = jwtService.generateToken(loggingIn.getUsername());

        AuthResponseDTO response = AuthResponseDTO.builder()
                .username(loggingIn.getUsername())
                .token(token)
                .build();

        return ResponseEntity.ok(response);
    }
}

