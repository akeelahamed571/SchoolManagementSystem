package com.example.school.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.school.model.Grade;
import com.example.school.model.Stafftimetable;
import com.example.school.repo.GradeRepo;


@Service
public class Gradeservice {
	
	
	@Autowired 
	public GradeRepo graderepo;
	
	public List<Grade> findBystaffid(String staffid){
		return graderepo.findBystaffid(staffid);
	}
	
	
	public List<Grade> findListOfGrades(){
		return graderepo.findAll();
	}
}
