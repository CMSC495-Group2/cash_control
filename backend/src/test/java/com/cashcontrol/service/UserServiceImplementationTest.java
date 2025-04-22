package com.cashcontrol.service;

import com.cashcontrol.entity.Users;
import com.cashcontrol.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class UserServiceImplementationTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserServiceImplementation userService;

    public UserServiceImplementationTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testSaveUser() {
        Users user = Users.builder().name("Test").email("test@example.com").build();
        when(userRepository.save(user)).thenReturn(user);

        Users savedUser = userService.saveUser(user);
        assertEquals("Test", savedUser.getName());
        verify(userRepository, times(1)).save(user);
    }

    @Test
    public void testGetUser() {
        Users user = Users.builder().userID(1L).name("Test").build();
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        Users result = userService.getUser(1L);
        assertEquals("Test", result.getName());
        verify(userRepository).findById(1L);
    }
}
