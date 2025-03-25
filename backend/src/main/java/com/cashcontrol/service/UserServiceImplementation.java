package com.cashcontrol.service;

import com.cashcontrol.entity.Users;
import com.cashcontrol.repository.UserRepository;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class UserServiceImplementation implements UserService{
/*
 * Implementation of userservice interface.
 */
    @Autowired
    private UserRepository userRepository;

    //Save User 
    @Override
    public Users saveUser(Users user){
        return userRepository.save(user);
    }

    //Read User Info
    @Override
    public List<Users> fetchUserList() {
        return (List<Users>)userRepository.findAll();
    };

    //TODO: Allow for updates to the user object. Need to figure out how to do this
    //Should not be hard, I just dont know how right now
    @Override
    public Users updateUser(Users user, Long userID){
        Users userDB = userRepository.findById(userID).get();
        return user;
    }

    public void deleteUserById(Long userID){
        userRepository.deleteById(userID);
    }
} 