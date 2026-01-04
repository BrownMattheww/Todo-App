package com.matthew.todo.ToDo;

import com.matthew.todo.Users.User;
import com.matthew.todo.Users.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/todo")
@RequiredArgsConstructor
public class ToDoController {

    private final ToDoService toDoService;
    private final UserRepository userRepository;

    @GetMapping("/userToDo")
    public List<ToDo> getToDos(Principal principal){
        String username = principal.getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return toDoService.getToDoByUser(user);
    }
}
