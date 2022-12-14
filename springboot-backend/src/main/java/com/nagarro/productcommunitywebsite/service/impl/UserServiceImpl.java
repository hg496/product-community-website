package com.nagarro.productcommunitywebsite.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.nagarro.productcommunitywebsite.model.User;
import com.nagarro.productcommunitywebsite.repository.UserRepository;
import com.nagarro.productcommunitywebsite.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	// Creating User

	@Override
	public User createUser(User user) throws Exception {

		User localUser = this.userRepository.findByEmailID(user.getEmailID());
		if (localUser != null) {
			System.out.println("User is already there!!");
			throw new Exception("User already present!!");
		} else {
			localUser = this.userRepository.save(user);
		}

		return localUser;
	}

	// count of users

	@Override
	public long countUsers() {
		long count = this.userRepository.count();
		return count;
	}

	// get all users

	@Override
	public List<User> getAllUsers() {
		return this.userRepository.findAll();
	}

	@Override
	public Optional<User> getUserById(@PathVariable long id) {
		return this.userRepository.findById(id);
	}

}
