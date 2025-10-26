package com.campimove.backend.entities.IntercampiRoute;

import java.time.LocalTime;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IntercampiRouteRepository extends JpaRepository<IntercampiRoute, Long> {
    IntercampiRoute findByOriginAndDestinationAndSchedule(String origin, String destination, LocalTime schedule);
}
