package com.example.closet.repository;

import com.example.closet.model.Outfit;
import com.example.closet.model.Prenda;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArmarioRepository extends CrudRepository<Prenda, String> {

    @Query("SELECT * FROM \"PRENDAS\" WHERE \"nombre_usuario\" = :nombre_usuario")
    List<Prenda> getPrendasByUser(String nombre_usuario);

    /* FUTURO: esto es un mensaje del pasado para que incluyais la foto */
    @Modifying
    @Query("INSERT INTO \"PRENDAS\" values (:id,:color,:marca,:valoracion,:nValoraciones,:username,:tipo)")
    void postPrendaByUser(String id, String color, String marca, float valoracion, int nValoraciones, String nombre_usuario, String tipo);

    @Query("SELECT * FROM \"OUTFITS\" WHERE \"nombre_usuario\" = :username")
    List<Outfit> getOutfitsByUser(String nombre_usuario);
}
