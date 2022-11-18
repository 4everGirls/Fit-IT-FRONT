package com.ssafy.fitit.model.dao;

import com.ssafy.fitit.model.dto.User;
import org.springframework.stereotype.Repository;

//@Repository
public interface UserDao {

    int insertUser(User user);
}
