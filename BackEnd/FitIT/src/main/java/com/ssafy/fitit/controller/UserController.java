package com.ssafy.fitit.controller;

import com.ssafy.fitit.model.dto.User;
import com.ssafy.fitit.model.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/userApi")
public class UserController {

    private static final String SUCCESS = "succes";
    private static final String FAIL = "fail";

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(User user) {
        userService.insertUser(user);
        return new ResponseEntity<String>(SUCCESS, HttpStatus.CREATED);
    }

}
