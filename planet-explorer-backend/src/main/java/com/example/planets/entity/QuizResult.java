package com.example.planets.entity;

import jakarta.persistence.*;

@Entity
@Table(name="quiz_results")
public class QuizResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private int score;
    //Constructors
    public QuizResult(){}

	public Long getId() {
		return id;
	}
	// getters setters
	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

    
}