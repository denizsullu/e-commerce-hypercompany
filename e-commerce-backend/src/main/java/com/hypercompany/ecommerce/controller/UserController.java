package com.hypercompany.ecommerce.controller;


import com.hypercompany.ecommerce.model.User;
import com.hypercompany.ecommerce.model.dto.requests.AutRequest;
import com.hypercompany.ecommerce.model.dto.requests.CreateUserRequest;
import com.hypercompany.ecommerce.model.dto.responses.TokenResponse;
import com.hypercompany.ecommerce.service.JwtService;
import com.hypercompany.ecommerce.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {
    private final UserService userService;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public User addUser(@RequestBody CreateUserRequest request) {

        return userService.createUser(request);
    }
    @PostMapping("/login")
    public ResponseEntity<TokenResponse> generateToken(@RequestBody AutRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.username(), request.password())
        );

        if(authentication.isAuthenticated()) {
            // Kullanıcı adını ve rollerini al
            String userName = ((UserDetails) authentication.getPrincipal()).getUsername();
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();

            // JWT oluştur
            String token = jwtService.generateToken(userDetails);

            // TokenResponse oluştur ve dön
            return ResponseEntity.ok(new TokenResponse(token));
        }
        throw new UsernameNotFoundException("Invalid username or password: " + request.username());
    }


}


