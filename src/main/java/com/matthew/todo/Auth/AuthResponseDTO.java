package com.matthew.todo.Auth;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class AuthResponseDTO {
    private String username;
    private String token;

    public AuthResponseDTO(String username, String token){
        this.username = username;
        this.token = token;
    }
}
