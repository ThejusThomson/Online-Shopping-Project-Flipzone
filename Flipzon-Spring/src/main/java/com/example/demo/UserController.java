package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class UserController {
	
	@Autowired
	UserService userservice;
	
	@GetMapping("/customer")

	    public List<Customer> getAllUser()
	    {
	    	System.out.println("Get all Customers...");
	    	return userservice.getAllUser();
	    }
	 
	
	@RequestMapping(method=RequestMethod.POST,value="/customer")
	  public void addUser(@RequestBody Customer customer)
	  {
		userservice.addUser(customer);
	  }
	
	@RequestMapping(method=RequestMethod.GET,value="/customer/{email}")
	public Customer findByEmail(@PathVariable String email)
	{
		return userservice.findByEmail(email);
	}
		
	@RequestMapping(method=RequestMethod.POST,value="/login")
	  public Boolean login(@RequestBody Customer customer)
	  {	  	
		return userservice.login(customer);
	  }	

}
