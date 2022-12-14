package com.nagarro.productcommunitywebsite.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.productcommunitywebsite.model.User;
import com.nagarro.productcommunitywebsite.service.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/")
public class UserController {

	@Autowired
	private UserService userService;

	// get all users

	@GetMapping("/users")
	public List<User> getAllUsers() {
		return this.userService.getAllUsers();
	}

	// get user by id

	@GetMapping("/users/{id}")
	public Optional<User> getUserById(@PathVariable long id) {
		return this.userService.getUserById(id);
	}

	// get count of users

	@GetMapping("/totalusers")
	public long countUsers() {
		return this.userService.countUsers();
	}

	// creating user record

	@PostMapping("/users")
	public User createUser(@RequestBody User user) throws Exception {
		return this.userService.createUser(user);
	}

}
