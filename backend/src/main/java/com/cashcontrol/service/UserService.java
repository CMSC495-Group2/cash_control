package com.cashcontrol.service;

import com.cashcontrol.entity.Users;
import java.util.List;

public interface UserService {
/*
 * User Service interface, self explainatory.
 */
    //Save User
    Users saveUser(Users user);

    //Read User Info
    List<Users> fetchUserList();

    //update user
    Users updateUser(Users user, Long userID);

    //delete user
    void deleteUserById(Long userID);
} 
