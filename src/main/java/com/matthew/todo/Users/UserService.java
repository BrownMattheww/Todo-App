package com.matthew.todo.Users;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {

    //This class is for a future admin role I need to add
    private final UserRepository userRepository;

    public void deleteUser(Long id){
        User user = userRepository.findById(id)
                        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User could not be found with id  + id"));
        userRepository.delete(user);
    }
}
