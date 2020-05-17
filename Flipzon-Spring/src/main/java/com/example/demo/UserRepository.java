package com.example.demo;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<Customer,Integer>{
	Customer findByEmail(String s);
}
