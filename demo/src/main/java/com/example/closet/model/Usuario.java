package com.example.closet.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table("USERS")
public class Usuario {
    @Id
    private String username;
    private String password;
    private String email;

}
