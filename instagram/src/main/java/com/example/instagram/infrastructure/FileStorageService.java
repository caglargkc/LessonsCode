package com.example.instagram.infrastructure;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Service
@Slf4j
public class FileStorageService {

    // Gerçek S3/CDN yerine yerel dizin kullanıyoruz.
    private final String storagePath = System.getProperty("java.io.tmpdir") + "/fake-s3-storage";

    public FileStorageService() {
        File dir = new File(storagePath);
        if (!dir.exists()) {
            dir.mkdirs();
        }
    }

    public String uploadFile(MultipartFile file) throws IOException {
        String filename = file.getOriginalFilename();
        File targetFile = new File(storagePath, filename);
        file.transferTo(targetFile);
        // Sahte CDN URL'si oluşturma
        return "http://localhost:8081/cdn/" + filename;
    }
}
