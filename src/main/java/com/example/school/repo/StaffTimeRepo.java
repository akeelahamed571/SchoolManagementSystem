package com.example.school.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.school.model.Stafftimetables;
@Repository
public interface StaffTimeRepo extends JpaRepository <Stafftimetables,Long> {

	

	List<Stafftimetables> findBystaffid(String staffid);

}
