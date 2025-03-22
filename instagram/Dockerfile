# Temerin OpenJDK 23 (Alpine) imajını kullanıyoruz.
FROM eclipse-temurin:23-jdk-alpine

LABEL authors="caglar.gokce"

# Container içinde çalışma dizinini ayarla.
WORKDIR /app

# Derleme sırasında oluşturulan jar dosyasının yolunu belirle.
ARG JAR_FILE=target/instagram-0.0.1-SNAPSHOT.jar

# Jar dosyasını container'a kopyala.
COPY ${JAR_FILE} app.jar

# Uygulamanın dış dünyaya açacağı portu belirt.
EXPOSE 8080

# Container başlatıldığında uygulamayı çalıştır.
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
