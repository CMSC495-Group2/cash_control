package com.cashcontrol.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.cashcontrol.entity.Transactions;
import com.cashcontrol.entity.Users;
import com.cashcontrol.service.TransactionService;
import com.cashcontrol.service.UserService;

@RestController
public class Controller {

    /*
     * Routes
     * 
     * If you do not know how routes work, what is in the @*Mapping decorator specifies what you put in the url bar.
     * For example: if you are running this locally and go to "localhost:8080/api/users", as a get request, you land at the fetchUserList method.
     * 
     * The word before mapping in the decorators specifies the request type. 
     * 
     * I highly recommend this article to anyone struggling to understand how this works:
     *  https://www.geeksforgeeks.org/spring-boot-with-h2-database/#
     * 
     */

    @Autowired private UserService userService;
    @Autowired private TransactionService transactionService;

    // ALL USERS

    @PostMapping("/api/users")
    public Users saveUser(@RequestBody Users user){
        return userService.saveUser(user);
    }

    //list all users currently in the db
    @GetMapping("/api/users")
    public List<Users> fetchUserList() {
        return userService.fetchUserList();
    }

    //list single user currently in the db
    @GetMapping("/api/user")
    public Users getUsers(@RequestParam("id") Long userID) {
        return userService.getUser(userID);
    }

    @PutMapping("/api/users")
    public String getTransactions() {
        return "Tranactions";
    }

    @DeleteMapping("/api/users")
    public String addTransaction() {
        return "Add Transaction";
    }

    // SINGLE USER

    @GetMapping("/api/users/{id}")
    public Users getUser(@PathVariable Long id){
        return userService.getUser(id);
    }

    //*****************Start of controller for transactions */
    
    @PostMapping("/api/transactions")
    public Transactions saveTransaction(@RequestBody Transactions transaction){
        return transactionService.saveTransaction(transaction);
    }

    //list all transactions currently in the db
    @GetMapping("/api/transactions")
    public List<Transactions> fetchTransactionsList() {
        return transactionService.fetchTransactionsList();
    }

    @GetMapping("/api/transaction")
    public Transactions fetchTransactionsList(@RequestParam("id") Long transactionID) {
        return transactionService.getTransaction(transactionID);
    }
}
