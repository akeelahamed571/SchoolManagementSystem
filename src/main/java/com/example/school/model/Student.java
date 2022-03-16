package com.example.school.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Student {

	@Id
	private String studentid;
	
	private String studentname;
	private String address;
	public String  grade;
	
 public Student() {
	 
 }
	public Student(String studentid, String studentname, String address,String grade) {
		
		this.studentid = studentid;
		this.studentname = studentname;
		this.address = address;
		this.grade = grade;
	}
	public String getStudentid() {
		return studentid;
	}
	public void setStudentid(String studentid) {
		this.studentid = studentid;
	}
	public String getStudentname() {
		return studentname;
	}
	public void setStudentname(String studentname) {
		this.studentname = studentname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	
	
	
}
