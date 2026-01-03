package com.matthew.todo.Auth;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponseDTO> signUp(@RequestParam String username, @RequestParam String password){
        return authService.signUp(username,password);
    }

    @GetMapping("/logIn")
    public ResponseEntity<AuthResponseDTO> logIn(@RequestParam String username, @RequestParam String password){
        return authService.logIn(username,password);
    }
}
