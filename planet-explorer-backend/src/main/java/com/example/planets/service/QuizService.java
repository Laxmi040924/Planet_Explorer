package com.example.planets.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.planets.entity.QuizResult;
import com.example.planets.repository.QuizResultRepository;

@Service
public class QuizService {

    @Autowired
    private QuizResultRepository repo;

    public QuizResult saveResult(QuizResult qr){
        return repo.save(qr);
    }
}
