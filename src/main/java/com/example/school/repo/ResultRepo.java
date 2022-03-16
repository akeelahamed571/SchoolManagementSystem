package com.example.school.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.school.model.Result;

public interface ResultRepo extends  JpaRepository <Result,Long>{
	
	 List<Result> findResultByStudentid(String studentid);
	 List<Result>  findByclassidOrderByStudentid(String classid);
	 Result findResultByresultid(Long resultid);
}
