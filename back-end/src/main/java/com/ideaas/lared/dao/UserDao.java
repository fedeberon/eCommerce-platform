package com.ideaas.lared.dao;

import com.ideaas.lared.domain.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends UserDetailsService {
    User get(String username);

}
