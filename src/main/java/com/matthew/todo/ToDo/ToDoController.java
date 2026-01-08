package com.matthew.todo.ToDo;

import com.matthew.todo.Users.User;
import com.matthew.todo.Users.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/createToDo")
    public ResponseEntity<ToDoResponse> createToDo(@RequestBody ToDoRequest request, Principal principal) {
        String username = principal.getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        ToDo todo = toDoService.createToDo(request, user);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(ToDoResponseMapper.from(todo));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteToDo(@PathVariable Long id) {
        toDoService.deleteTodo(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ToDo> setCompleted(@PathVariable Long id){
        ToDo updated = toDoService.setCompleted(id);
        return ResponseEntity.ok(updated);
    }

}
