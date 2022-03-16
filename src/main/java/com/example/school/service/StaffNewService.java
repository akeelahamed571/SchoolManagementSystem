package com.example.school.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.school.model.Stafftimetable;
import com.example.school.model.Stafftimetables;
import com.example.school.repo.StaffRepo;
import com.example.school.repo.StaffTimeRepo;

@Service
public class StaffNewService {
	@Autowired 
	public StaffTimeRepo staffrepo;
	//view all
	
	public List<Stafftimetables> findAllStaffTimetable(){
		return staffrepo.findAll();
	}

}
