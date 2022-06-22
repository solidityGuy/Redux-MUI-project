package com.movieapp.movieappbackend.service;

import java.util.List;

import com.movieapp.movieappbackend.domain.Role;
import com.movieapp.movieappbackend.domain.User;

public interface UserService {
	User saveUser(User user);
	Role saveRole(Role role);
	void addRoleToUser(String name, String roleName);
	void removeRoleFromUser(String name, String roleName);
	User getUser(String name);
	List<User>getUsers();
}
