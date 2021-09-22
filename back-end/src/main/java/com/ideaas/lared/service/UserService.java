package com.ideaas.lared.service;

import com.ideaas.lared.dao.UsuarioDao;
import com.ideaas.lared.domain.User;
import com.ideaas.lared.service.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("usuarioService")
public class UserService implements IUserService {

    private UsuarioDao dao;

    @Autowired
    public UserService(UsuarioDao dao) {
        this.dao = dao;
    }


    @Override
    public User get(String username) {
        return dao.findByUsername(username);
    }

    @Override
    public User save(User user) {
        return dao.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = dao.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList<>());
    }

    @Override
    public List<User> findAll(Integer pageSize, Integer pageNo, String sortBy) {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
        Page<User> usuarios = dao.findAll(paging);

        return usuarios.getContent();
    }
}
