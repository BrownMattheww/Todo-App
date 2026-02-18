package com.matthew.todo.ToDo;

public final class ToDoResponseMapper {

    private ToDoResponseMapper() {}

    public static ToDoResponse from(ToDo todo) {
        return ToDoResponse.builder()
                .id(todo.getId())
                .title(todo.getTitle())
                .description(todo.getDescription())
                .completeBy(todo.getCompleteBy())
                .completed(todo.isCompleted())
                .createdAt(todo.getCreatedAt())
                .username(todo.getUser().getUsername())
                .build();
    }
}