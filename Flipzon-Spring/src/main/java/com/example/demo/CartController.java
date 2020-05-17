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
public class CartController {
	@Autowired
	CartService ps;
	@GetMapping("/cart")
	public List<Cart> getAll()
	{
		return ps.getAll();
	}
	@RequestMapping("/cart/{prodid}")
	public Optional<Cart> getOne(@PathVariable int prodid)
	{
		return ps.getOne(prodid);
	}
}
