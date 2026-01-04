package com.matthew.todo.ToDo;

import com.matthew.todo.Users.User;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class ToDoRequest {
    private String title;
    private String description;
    private LocalDateTime completeBy;
}
