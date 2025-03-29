package com.cashcontrol.service;

import java.util.List;

import com.cashcontrol.entity.Users;

public interface UserService {
/*
 * User Service interface, self explainatory.
 */

    //Save User
    Users saveUser(Users user);

    //Read User List Info
    List<Users> fetchUserList();

    // Get single user
    Users getUser(Long userId);

    //update user
    Users updateUser(Users user, Long userID);

    //delete user
    void deleteUserById(Long userID);
} 
