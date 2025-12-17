package com.matthew.todo;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ToDoService {

    private final ToDoRepository toDoRepository;

    public ToDoService(ToDoRepository toDoRepository){
        this.toDoRepository = toDoRepository;
    }

    public List<ToDo> returnAllToDos(){
        return toDoRepository.findAll();
    }

    public ToDo createToDo(ToDo toDo){
        return toDoRepository.save(toDo);
    }

    public ToDo setCompleted(long id){
        Optional<ToDo> existingToDo = toDoRepository.findById(id);
        if (existingToDo.isPresent()){
            ToDo toDo = existingToDo.get();
            toDo.setCompleted(true);
            return toDoRepository.save(toDo);
        } else {
            throw new RuntimeException("This task doesnt exist");
        }
    }

    public void deleteToDo(long id){
        toDoRepository.deleteById(id);
    }
}
