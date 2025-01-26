package com.example.demo.repo;

import com.example.demo.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // JpaRepository provides basic CRUD operations (save, find, delete, etc.)

}
