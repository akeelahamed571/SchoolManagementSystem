package com.example.school.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.school.model.Grade;

@Repository
public interface GradeRepo extends JpaRepository <Grade,Long> {
	

	List<Grade> findBystaffid(String staffid);

}
