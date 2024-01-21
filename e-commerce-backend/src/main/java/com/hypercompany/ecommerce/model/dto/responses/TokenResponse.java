package com.hypercompany.ecommerce.model.dto.responses;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TokenResponse extends ApiResponse{
    private String token;

    public TokenResponse(boolean success, String message, String token) {
        super(success, message);
        this.token = token;
    }
}
