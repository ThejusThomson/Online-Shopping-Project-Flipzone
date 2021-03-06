package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

	@RestController
	@CrossOrigin(origins = "*" , allowedHeaders = "*")
	public class ProductController {
	@Autowired
	ProductService ds;
	@GetMapping("/prod")
	public List<Category> getAll()
	{
		return ds.getAll();
	}
	
	@RequestMapping("/prod/{prodid}")
	public Optional<Category> getOne(@PathVariable int prodid)
	{
		return ds.getOne(prodid);
	}
	
	@RequestMapping("/subcategory/{prodsubcategory}")
	public List<Category> findByProdsubcategory(@PathVariable  String prodsubcategory)
	{
		System.out.println("Product Items displayed");
		return  ds.findByProdsubcategory(prodsubcategory);

	}
	

	}