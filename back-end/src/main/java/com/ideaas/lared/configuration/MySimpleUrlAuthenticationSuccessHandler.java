package com.ideaas.lared.configuration;

import com.ideaas.lared.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class MySimpleUrlAuthenticationSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {

    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private UserService userService;


    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
        User user = (User) authentication.getPrincipal();
        UserDetails userDetails = null;
        if (user.getUsername().equals("test")) {
            userDetails = new User(user.getUsername(), "test", new ArrayList<>());
        } else {
            userDetails = userService.loadUserByUsername(user.getUsername());
        }
        final String token = jwtTokenUtil.generateToken(userDetails);
        httpServletResponse.setHeader(HttpHeaders.AUTHORIZATION, "Bearer " + token);
        Cookie sessionCookie = new Cookie("REDSOFT", token);
        httpServletResponse.addCookie(sessionCookie);

        getRedirectStrategy().sendRedirect(httpServletRequest, httpServletResponse, "/home");
    }

}
