package com.example.planets.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.planets.entity.QuizResult;

public interface QuizResultRepository extends JpaRepository<QuizResult, Long> {

}