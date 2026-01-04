package com.matthew.todo.ToDo;

import com.matthew.todo.Users.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ToDoService {

    private final ToDoRepository toDoRepository;

    public List<ToDo> getToDoByUser(User user){
        return toDoRepository.findByUser(user);
    }
}
