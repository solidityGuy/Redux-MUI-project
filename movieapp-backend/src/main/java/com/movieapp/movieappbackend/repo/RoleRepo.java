package com.movieapp.movieappbackend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movieapp.movieappbackend.domain.Role;

public interface RoleRepo extends JpaRepository<Role, Long>{
	Role findByName(String name);
}
