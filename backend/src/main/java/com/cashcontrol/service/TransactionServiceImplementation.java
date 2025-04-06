package com.cashcontrol.service;

import com.cashcontrol.entity.Transactions;
import com.cashcontrol.repository.TransactionRepository;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class TransactionServiceImplementation implements TransactionService{
/*
 * Implementation of Transactionservice interface.
 */
    @Autowired
    private TransactionRepository transactionRepository;

    //Save Transaction 
    @Override
    public Transactions saveTransaction(Transactions transactions){
        return transactionRepository.save(transactions);
    }

    //Read Transaction Info
    @Override
    public List<Transactions> fetchTransactionsList() {
        return (List<Transactions>)transactionRepository.findAll();
    };

    // Get Single Transaction
    @Override
    public Transactions getTransaction(Long id){
        return transactionRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Transaction not found with id: " + id));
    }

    @Override
    public Transactions updateTransaction(Transactions user, Long userID){
        Transactions transactionDB = transactionRepository.findById(userID).get();
        return user;
    }

    public void deleteTransactionById(Long userID){
        transactionRepository.deleteById(userID);
    }
} 