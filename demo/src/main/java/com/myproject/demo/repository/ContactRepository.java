package com.myproject.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.myproject.demo.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}