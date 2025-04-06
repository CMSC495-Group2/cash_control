package com.cashcontrol.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cashcontrol.entity.Transactions;

@Repository

public interface TransactionRepository extends CrudRepository<Transactions, Long>{
/*
 * Used to get access to the crud repository interface.
 * Crud Repository handles much of the actual interaction with the database.
 * 
 */
}