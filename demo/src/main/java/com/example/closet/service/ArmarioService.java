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
        return armarioRepository.getPrendaById(idPrenda);
    }
    public  void deletePrenda(String idPrenda) {
        //Devuelve la prenda del usuario especificado
        armarioRepository.deletePrendaById(idPrenda);
    }
    public  void deleteOutfit(String idOutfit) {
        //Devuelve la prenda del usuario especificado
        armarioRepository.deleteOutfitById(idOutfit);
    }
    public  void valorarPrenda(String idPrenda,float valoracion) {
        //Devuelve la prenda del usuario especificado
        Prenda prenda=armarioRepository.getPrendaById(idPrenda);
        int valoraciones = prenda.getNvaloraciones();
        float valoracionNueva = ((prenda.getValoracion()* valoraciones)+ valoracion)/ (valoraciones+1);
        armarioRepository.valorarPrendaById(valoracionNueva,valoraciones+1,idPrenda);
    }
    public  void valorarOufit(String idOutfit,float valoracion) {
        //Devuelve la prenda del usuario especificado
        Outfit outfit=armarioRepository.getOutfitById(idOutfit);
        int valoraciones = outfit.getNvaloraciones();
        float valoracionNueva = ((outfit.getValoracion()* valoraciones)+ valoracion)/ (valoraciones+1);
        armarioRepository.valorarOutfitById(valoracionNueva,valoraciones+1,idOutfit);
    }

    public void postPrendaByUser(Prenda prenda) {
        // Guarda una nueva prenda en el armario del usuario
        armarioRepository.postPrendaByUser(prenda.getId(),prenda.getNombre(), prenda.getFecha_creacion(),prenda.getColor(), prenda.getMarca(), prenda.getValoracion(), prenda.getNvaloraciones(), prenda.getNombre_usuario(), prenda.getTipo());
    }

    public List<Outfit> getOutfitsByUser(String userId) {
        // Devuelve todas las prendas del armario de un usuario
        return armarioRepository.getOutfitsByUser(userId);
    }
    public Outfit getOutfitById(String userId, String idOutfit) {
        //Devuelve el outfit del usuario especificado
        return armarioRepository.getOutfitById(idOutfit);
    }

    public void postOutfitByUser(Outfit outfit) {
        // Guarda un nuevo outfit en el armario del usuario
        armarioRepository.postOutfitByUser(outfit.getId(),outfit.getId_prendas(),outfit.getNombre(),outfit.getFecha_creacion(), outfit.getValoracion(), outfit.getNombre_usuario(), outfit.getNvaloraciones());
    }

}
