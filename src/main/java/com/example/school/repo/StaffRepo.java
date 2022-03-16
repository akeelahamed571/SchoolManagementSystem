package com.example.school.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.school.model.Stafftimetable;

public interface StaffRepo extends JpaRepository <Stafftimetable,String> {

	

	List<Stafftimetable> findBystaffid(String staffid);

}
