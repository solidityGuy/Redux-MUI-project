package com.movieapp.movieappbackend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movieapp.movieappbackend.domain.User;

public interface UserRepo extends JpaRepository<User, Long>{
	User findByName(String name);
}
