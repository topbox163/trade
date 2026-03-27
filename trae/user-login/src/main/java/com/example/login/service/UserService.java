package com.example.login.service;

import com.example.login.entity.User;
import com.example.login.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public User login(String username, String password) {
        User user = userMapper.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    public List<User> getUsers(int page, int pageSize) {
        int offset = (page - 1) * pageSize;
        return userMapper.findAll(offset, pageSize);
    }

    public int getTotalUsers() {
        return userMapper.count();
    }
}
