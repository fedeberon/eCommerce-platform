package com.ideaas.lared.dao;

import com.ideaas.lared.domain.User;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UsuarioDao extends PagingAndSortingRepository<User, Long> {
    User findByUsername(String username);
}
