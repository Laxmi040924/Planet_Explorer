package com.example.planets.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.planets.dto.QuizSubmitRequest;
import com.example.planets.entity.QuizResult;
import com.example.planets.service.QuizService;

@RestController
@CrossOrigin(origins="http://localhost:5173")
@RequestMapping("/api/quiz")
public class QuizController {

    @Autowired
    private QuizService service;

    @PostMapping("/submit")
    public QuizResult submit(@RequestBody QuizSubmitRequest req){

        QuizResult qr = new QuizResult();
        qr.setEmail(req.email);
        qr.setScore(req.score);

        return service.saveResult(qr);
    }
}
