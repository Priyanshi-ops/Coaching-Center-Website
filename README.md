# Coaching Centre Website  
A full-stack web application for a Coaching Centre where users can view available courses and enroll online.  
The project is built using **React (Frontend)**, **Spring Boot (Backend)** and **MySQL (Database)**.
---
Live Demo Link for Frontend - https://priyanshi-ops.github.io/Coaching-centre-project/
to save the data in backend  .kindly  save and run the  file of spring boot 
Folder Navigation Path:

Open the repository

Go to: demo

Then open: src

Then: main

Then: java

Then navigate to: com → myproject → demo
---
Backend Source Code Folder:
👉 controller/ → All REST APIs
👉 service/ (if available)
👉 repository/ → JPA Repository Interfaces
👉 model/ → Entity Classes
👉 config/ → Security / CORS configurations
👉 MyprojectApplication.java → Spring Boot Main Application File
##
How to Run Backend
1️⃣ Open project in IntelliJ / VS Code
2️⃣ Update MySQL Configuration (if needed)
##
In application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/yourdbname
spring.datasource.username=yourusername
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

## 🚀 Features
- View all available courses  
- Course details page  
- Student enrollment form  
- Backend-powered API for courses and enrollments  
- MySQL database connectivity  
- Fully responsive UI

---
## ⚙️ Backend Setup (Spring Boot)

1. Install **Java 17+**
2. Install **Maven**
3. Create MySQL database in Mysql Workbench:
   ```sql
   CREATE DATABASE coaching;


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



spring.datasource.url=jdbc:mysql://localhost:3306/coaching
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

mvn spring-boot:run
