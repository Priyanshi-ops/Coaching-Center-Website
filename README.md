# Coaching Centre Website  
A full-stack web application for a Coaching Centre where users can view available courses and enroll online.  
The project is built using **React (Frontend)**, **Spring Boot (Backend)** and **MySQL (Database)**.

---

## 🚀 Features
- View all available courses  
- Course details page  
- Student enrollment form  
- Backend-powered API for courses and enrollments  
- MySQL database connectivity  
- Fully responsive UI

---

## 🛠 Tech Stack

### **Frontend**
- React (JSX)
- Axios
- HTML / CSS / JS

### **Backend**
- Spring Boot  
- Spring Web  
- Spring Data JPA  
- MySQL Connector  

### **Database**
- MySQL

---

## 📁 Project Structure

root/
│
├── demo/ # Spring Boot backend
│ ├── src/main/java
│ ├── src/main/resources
│ └── pom.xml
│
└── frontend/ # React frontend
├── src/
├── public/
└── package.json

---

## ⚙️ Backend Setup (Spring Boot)

1. Install **Java 17+**
2. Install **Maven**
3. Create MySQL database:
   ```sql
   CREATE DATABASE coaching;


spring.datasource.url=jdbc:mysql://localhost:3306/coaching
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

mvn spring-boot:run
