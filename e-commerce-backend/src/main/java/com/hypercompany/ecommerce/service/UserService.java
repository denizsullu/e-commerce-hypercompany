package com.hypercompany.ecommerce.service;


import com.hypercompany.ecommerce.model.Role;
import com.hypercompany.ecommerce.model.User;
import com.hypercompany.ecommerce.model.dto.requests.CreateUserRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetByUserDetails;
import com.hypercompany.ecommerce.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class UserService implements UserDetailsService {


    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsername(username);
        return user.orElseThrow(()-> new EntityNotFoundException("User not found"));
    }

    public UserService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    public User createUser(CreateUserRequest request){

        User newUser = User.builder()
                .name(request.name())
                .username(request.username())
                .surname(request.surname())
                .password(passwordEncoder.encode(request.password()))
                .authorities(Set.of(Role.ROLE_USER))
                .accountNonExpired(true)
                .credentialsNonExpired(true)
                .isEnabled(true)
                .accountNonLocked(true)
                .build();

        return userRepository.save(newUser);

    }


}
