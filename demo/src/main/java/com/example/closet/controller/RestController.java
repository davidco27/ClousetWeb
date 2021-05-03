package com.example.closet.controller;


import com.example.closet.model.RegisterRequest;
import com.example.closet.model.Usuario;
import com.example.closet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/api")
public class RestController {
    @Autowired
    UserService service;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> registration(@Valid @RequestBody RegisterRequest request) {
       if(service.userExists(request.getUsername())){
           return ResponseEntity.status(401).body("El usuario introducido ya existe");
       }
       else if(service.emailExists(request.getEmail())){
           return ResponseEntity.status(401).body("El email introducido ya esta asociado a una cuenta");
       }
       Usuario user= new Usuario();
       user.setEmail(request.getEmail());
       user.setUsername(request.getUsername());
       user.setPassword(passwordEncoder.encode(request.getPassword()));
       service.registerUser(user);
       return ResponseEntity.ok().body("Usuario registrado correctamente");
    }
}