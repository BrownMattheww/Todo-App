package com.matthew.todo.ToDo;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ToDoRequest {
    private Long id;
    private String title;
    private String description;
    private LocalDateTime completeBy;
}
