package com.matthew.todo;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ToDo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(nullable = false)
    String title;

    String description;

    @Column(nullable = false)
    LocalDateTime completeBy;

    @Column(nullable = false)
    boolean completed;

    @ManyToOne
    User user;
}
