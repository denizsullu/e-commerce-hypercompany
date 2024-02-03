package com.hypercompany.ecommerce.controller;


import com.hypercompany.ecommerce.model.User;
import com.hypercompany.ecommerce.model.dto.requests.AutRequest;
import com.hypercompany.ecommerce.model.dto.requests.CreateUserRequest;
import com.hypercompany.ecommerce.model.dto.requests.UpdateUserRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllUserResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByUserDetails;
import com.hypercompany.ecommerce.model.dto.responses.TokenResponse;
import com.hypercompany.ecommerce.service.CustomerManager;
import com.hypercompany.ecommerce.service.JwtService;
import com.hypercompany.ecommerce.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {
    private final UserService userService;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final CustomerManager customerService;

    @PostMapping("/register")
    @CacheEvict(value = "users",allEntries = true)
    public User addUser(@RequestBody CreateUserRequest request) {

        return userService.createUser(request);
    }
    @PostMapping("/login")
    public ResponseEntity<TokenResponse> generateToken(@RequestBody AutRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.username(), request.password())
        );

        if(authentication.isAuthenticated()) {

            String userName = ((UserDetails) authentication.getPrincipal()).getUsername();
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();


            String token = jwtService.generateToken(userDetails);

            // TokenResponse oluştur ve dön
            return ResponseEntity.ok(new TokenResponse(true,"Başarılı",token));
        }
        throw new UsernameNotFoundException("Invalid username or password: " + request.username());
    }

    @GetMapping("/user/{username}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    @Cacheable(value = "users")
    public GetByUserDetails getByUsername(@PathVariable("username") String username){
        return customerService.getByUsername(username);
    }

    @PutMapping("/user/update")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    @CacheEvict(value = "users",allEntries = true)
    public void updateUser(@RequestBody UpdateUserRequest request){
         customerService.updateCustomer(request);
    }

    @GetMapping("/user/all")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Cacheable(value = "users")
    public List<GetAllUserResponse> getAllUsers(){
        return customerService.getAllCustomers();
    }



}


