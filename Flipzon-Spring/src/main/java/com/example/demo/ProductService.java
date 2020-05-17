package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class ProductService {
	@Autowired
	private ProductRepository dr;
	public List<Category> getAll()
	{
	 List<Category> l=new ArrayList<>();
     dr.findAll().forEach(l::add);
	 return l;
	}
	
	public Optional<Category> getOne(int id)
	{
		return dr.findById(id);
	}

	public List<Category> findByProdsubcategory(String s)
	{
		 List<Category> products=new ArrayList<>();
		 List<Category> clothes=new ArrayList<>();
	     dr.findAll().forEach(products::add);
	     for (int i = 0; i < products.size(); i++) 
	     {
	    	 Category d=products.get(i);
	    	 if(d.prodsubcategory.equals(s))
	    	 {
	    		 clothes.add(d);
	    	 }
	    	 
	     }
		 return clothes;
		
	}
	
}