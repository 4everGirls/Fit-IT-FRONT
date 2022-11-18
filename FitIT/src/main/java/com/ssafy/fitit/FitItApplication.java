package com.ssafy.fitit;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@MapperScan(basePackages = "com.ssafy.fitit.model.dao")
public class FitItApplication {

    public static void main(String[] args) {
        SpringApplication.run(FitItApplication.class, args);
    }

}
