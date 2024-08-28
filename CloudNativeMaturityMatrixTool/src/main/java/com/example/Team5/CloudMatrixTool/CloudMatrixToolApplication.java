package com.example.Team5.CloudMatrixTool;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RestController;

@EnableJpaRepositories(basePackages = "com.example.Team5.CloudMatrixTool.repository")

@SpringBootApplication
@RestController
public class CloudMatrixToolApplication {

	public static void main(String[] args) {
		SpringApplication.run(CloudMatrixToolApplication.class, args);
	}

}
