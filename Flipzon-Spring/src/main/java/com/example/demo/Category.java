package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="product")
public class Category {
	@Id
	int prodid;
	String prodname;
	String prodcategory;
	String prodsubcategory;
	int prodprice;
	float prodrating;
	String prodimage1;
	String prodimage2;
	String prodimage3;
	String prodimage4;
	public int getProdid() {
		return prodid;
	}
	public void setProdid(int prodid) {
		this.prodid = prodid;
	}
	public String getProdname() {
		return prodname;
	}
	public void setProdname(String prodname) {
		this.prodname = prodname;
	}
	public String getProdcategory() {
		return prodcategory;
	}
	public void setProdcategory(String prodcategory) {
		this.prodcategory = prodcategory;
	}
	public String getProdsubcategory() {
		return prodsubcategory;
	}
	public void setProdsubcategory(String prodsubcategory) {
		this.prodsubcategory = prodsubcategory;
	}
	public int getProdprice() {
		return prodprice;
	}
	public void setProdprice(int prodprice) {
		this.prodprice = prodprice;
	}
	public float getProdrating() {
		return prodrating;
	}
	public void setProdrating(float prodrating) {
		this.prodrating = prodrating;
	}
	public String getProdimage1() {
		return prodimage1;
	}
	public void setProdimage1(String prodimage1) {
		this.prodimage1 = prodimage1;
	}
	public String getProdimage2() {
		return prodimage2;
	}
	public void setProdimage2(String prodimage2) {
		this.prodimage2 = prodimage2;
	}
	public String getProdimage3() {
		return prodimage3;
	}
	public void setProdimage3(String prodimage3) {
		this.prodimage3 = prodimage3;
	}
	public String getProdimage4() {
		return prodimage4;
	}
	public void setProdimage4(String prodimage4) {
		this.prodimage4 = prodimage4;
	}
	
	

}