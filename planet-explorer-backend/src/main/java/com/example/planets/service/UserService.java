package com.example.planets.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.planets.entity.User;
import com.example.planets.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User register(User u){
        return repo.save(u);
    }

    public User login(String email, String password){
        User user = repo.findByEmail(email);

        if(user != null && user.getPassword().equals(password)){
            return user;
        }
        return null;
    }
}