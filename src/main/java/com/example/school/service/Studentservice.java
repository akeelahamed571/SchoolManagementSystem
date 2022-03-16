package com.example.school.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.school.model.Result;
import com.example.school.model.Student;
import com.example.school.repo.StudentRepo;

@Service
public class Studentservice {

	@Autowired
	private StudentRepo StudentRepo;
	
	//view all
	public List<Student> findListOfStudent(){
		return StudentRepo.findAll();
	}
}
