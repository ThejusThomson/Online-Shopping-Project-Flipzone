package com.example.demo;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="cart")
public class Cart {
	@Id
	int itemid;
	int totalprice,quantity;
@OneToMany(cascade=CascadeType.ALL)
@JoinColumn(name="prodid")
	List<Category> product;

	public int getItemid() {
		return itemid;
	}
	public void setItemid(int itemid) {
		this.itemid = itemid;
	}
	
	public int getTotalprice() {
		return totalprice;
	}
	public void setTotalprice(int totalprice) {
		this.totalprice = totalprice;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public List<Category> getProduct() {
		return product;
	}
	public void setProduct(List<Category> product) {
		this.product = product;
	}


}