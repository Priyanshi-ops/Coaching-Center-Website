package com.myproject.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.myproject.demo.model.Contact;
import com.myproject.demo.repository.ContactRepository;

@RestController
@RequestMapping({"/api/contact", "/api/contacts"})
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping
    public Contact saveContact(@RequestBody Contact contact) {

        return contactRepository.save(contact);
    }

    @GetMapping
    public java.util.List<Contact> getAllContacts() {

        return contactRepository.findAll();
    }
}
