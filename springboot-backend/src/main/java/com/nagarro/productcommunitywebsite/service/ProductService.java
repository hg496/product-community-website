package com.nagarro.productcommunitywebsite.service;

import java.util.List;

import com.nagarro.productcommunitywebsite.model.Product;

public interface ProductService {
	
	List<Product> searchProducts(String query);
	List<Product> getAllProducts();
	Product createProduct(Product product);
}
