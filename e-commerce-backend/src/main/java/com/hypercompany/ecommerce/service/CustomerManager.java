package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.model.User;
import com.hypercompany.ecommerce.model.dto.requests.UpdateUserRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllUserResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByUserDetails;
import com.hypercompany.ecommerce.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class CustomerManager {
    private final UserRepository customerRepository;
    private final ModelMapper modelMapper;
    private final BCryptPasswordEncoder passwordEncoder;

    public GetByUserDetails getByUsername(String username){
        return modelMapper.map(customerRepository.findByUsername(username), GetByUserDetails.class);
    }

   public void updateCustomer(String username, UpdateUserRequest request){
        Optional<User> user =  customerRepository.findByUsername(username);
        if(user.isPresent()){
            User user1 = user.get();
            if(request.getName()!=null && !request.getName().isEmpty()){
                user1.setName(request.getName());
            }
            if(request.getSurname()!=null && !request.getSurname().isEmpty()){
                user1.setSurname(request.getSurname());
            }
            if(request.getUsername()!=null && !request.getUsername().isEmpty()){
                user1.setUsername(request.getUsername());
            }
            if(request.getPassword()!=null && !request.getPassword().isEmpty()){
                user1.setPassword(passwordEncoder.encode(request.getPassword()));
            }
            customerRepository.save(user1);
        }



    }

    public List<GetAllUserResponse> getAllCustomers(){
        return customerRepository.findAll().stream().
                map(user -> modelMapper.map(user,GetAllUserResponse.class)).toList();
    }


}
