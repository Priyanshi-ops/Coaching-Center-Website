# Use OpenJDK image
FROM openjdk:17-jdk-slim

# Jar file copy karo
COPY target/*.jar app.jar

# Port define karo
EXPOSE 8080

# Start command
ENTRYPOINT ["java","-jar","/app.jar"]
c