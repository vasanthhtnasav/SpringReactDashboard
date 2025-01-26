# Full Stack Employee Management Application

## Overview
A full-stack employee management system using React.js, Spring Boot, and MySQL.

## Technologies Used
- **Frontend:** React.js
- **Backend:** Spring Boot
- **Database:** MySQL
- **Build Tool:** Maven
- **API:** RESTful APIs
- **API Testing:** Postman

## Setup Instructions

### Frontend (React.js)
1. Clone the repository:
```bash
git clone https://github.com/your-username/repository-name.git
cd frontend
npm install
npm start
```
The React app runs at `http://localhost:3000`

### Backend (Spring Boot)
1. Navigate to backend directory:
```bash
cd backend
```

2. Set up MySQL and create database `employee_db`

3. Update `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=password
```

4. Run Spring Boot application:
```bash
mvn spring-boot:run
```
The backend runs at `http://localhost:8080`

## Data Flow
1. **Frontend (React.js)**:
   - Sends HTTP requests via `fetch` API
   - Manages employee operations

2. **Backend (Spring Boot)**:
   - Exposes RESTful APIs
   - Processes requests
   - Interacts with MySQL database

3. **Database (MySQL)**:
   - Stores employee data
   - Supports CRUD operations

## API Endpoints
- `GET /all`: List all employees
- `GET /find/{id}`: Get specific employee
- `POST /employee`: Add employee
- `PUT /up/{id}`: Update employee
- `DELETE /del/{id}`: Delete employee

## API Testing with Postman
1. Download and install Postman
2. Create a new collection for employee management
3. Set up requests for each endpoint:
   - GET All Employees: `http://localhost:8080/all`
   - GET Employee by ID: `http://localhost:8080/find/{id}`
   - POST New Employee: 
     - URL: `http://localhost:8080/employee`
     - Body: JSON employee object
   - PUT Update Employee:
     - URL: `http://localhost:8080/up/{id}`
     - Body: Updated employee details
   - DELETE Employee: `http://localhost:8080/del/{id}`

## Frontend Details
- Built with React.js
- Uses `fetch` for backend communication
- Interactive employee management forms

## Backend Details
- Spring Boot application
- Spring Data JPA integration
- `EmployeeService` handles business logic
