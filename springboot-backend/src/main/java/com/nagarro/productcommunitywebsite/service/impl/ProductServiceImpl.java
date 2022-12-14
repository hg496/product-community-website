package com.nagarro.productcommunitywebsite.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nagarro.productcommunitywebsite.model.Product;
import com.nagarro.productcommunitywebsite.repository.ProductRepository;
import com.nagarro.productcommunitywebsite.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	private ProductRepository productRepository;

	public ProductServiceImpl(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

	@Override
	public List<Product> searchProducts(String query) {

		List<Product> products = productRepository.searchProducts(query);
		return products;
	}
	
	public List<Product> getAllProducts() {
		return this.productRepository.findAll();
	}

	@Override
	public Product createProduct(Product product) {

		return productRepository.save(product);
	}

}
