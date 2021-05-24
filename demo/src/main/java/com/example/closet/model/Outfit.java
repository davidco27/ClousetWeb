package com.example.closet.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table("OUTFITS")
public class Outfit {

    @Id
    private String id;
    private String idPrendas;
    private float valoracion;
    private String nombre_usuario;
    private int nvaloraciones;

}
