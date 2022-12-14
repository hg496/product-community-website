package com.nagarro.productcommunitywebsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.productcommunitywebsite.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	public User findByEmailID(String emailid);
}
