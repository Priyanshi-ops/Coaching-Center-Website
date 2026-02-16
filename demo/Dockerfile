# Step 1: Use an official Java runtime as base image
FROM eclipse-temurin:17-jdk

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy the JAR file from the target folder into the container
COPY target/*.jar app.jar

# Step 4: Expose port 8080 (Spring Boot default)
EXPOSE 8080

# Step 5: Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]
