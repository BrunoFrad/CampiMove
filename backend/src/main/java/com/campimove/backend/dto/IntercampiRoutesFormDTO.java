package com.campimove.backend.dto;

import java.time.LocalTime;

public record IntercampiRoutesFormDTO(String origin, String destination, LocalTime schedule) {}
