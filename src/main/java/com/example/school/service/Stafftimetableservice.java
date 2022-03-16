package com.example.school.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.school.model.Result;
import com.example.school.model.Stafftimetable;
import com.example.school.repo.StaffRepo;




@Service
public class Stafftimetableservice {
	
	@Autowired 
	public StaffRepo staffrepo;
	//view all
	
	public List<Stafftimetable> findListOfSubjects(){
		return staffrepo.findAll();
	}

}
