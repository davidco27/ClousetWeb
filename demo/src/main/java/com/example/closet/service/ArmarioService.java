package com.example.closet.service;

import com.example.closet.model.Outfit;
import com.example.closet.model.Prenda;
import com.example.closet.repository.ArmarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArmarioService {

    @Autowired
    private ArmarioRepository armarioRepository;

    public List<Prenda> getPrendasByUser(String userId) {
        // Devuelve todas las prendas del armario de un usuario
        return armarioRepository.getPrendasByUser(userId);
    }

    public Prenda getPrendaByUser(String userId, String idPrenda) {
        //Devuelve la prenda del usuario especificado
        return armarioRepository.getPrendaById(userId, idPrenda);
    }

    public void postPrendaByUser(Prenda prenda) {
        // Guarda una nueva prenda en el armario del usuario
        armarioRepository.postPrendaByUser(prenda.getId(), prenda.getColor(), prenda.getMarca(), prenda.getValoracion(), prenda.getNvaloraciones(), prenda.getNombre_usuario(), prenda.getTipo());
    }

    public List<Outfit> getOutfitsByUser(String userId) {
        // Devuelve todas las prendas del armario de un usuario
        return armarioRepository.getOutfitsByUser(userId);
    }

    public Outfit getOutfitByUser(String userId, String idOutfit) {
        //Devuelve el outfit del usuario especificado
        return armarioRepository.getOutfitById(userId, idOutfit);
    }

    public void postOutfitByUser(Outfit outfit) {
        // Guarda un nuevo outfit en el armario del usuario
        armarioRepository.postOutfitByUser(outfit.getId(), outfit.getId_prendas(), outfit.getValoracion(), outfit.getNombre_usuario(), outfit.getNvaloraciones());
    }

}
