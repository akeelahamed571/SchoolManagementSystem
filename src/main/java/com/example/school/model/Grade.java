package com.example.school.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Grade {
	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(nullable=false,updatable=false)
    private Long identify;
	
	private String classid;
	private String staffid;
	
	public Grade() {
		
	}
	public Grade(Long identify, String classid, String staffid) {
		
		this.identify = identify;
		this.classid = classid;
		this.staffid = staffid;
	}
	public Long getIdentify() {
		return identify;
	}
	public void setIdentify(Long identify) {
		this.identify = identify;
	}
	public String getClassid() {
		return classid;
	}
	public void setClassid(String classid) {
		this.classid = classid;
	}
	public String getStaffid() {
		return staffid;
	}
	public void setStaffid(String staffid) {
		this.staffid = staffid;
	}
	
	
	
}
