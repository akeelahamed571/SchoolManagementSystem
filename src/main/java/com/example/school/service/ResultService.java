package com.example.school.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.school.model.Result;
import com.example.school.repo.ResultRepo;

@Service
public class ResultService {


private final ResultRepo  resultRepo;
@Autowired
public ResultService(ResultRepo resultRepo) {
	
	this.resultRepo = resultRepo;
}

//add
public Result addResult(Result result) {
	return resultRepo.save(result);
}

//view all
public List<Result> findListOfResult(){
	return resultRepo.findAll();
}


//update
public Result updateResult(Result result){
	return resultRepo.save(result);
	
}


//delete
public void delete(Long resultid) {
    resultRepo.deleteById(resultid);
}


//find by student id
public List<Result> findByStudentid(String studentid){
	return resultRepo.findResultByStudentid(studentid);
}

//findby classid
public List<Result> findByclassidOrderByStudentid(String classid){
	return resultRepo.findByclassidOrderByStudentid(classid);
}

//find a single result by result id
public Result get(long resultid) {
    return resultRepo.findResultByresultid(resultid);
}


}
