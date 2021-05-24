package com.example.closet.controller;


import com.example.closet.model.Outfit;
import com.example.closet.model.Prenda;
import com.example.closet.service.ArmarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;
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

    @GetMapping("/prendas/{idPrenda}")
    public ResponseEntity<Prenda> mostrarPrendaById(@RequestParam("userId") String userId, @PathVariable("idPrenda") String idPrenda){
        // Obtenemos una prendas de un usuario
        Prenda prenda = armarioService.getPrendaByUser(userId, idPrenda);

        return new ResponseEntity<>(prenda , HttpStatus.OK);
    }

    @PostMapping("/prendas")
    public ResponseEntity guardarPrenda(@RequestBody Prenda prenda){
        // Guardamos una nueva en el prenda en el armario
        armarioService.postPrendaByUser(prenda);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/outfits")
    public ResponseEntity<List<Outfit>> mostrarOutfits(@RequestParam("userId") String userId){
        // Obtenemos todos los outfits de un usuario en concreto
        List<Outfit> outfits = armarioService.getOutfitsByUser(userId);
        return new ResponseEntity<>(outfits , HttpStatus.OK);

    }

}
