package com.matthew.todo.ToDo;

import lombok.*;

import java.time.LocalDateTime;

@Builder
@Getter
@AllArgsConstructor
public class ToDoResponse {
    private final Long id;
    private final String title;
    private final String description;
    private final LocalDateTime completeBy;
    private final boolean completed;
    private final LocalDateTime createdAt;
    private final String username;
}
