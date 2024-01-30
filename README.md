# HyperCompany Bootcamp E-Commerce Project

## Project Overview

Welcome to the HyperCompany Bootcamp E-Commerce project. This comprehensive full-stack web application is designed to showcase a blend of modern technologies and best practices. It aims to provide a robust and user-friendly e-commerce platform using Angular, Spring Boot 3, and PostgreSQL.

## Technical Stack and Features

### Frontend
- **Angular**: Drives the dynamic and responsive user interface.
- **Tailwind CSS**: For modern and sleek styling.
- **Angular Material**: Offers a range of customizable and accessible UI components.
- **Reactive Forms**: Facilitates complex forms handling for seamless user interactions.
- **NGX Owl Carousel**: Provides a responsive carousel slider.
- **NGX Toastr**: For implementing notifications and alerts.
- **RxJS**: Manages state and asynchronous operations, enhancing the application's reactivity and efficiency.

### Backend
- **Spring Boot 3**: Ensures efficient processing and stability.
- **PostgreSQL**: For secure and reliable data management.
- **Caffeine Cache**: Optimizes backend performance by caching frequently accessed data.
- **JWT (JSON Web Tokens)**: Handles secure authentication and authorization.

### Other Features
- **Responsive Design**: Ensures a consistent experience across various devices.
- **State Management with RxJS**: Enhances the scalability and efficiency of the application.

### Development Tools
- **Java JDK 17**: The core development kit.
- **Node.js**: Supports frontend development tasks.
- **IDEs (IntelliJ IDEA or Visual Studio Code)**: For efficient coding and project management.
- **Docker**: Used for containerizing PostgreSQL and PGAdmin.

# Project Setup and Configuration Guide

## Initial Setup with Docker

To begin working with the HyperCompany Bootcamp E-Commerce project, the first step is to set up your environment using Docker. This will containerize PostgreSQL and PGAdmin, creating a consistent development environment.

1. **Docker Installation**: Ensure Docker is installed on your system.

2. **PostgreSQL and PGAdmin**: Use Docker to set up PostgreSQL and PGAdmin. This step is crucial for database management and administration.

## Configuring Application Resources

After setting up Docker, the next step is to configure application resources according to your environment.

1. **Resource Allocation**: Adjust the resource settings based on your system capabilities. This includes setting memory and processor limits to optimize performance.

2. **JWT Key Configuration**: For security, configure the JWT key in your application. You can use the provided key or replace it with your own for enhanced security. Consider using a `.env` file for sensitive configurations.

   Example Configuration:
   ```properties
   jwt.key=18BUbMbJPgtMoA20fYZ5SFKc8O7WEA89LpzqDg6O0SsciUqRoji8dh1JUbXpmUyIK9kIxyrF9Aj7BvR/z4bJGjDpBexisup49jipmL6MhMUJMByKEADLBTzmYi4f4dhWm4Zk0VvxttGoQtX7L0XixqY+zVU0p+oTBjAYPMIDhQM=

spring.datasource.url=jdbc:postgresql://localhost:5432/swiftshop
spring.datasource.username=admin
spring.datasource.password=123
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.javax.persistence.validation.mode=none

spring.cache.type=caffeine
spring.cache.caffeine.spec=maximumSize=5000,expireAfterAccess=6000s

## Conclusion and Contact
This project is a testament to a full-stack development skillset, emphasizing user experience, performance optimization, and secure development. For inquiries or feedback, contact [denizsullu@protonmail.com](mailto:denizsullu@protonmail.com).
