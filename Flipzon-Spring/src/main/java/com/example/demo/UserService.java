package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userrepo;
	
	public List<Customer>getAllUser(){
		List<Customer>customer=new ArrayList<>();
		userrepo.findAll().forEach(customer::add); 
		return customer;
	}	
	public void addUser(Customer customer) {
		userrepo.save(customer);
	}
	
	public Customer findByEmail(String email)
	{
		return userrepo.findByEmail(email);
	}
	public Boolean login(Customer customer) 
	{
		Boolean login = null;
		Customer cust=userrepo.findByEmail(customer.getEmail());
		{
			if(cust==null)
			{
				login=false;
			}
			else if(cust.getPassword().equals(customer.getPassword()))
			{
				login=true;
			}
			else
			{
				login=false;
			}
			System.out.println(login);
			return login;
		}
		
	}

	
}
