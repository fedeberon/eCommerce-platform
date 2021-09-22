package com.ideaas.lared.service.interfaces;

import com.ideaas.lared.domain.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface IUserService extends UserDetailsService {
    User get(String username);

    User save(User user);

    List<User> findAll(Integer pageSize, Integer pageNo, String sortBy);
}
