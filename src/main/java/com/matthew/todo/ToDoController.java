package com.matthew.todo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class ToDoController {

    private final ToDoService toDoService;

    public ToDoController(ToDoService toDoService) {
        this.toDoService = toDoService;
    }

    @GetMapping
    public List<ToDo> returnAllToDos(){
        return toDoService.returnAllToDos();
    }

    @PostMapping
    public ToDo createToDo(@RequestBody ToDo newToDo){
        return toDoService.createToDo(newToDo);
    }

    @PutMapping("/{id}/complete")
    public ToDo setCompleted(@PathVariable long id){
        return toDoService.setCompleted(id);
    }

    @DeleteMapping("/{id}/delete")
    public void deleteToDo(@PathVariable long id){
        toDoService.deleteToDo(id);
    }

}
