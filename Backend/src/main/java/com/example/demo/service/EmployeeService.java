    package com.example.demo.service;

    import com.example.demo.entity.Employee;
    import com.example.demo.repo.EmployeeRepository;
    import org.springframework.stereotype.Service;

    import java.util.List;
    import java.util.Optional;

    @Service
    public class EmployeeService {
        private final EmployeeRepository employeeRepository;

        public EmployeeService(EmployeeRepository employeeRepository) {
            this.employeeRepository = employeeRepository;
        }
        public Employee addEmployee(Employee employee) {
            return employeeRepository.save(employee);


        }

        public List<Employee> getAllEmployees() {
            return employeeRepository.findAll();
        }

        public void deleteEmployee(Long id) {
            employeeRepository.deleteById(id);
        }

public Employee getEmployeeById(Long id) {
            return employeeRepository.findById(id).orElse(null);

}

public Employee updateEmployee(Employee employee) {
            return employeeRepository.save(employee);
}

        public Employee updateEmployee(long id, Employee updatedData) {
            Employee existingEmployee = employeeRepository.findById(id)
                    .orElseThrow(() -> new IllegalArgumentException("Employee not found with id: " + id));
            existingEmployee.setName(updatedData.getName());
            existingEmployee.setEmail(updatedData.getEmail());
            existingEmployee.setDepartment(updatedData.getDepartment());
            existingEmployee.setPhone(updatedData.getPhone());
            return employeeRepository.save(existingEmployee);
        }

    }
