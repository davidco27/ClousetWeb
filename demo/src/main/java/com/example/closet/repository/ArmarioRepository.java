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

    @Query("SELECT * FROM \"PRENDAS\" WHERE \"nombre_usuario\" = :nombre_usuario AND \"id\" = :idPrenda")
    Prenda getPrendaById(String nombre_usuario, String idPrenda);

    /* FUTURO: esto es un mensaje del pasado para que incluyais la foto */
    @Modifying
    @Query("INSERT INTO \"PRENDAS\" values (:id,:color,:marca,:valoracion,:nValoraciones,:nombre_usuario,:tipo)")
    void postPrendaByUser(String id, String color, String marca, float valoracion, int nValoraciones, String nombre_usuario, String tipo);

    @Query("SELECT * FROM \"OUTFITS\" WHERE \"nombre_usuario\" = :nombre_usuario")
    List<Outfit> getOutfitsByUser(String nombre_usuario);

    @Query("SELECT * FROM \"OUTFITS\" WHERE \"nombre_usuario\" = :nombre_usuario AND \"id\" = :idOutfit")
    Outfit getOutfitById(String nombre_usuario, String idOutfit);

    @Modifying
    @Query("INSERT INTO \"OUTFITS\" values (:id,:id_prendas,:valoracion,:nombre_usuario,:nValoraciones)")
    void postOutfitByUser(String id, String id_prendas, float valoracion, String nombre_usuario, int nValoraciones);
}
