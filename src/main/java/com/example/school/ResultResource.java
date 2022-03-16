package com.example.school;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.school.model.Grade;
import com.example.school.model.Result;
import com.example.school.model.Stafftimetable;
import com.example.school.model.Stafftimetables;
import com.example.school.model.Student;
import com.example.school.repo.StaffRepo;
import com.example.school.repo.StaffTimeRepo;
import com.example.school.service.Gradeservice;
import com.example.school.service.ResultService;
import com.example.school.service.Stafftimetableservice;
import com.example.school.service.StaffNewService;
import com.example.school.service.Studentservice;

@RestController
@RequestMapping("/result")
public class ResultResource {
    @Autowired
    private  Stafftimetableservice staffservice;
	
    @Autowired
    private  StaffNewService  StaffNewService ;
    
    @Autowired
    private  Gradeservice gradeservice;
   
    @Autowired
    private  Studentservice Studentservice;
    
	private final ResultService resultService;
	@Autowired
	public ResultResource(ResultService resultService) {
		
		this.resultService = resultService;
	}
	
	//get all results
	@GetMapping("/all")
	public ResponseEntity <List<Result>> getAllResult(){
		List <Result> results=resultService.findListOfResult();
		return new ResponseEntity<> (results,HttpStatus.OK);
	}
	
	
	
	
	
	//get results by classId 
		@GetMapping("/classvice/{classid}")
		public ResponseEntity <List<Result>> getClassViceResult(@PathVariable("classid") String classid ){
			List <Result> results=resultService.findByclassidOrderByStudentid(classid);
			System.out.println("got results by classid");
			return new ResponseEntity<> (results,HttpStatus.OK);
		}
	
	//get by student ID
	@GetMapping("/find/{id}")
	public ResponseEntity <List<Result>> getStudentResult( @PathVariable("id") String id     ){
		List <Result> results= resultService.findByStudentid(id);
		return new ResponseEntity<> (results,HttpStatus.OK);
	}
	
	//get all stafftime table subjects  thiiissss..
		@GetMapping("/allstaffsubjects")
		public ResponseEntity <List<Stafftimetable>> getStaffSubjects(){
			List <Stafftimetable> Stafftimetable= staffservice.findListOfSubjects();
			return new ResponseEntity<> (Stafftimetable,HttpStatus.OK);
		}
		
		
		//get all grades   thiiissss..
		@GetMapping("/allgrades")
		public ResponseEntity <List<Grade>> getGrades(){
					List <Grade> grades= gradeservice.findListOfGrades();
					return new ResponseEntity<> (grades,HttpStatus.OK);
				}
				
		//get all students
				@GetMapping("/allstudents")
				public ResponseEntity <List<Student>> getAllStudents(){
					List <Student> students=Studentservice.findListOfStudent();
					return new ResponseEntity<> (students,HttpStatus.OK);
				}	
	
		//get all classess by staffID  still...
		@GetMapping("/findstaff/{staffid}")
		public ResponseEntity <List<Grade>> GradeBystaffid( @PathVariable("staffid") String staffid ){
			List <Grade> grades= gradeservice.findBystaffid(staffid);
			return new ResponseEntity<> (grades,HttpStatus.OK);
		}

	
	//add
	@PostMapping("/add")
	public ResponseEntity <Result> addResult(Model model,@RequestBody  Result result) {
		Result newResult=resultService.addResult(result);
		
		return new ResponseEntity<> (newResult,HttpStatus.CREATED);
	}
	
	
	//update
	@PutMapping("/update")
	public ResponseEntity <Result> updateResult(@RequestBody  Result result) {
		Result updateResult=resultService.updateResult(result);
		return new ResponseEntity<> (updateResult,HttpStatus.OK);
	}
	
	
	//delete
	@DeleteMapping("/delete/{resultid}")
	public ResponseEntity <?> deleteResult(@PathVariable("resultid") Long id ) {
		resultService.delete(id);
		return new ResponseEntity<> (HttpStatus.OK);
	}
	
	
	//get allnew  stafftime tables 
			@GetMapping("/allstaffTimetables")
			public ResponseEntity <List<Stafftimetables>> allstaffTimetables(){
				List <Stafftimetables> Stafftimetables= StaffNewService.findAllStaffTimetable();
				return new ResponseEntity<> (Stafftimetables,HttpStatus.OK);
			}
	
}
