package com.cashcontrol.config;

import com.cashcontrol.entity.Users;
import com.cashcontrol.repository.UserRepository;

import org.hibernate.boot.model.relational.Database;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseSeeder implements CommandLineRunner{
    private final UserRepository userRepository;

    public DatabaseSeeder(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args){
        // Skip if users already exists
        if(userRepository.count() == 0){
            userRepository.save(Users.builder()
            .name("Alice Johnson")
            .email("alice@example.com")
            .build());

            userRepository.save(Users.builder()
            .name("Bob Smith")
            .email("bob@example.com")
            .build());

            userRepository.save(Users.builder()
            .name("Charlie Lee")
            .email("charlie@example.com")
            .build());

            System.out.println("✅ Sample users inserted into H2 database.");
        }
    }
}