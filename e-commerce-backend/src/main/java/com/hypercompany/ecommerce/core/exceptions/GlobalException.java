package com.hypercompany.ecommerce.core.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalException {

    @ExceptionHandler
    @ResponseStatus(code = HttpStatus.BAD_REQUEST)
    public ProblemDetails handleBusinessException(BusinessExceptions businessExceptions){
        ProblemDetails problemDetails = new ProblemDetails();
        problemDetails.setMessage(businessExceptions.getMessage());
        return problemDetails;
    }

}
