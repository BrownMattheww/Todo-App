package com.matthew.todo.ToDo;

import com.matthew.todo.Users.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {

    List<ToDo> findByUser(User user);
}
