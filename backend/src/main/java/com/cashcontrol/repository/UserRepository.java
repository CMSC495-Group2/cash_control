package com.cashcontrol.repository;

import com.cashcontrol.entity.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface UserRepository extends CrudRepository<Users, Long>{
/*
 * Used to get access to the crud repository interface.
 * Crud Repository handles much of the actual interaction with the database.
 * 
 */
}