package com.ssafy.fitit.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan(basePackages = "com.ssafy.ssafit.model.dao")
public class DBConfig {

}
