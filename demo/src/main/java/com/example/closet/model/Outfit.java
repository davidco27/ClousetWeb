package com.example.closet.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.util.Date;

@Data
@Table("OUTFITS")
public class Outfit {

    @Id
    private String id;
    private String id_prendas;
    private float valoracion;
    private String nombre_usuario;
    private int nvaloraciones;
    private String nombre;
    private Date fecha_creacion;

}
