package com.example.planets.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.planets.dto.LoginRequest;
import com.example.planets.dto.SignupRequest;
import com.example.planets.entity.User;
import com.example.planets.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService service;

    @PostMapping("/signup")
    public User signup(@RequestBody SignupRequest req){
        User u = new User();
        u.setFullName(req.fullName);
        u.setEmail(req.email);
        u.setPassword(req.password);

        return service.register(u);
    }

//    @PostMapping("/login")
//    public User login(@RequestBody LoginRequest req){
//        return service.login(req.email, req.password);
//       
//    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req){

        User user = service.login(req.email, req.password);

        if(user == null){
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid credentials");
        }

        return ResponseEntity.ok(user);
    }
}