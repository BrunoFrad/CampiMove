package com.campimove.backend.entities.IntercampiRoute;

import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "routes")
public class IntercampiRoute {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String origin;

    @NotBlank
    private String destination;

    @NotNull
    private LocalTime schedule;

    public IntercampiRoute(String origin, String destination, LocalTime schedule) {
        this.origin = origin;
        this.destination = destination;
        this.schedule = schedule;
    }

}
