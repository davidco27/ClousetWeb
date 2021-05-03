package com.example.closet.repository;

import com.example.closet.model.Usuario;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<Usuario, Long> {

    @Query("SELECT TOP 1 * FROM USERS WHERE USERNAME= :username")
    Usuario getUserByUserName(@Param("username") String username);

    @Query("SELECT TOP 1 * FROM USERS WHERE EMAIL= :email")
    Usuario getUserByEmail(@Param("email") String email);




}
