FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -q
COPY src ./src
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target/click-tracker-backend-1.0.0.jar app.jar
EXPOSE 10000
ENTRYPOINT ["java", "-Dspring.datasource.url=jdbc:postgresql://db.tieroicjrtzhnqwyskrd.supabase.co:5432/postgres?sslmode=require", "-Dspring.datasource.username=postgres", "-Dspring.datasource.password=@Kashsharma1", "-Dspring.datasource.driver-class-name=org.postgresql.Driver", "-Dspring.jpa.hibernate.ddl-auto=update", "-Dserver.port=10000", "-jar", "app.jar"]


