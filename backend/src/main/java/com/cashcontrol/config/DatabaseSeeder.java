package com.cashcontrol.config;

import com.cashcontrol.entity.Users;
import com.cashcontrol.entity.Transactions;
import com.cashcontrol.repository.UserRepository;
import com.cashcontrol.repository.TransactionRepository;

import org.hibernate.boot.model.relational.Database;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DatabaseSeeder implements CommandLineRunner{
    private final UserRepository userRepository;
    private final TransactionRepository transactionRepository;

    public DatabaseSeeder(UserRepository userRepository, TransactionRepository transactionRepository){
        this.userRepository = userRepository;
        this.transactionRepository = transactionRepository;
    }

    @Override
    public void run(String... args){
        // Skip if users already exists
        if(userRepository.count() == 0){
            Users alice = userRepository.save(Users.builder()
            .name("Alice Johnson")
            .email("alice@example.com")
            .build());

            Users bob = userRepository.save(Users.builder()
            .name("Bob Smith")
            .email("bob@example.com")
            .build());

            Users charlie = userRepository.save(Users.builder()
            .name("Charlie Lee")
            .email("charlie@example.com")
            .build());

            System.out.println("✅ Sample users inserted into H2 database.");

            // Sample Transactions for Alice
            transactionRepository.save(Transactions.builder()
                .userID(alice.getUserID())
                .transactionType("Income")
                .amount(3000L)
                .dateHelper(LocalDate.now())
                .category("Salary")
                .description("Monthly salary")
                .build());

            transactionRepository.save(Transactions.builder()
                .userID(alice.getUserID())
                .transactionType("Expense")
                .amount(150L)
                .dateHelper(LocalDate.now())
                .category("Groceries")
                .description("Weekly grocery run")
                .build());

            // Sample Transactions for Bob
            transactionRepository.save(Transactions.builder()
                .userID(bob.getUserID())
                .transactionType("Income")
                .amount(4000L)
                .dateHelper(LocalDate.now())
                .category("Freelance")
                .description("Freelance web development")
                .build());

            transactionRepository.save(Transactions.builder()
                .userID(bob.getUserID())
                .transactionType("Expense")
                .amount(500L)
                .dateHelper(LocalDate.now())
                .category("Rent")
                .description("Monthly rent payment")
                .build());
                
            System.out.println("Sample transactions inserted into H2 database.");
        }
    }
}