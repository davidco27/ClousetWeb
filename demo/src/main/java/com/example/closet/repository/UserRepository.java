package com.example.closet.repository;

import com.example.closet.model.Usuario;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<Usuario, Long> {

    @Query("SELECT * FROM \"USERS\" WHERE \"username\" = :username")
    Usuario getUserByUserName( String username);

    @Modifying
    @Query("insert into \"USERS\" values (:username,:email,:password)")
    void saveUser(String username,String email,String password);

    @Query("SELECT * FROM \"USERS\" WHERE \"email\" = :email")
    Usuario getUserByEmail(@Param("email") String email);




}
