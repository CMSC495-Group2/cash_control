package com.cashcontrol.service;

import java.util.List;

import com.cashcontrol.entity.Transactions;

public interface TransactionService {
/*
 * Transaction Service interface, self explainatory.
 */

    //Save Transaction
    Transactions saveTransaction(Transactions transaction);

    //Read all transactions
    List<Transactions> fetchTransactionsList();

    // Get single transaction
    Transactions getTransaction(Long transactionID);

    //update transaction
    Transactions updateTransaction(Transactions transaction, Long userID);

    //delete transaction
    void deleteTransactionById(Long transactionID);
} 
