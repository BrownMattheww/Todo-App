package com.matthew.todo.ToDo;

import com.matthew.todo.Users.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {

    List<ToDo> findByUser(Users user);
}
