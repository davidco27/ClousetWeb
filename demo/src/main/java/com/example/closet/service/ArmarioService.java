package com.example.closet.service;

import com.example.closet.model.Outfit;
import com.example.closet.model.Prenda;
import com.example.closet.repository.ArmarioRepository;
import com.example.closet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArmarioService {

    @Autowired
    private ArmarioRepository armarioRepository;

    public List<Prenda> getPrendasByUser(String userId) {
        // Devuleve todas las prendas del armario de un usuario
        return armarioRepository.getPrendasByUser(userId);
    }


    public List<Outfit> getOutfitsByUser(String userId) {
        // Devuleve todas las prendas del armario de un usuario
        return armarioRepository.getOutfitsByUser(userId);
    }
}
