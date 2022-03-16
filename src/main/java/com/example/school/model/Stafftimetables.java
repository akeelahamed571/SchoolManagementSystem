package com.example.school.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Stafftimetables {
	
	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(nullable=false,updatable=false)
	private Long timetableid;
	
	private String staffid;
	
	private String classid;
	private String subject;
	
	public Stafftimetables() {}

	public Stafftimetables(Long timetableid, String staffid, String classid, String subject) {
		
		this.timetableid = timetableid;
		this.staffid = staffid;
		this.classid = classid;
		this.subject = subject;
	}

	public Long getTimetableid() {
		return timetableid;
	}

	public void setTimetableid(Long timetableid) {
		this.timetableid = timetableid;
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
