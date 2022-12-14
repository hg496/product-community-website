package com.nagarro.productcommunitywebsite.service;

import java.util.List;
import java.util.Optional;

import com.nagarro.productcommunitywebsite.model.User;

public interface UserService {
	
	User createUser(User user) throws Exception; 
	long countUsers();
	List<User> getAllUsers();
	Optional<User> getUserById(long id);
}
