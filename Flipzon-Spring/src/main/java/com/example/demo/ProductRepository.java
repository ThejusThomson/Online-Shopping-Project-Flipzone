package com.example.demo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository <Category, Integer>{
	List<Category> findByProdsubcategory(String s);
	

}