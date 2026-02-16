package com.myproject.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.myproject.demo.model.Admission;
import com.myproject.demo.repository.AdmissionRepository;

@RestController
@RequestMapping({"/api/admissions", "/api/admission"})
public class AdmissionController {

    @Autowired
    private AdmissionRepository admissionRepository;

    // 🟢 1️⃣ Save new admission (already working)
    @PostMapping
    public Admission createAdmission(@RequestBody Admission admission) {
        return admissionRepository.save(admission);
    }

    // 🔵 2️⃣ View all admissions (new code)
    @GetMapping
    public List<Admission> getAllAdmissions() {
        return admissionRepository.findAll();
    }
}
