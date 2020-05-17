package com.example.demo;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {
	@Autowired
	private CartRepository dr;
	public List<Cart> getAll()
	{
	 List<Cart> l=new ArrayList<>();
     dr.findAll().forEach(l::add);
	 return l;
	}
	public Optional<Cart> getOne(int id)
	{
		return dr.findById(id);
	}
	public void add(Cart d)
	{
		dr.save(d);
	}
	
	public void update(int id,Cart d)
	{
		dr.save(d);
	}
	public void delete(int id)
	{
		dr.deleteById(id);
		
	}
	
	
}
