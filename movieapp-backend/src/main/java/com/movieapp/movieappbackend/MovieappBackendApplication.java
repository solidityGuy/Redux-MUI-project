package com.movieapp.movieappbackend;

import java.util.ArrayList;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.movieapp.movieappbackend.domain.Role;
import com.movieapp.movieappbackend.domain.User;
import com.movieapp.movieappbackend.service.UserService;

@SpringBootApplication
public class MovieappBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieappBackendApplication.class, args);
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {
			userService.saveRole(new Role(null, "ROLE_USER"));
			userService.saveRole(new Role(null, "ROLE_ADMIN"));
		
			userService.saveUser(new User(null, "joe1234", "bob@protonmail.com", "yolo123", new ArrayList<>()));
			userService.saveUser(new User(null, "admin1234", "bobber@protonmail.com", "yolo123", new ArrayList<>()));
		
			userService.addRoleToUser("joe1234", "ROLE_USER");
			userService.addRoleToUser("admin1234", "ROLE_USER");
			userService.addRoleToUser("admin1234", "ROLE_ADMIN");
		};
	}
	
}
