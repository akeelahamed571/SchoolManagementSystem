package com.example.school.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Stafftimetable {
	@Id
	private String staffid;
	
	private String classid;
	private String subject;
	
	public Stafftimetable() {}
	public Stafftimetable(String staffid, String classid, String subject) {
		
		this.staffid = staffid;
		this.classid = classid;
		this.subject = subject;
	}
	public String getStaffid() {
		return staffid;
	}
	public void setStaffid(String staffid) {
		this.staffid = staffid;
	}
	public String getClassid() {
		return classid;
	}
	public void setClassid(String classid) {
		this.classid = classid;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	
	
}
