package com.example.demo.control;

import com.example.demo.entity.Employee;
import com.example.demo.repo.EmployeeRepository;
import com.example.demo.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")

@CrossOrigin(origins = "http://localhost:3000")

public class EmployeeController {
    private final EmployeeService employeeService;
    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeService employeeService, EmployeeRepository employeeRepository) {
        this.employeeService = employeeService;
        this.employeeRepository = employeeRepository;
    }

    @PostMapping("/employee")
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }

    @GetMapping("/all")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @DeleteMapping("/del/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable long id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok().build();

    }

    @GetMapping("/find/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable long id) {
        Employee employee = employeeService.getEmployeeById(id);
        return ResponseEntity.ok().body(employee);
    }

    @PatchMapping("/up/{id}")
    public ResponseEntity<?> updateEmployee(@PathVariable long id, @RequestBody Employee employee) {
        Employee updateEmployee = employeeService.updateEmployee(id, employee);
        return ResponseEntity.ok(updateEmployee);
    }

}

