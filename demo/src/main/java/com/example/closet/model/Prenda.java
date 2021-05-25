package com.example.closet.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table("PRENDAS")
public class Prenda {

    @Id
    private String id;
    private String nombre;
    private String color;
    private String marca;
    private float valoracion;
    private int nvaloraciones;
    private String nombre_usuario;
    private String tipo;

}
