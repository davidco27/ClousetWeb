package com.example.closet.controller;

import com.example.closet.model.JwtRequest;
import com.example.closet.model.JwtResponse;
import com.example.closet.model.Outfit;
import com.example.closet.model.Prenda;
import com.example.closet.service.ArmarioService;
import com.example.closet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/miarmario")
public class ArmarioController {

    @Autowired
    ArmarioService armarioService;

    @GetMapping("/prendas")
    public ResponseEntity<List<Prenda>> mostrarPrendas(@RequestParam("userId") String userId){
        // Obtenemos todas las prendas de un usuario en concreto
        List<Prenda> prendas = armarioService.getPrendasByUser(userId);

        return new ResponseEntity<>(prendas , HttpStatus.OK);
    }

    @GetMapping("/outfits")
    public ResponseEntity<List<Outfit>> mostrarOutfits(@RequestParam("userId") String userId){
        // Obtenemos todos los outfits de un usuario en concreto
        List<Outfit> outfits = armarioService.getOutfitsByUser(userId);
        return new ResponseEntity<>(outfits , HttpStatus.OK);
    }

}
