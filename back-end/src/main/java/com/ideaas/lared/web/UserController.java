package com.ideaas.lared.web;

import com.ideaas.lared.domain.User;
import com.ideaas.lared.service.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("usuario")
public class UserController {

    private IUserService usuarioService;

    @Autowired
    public UserController(IUserService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @RequestMapping("/list")
    public String findAllPageable(@RequestParam(defaultValue = "5") Integer size,
                                  @RequestParam(defaultValue = "0") Integer page, Model model) {
        List<User> usuarios = usuarioService.findAll(size, page, "id");
        model.addAttribute("usuarios", usuarios);
        model.addAttribute("page", page);

        return "usuario/list";
    }

    @RequestMapping(value = "save")
    public String save(@ModelAttribute("usuario") User user, BindingResult result) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        String pass = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(pass);
        usuarioService.save(user);

        return "redirect:list";
    }

    @RequestMapping("/create")
    public String create(@ModelAttribute("usuario") User user) {
        return "usuario/create";
    }
}
