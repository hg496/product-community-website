package com.nagarro.productcommunitywebsite.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.productcommunitywebsite.model.Product;
import com.nagarro.productcommunitywebsite.service.ProductService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(name = "/")
public class ProductController {

	private ProductService productService;

	public ProductController(ProductService productService) {
		this.productService = productService;
	}

	// get products based on search criteria

	@GetMapping("/search")
	public ResponseEntity<List<Product>> searchProducts(@RequestParam("name") String query) {
		return ResponseEntity.ok(productService.searchProducts(query));
	}
	
	// get all products
	
	@GetMapping("/products")
	public List<Product> getAllProducts() {
		return this.productService.getAllProducts();
	}

	// add products
	
	@PostMapping("/createproduct")
	public Product createProduct(@RequestBody Product product) {
		return productService.createProduct(product);
	}

}
