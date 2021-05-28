package com.example.closet.repository;

import com.example.closet.model.Outfit;
import com.example.closet.model.Prenda;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ArmarioRepository extends CrudRepository<Prenda, String> {

    @Query("SELECT * FROM \"PRENDAS\" WHERE \"nombre_usuario\" = :nombre_usuario")
    List<Prenda> getPrendasByUser(String nombre_usuario);

    @Query("SELECT * FROM \"PRENDAS\" WHERE \"id\" = :idPrenda")
    Prenda getPrendaById(String idPrenda);
    @Modifying
    @Query("DELETE FROM \"PRENDAS\" WHERE  \"id\" = :idPrenda")
    void deletePrendaById(String idPrenda);
    @Modifying
    @Query("DELETE FROM \"OUTFITS\" WHERE  \"id\" = :idOutfit")
    void deleteOutfitById(String idOutfit);
    @Modifying
    @Query("UPDATE \"PRENDAS\" SET \"valoracion\"= :valoracion,\"nvaloraciones\" = :nvaloraciones WHERE  \"id\" = :idPrenda")
   void valorarPrendaById(float valoracion,int nvaloraciones, String idPrenda);
    @Modifying
    @Query("UPDATE \"OUTFITS\" SET \"valoracion\"= :valoracion,\"nvaloraciones\" = :nvaloraciones WHERE  \"id\" = :idOutfit")
    void valorarOutfitById(float valoracion,int nvaloraciones, String idOutfit);
    /* FUTURO: esto es un mensaje del pasado para que incluyais la foto */
    @Modifying
    @Query("INSERT INTO \"PRENDAS\" values (:id,:color,:marca,:valoracion,:nValoraciones,:nombre_usuario,:tipo,:nombre,:fecha)")
    void postPrendaByUser(String id, String nombre, Date fecha, String color, String marca, float valoracion, int nValoraciones, String nombre_usuario, String tipo);

    @Query("SELECT * FROM \"OUTFITS\" WHERE \"nombre_usuario\" = :nombre_usuario")
    List<Outfit> getOutfitsByUser(String nombre_usuario);

    @Query("SELECT * FROM \"OUTFITS\" WHERE \"id\" = :idOutfit")
    Outfit getOutfitById( String idOutfit);

    @Modifying
    @Query("INSERT INTO \"OUTFITS\" values (:id,:id_prendas,:valoracion,:nombre_usuario,:nValoraciones,:nombre,:fecha)")
    void postOutfitByUser(String id, String id_prendas,String nombre, Date fecha, float valoracion, String nombre_usuario, int nValoraciones);

}
