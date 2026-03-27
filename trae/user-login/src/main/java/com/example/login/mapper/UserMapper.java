package com.example.login.mapper;

import com.example.login.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    User findByUsername(String username);
    List<User> findAll(int offset, int limit);
    int count();
}
