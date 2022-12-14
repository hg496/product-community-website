package com.nagarro.productcommunitywebsite.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nagarro.productcommunitywebsite.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

	@Query("SELECT p FROM Product p WHERE " + 
	"p.productName LIKE CONCAT('%', :query, '%')" + 
	"OR p.productBrand LIKE CONCAT('%', :query, '%')" + 
	"OR p.productCode LIKE CONCAT('%', :query, '%')")
	List<Product> searchProducts(String query);
	
//	@Query(value = "SELECT * FROM products p "
//			+ "WHERE p.product_name LIKE CONCAT('%', :query, '%') "
//			+ "OR p.product_brand LIKE CONCAT('%', :query, '%') "
//			+ "OR p.product_code LIKE CONCAT('%', :query, '%')", nativeQuery = true)
//	List<Product> searchProductsSQL(String query);
}
