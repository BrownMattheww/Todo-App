package com.matthew.todo.ToDo;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class ToDoRequest {
    private Long id;
    private String title;
    private String description;
    private LocalDateTime completeBy;
}
