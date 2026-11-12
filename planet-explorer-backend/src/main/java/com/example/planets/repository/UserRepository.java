package com.example.planets.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.planets.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
