package com.example.school.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Result implements Serializable {
	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(nullable=false,updatable=false)
    private Long resultid;
	private String studentid;
    private String subject;
    private String classid;
    //private String section;
    private String medium;
    private double marks;
    private String staffid;
    private String term;
	
    //add section inparameter of the constructor if needed
   public Result() {
	   
   }
	public Result(Long resultid, String studentId, String subject, String classId, String medium,
			double marks, String staffId) {
		
		this.resultid = resultid;
		this.studentid = studentId;
		this.subject = subject;
		this.classid = classId;
		//this.section = section;
		this.medium = medium;
		this.marks = marks;
		this.staffid = staffId;
	}

	public Long getResultid() {
		return resultid;
	}

	public void setResultid(Long resultid) {
		this.resultid = resultid;
	}

	public String getStudentId() {
		return studentid;
	}

	public void setStudentId(String studentId) {
		this.studentid = studentId;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getClassId() {
		return classid;
	}

	public void setClassId(String classId) {
		this.classid = classId;
	}

	/*public String getSection() {
		return section;
	}

	public void setSection(String section) {
		this.section = section;
	}
*/
	public String getMedium() {
		return medium;
	}

	public void setMedium(String medium) {
		this.medium = medium;
	}

	public double getMarks() {
		return marks;
	}

	public void setMarks(double marks) {
		this.marks = marks;
	}

	public String getStaffId() {
		return staffid;
	}

	public void setStaffId(String staffId) {
		this.staffid = staffId;
	}
    
	public String getTerm() {
		return term;
	}

	public void setTerm(String term) {
		this.term = term;
	}

	/*@Override
	public String toString() {
		return "Result [resultid=" + resultid + ", studentId=" + studentid + ", subject=" + subject + ", classId="
				+ classid + ", section=" + section + ", medium=" + medium + ", marks=" + marks + ", staffId=" + staffid
				+ ", term=" + term + "]";
	}*/
    
    
    
    
    
    
    
    
}
