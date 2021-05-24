package com.example.closet.service;

import com.example.closet.model.Usuario;
import com.example.closet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService implements UserDetailsService {

    @Autowired
    private PasswordEncoder passwordEncoder;

   @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        final Usuario user = repository.getUserByUserName(username);
        if (user == null) {
            throw new UsernameNotFoundException("No user found with username: " + username);
        }

        return new User(user.getUsername(),
                user.getPassword(),
                List.of((GrantedAuthority) () -> "USER"));
    }
    public void registerUser(Usuario user) {
        repository.saveUser(user.getUsername(),user.getEmail(),user.getPassword());
    }
    public boolean userExists(String username){
        return repository.getUserByUserName(username) != null;
    }
    public boolean emailExists(String email){

        return repository.getUserByEmail(email) != null;
    }

}
