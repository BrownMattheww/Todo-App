package com.matthew.todo.ToDo;

import com.matthew.todo.Users.User;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ToDoService {

    private final ToDoRepository toDoRepository;

    public List<ToDo> getToDoByUser(User user){
        return toDoRepository.findByUser(user);
    }

    public ToDo createToDo(ToDoRequest toDoRequest, User user){
        ToDo todo = new ToDo();

        todo.setTitle(toDoRequest.getTitle());
        todo.setDescription(toDoRequest.getDescription());
        todo.setCompleteBy(toDoRequest.getCompleteBy());
        todo.setCompleted(false);
        todo.setCreatedAt(LocalDateTime.now());
        todo.setUser(user);

        return toDoRepository.save(todo);
    }

    public void deleteTodo(Long id) {
        toDoRepository.deleteById(id);
    }
}
