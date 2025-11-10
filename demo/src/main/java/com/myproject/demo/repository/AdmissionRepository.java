package com.myproject.demo.repository;

import com.myproject.demo.model.Admission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdmissionRepository extends JpaRepository<Admission,Long> {
}
