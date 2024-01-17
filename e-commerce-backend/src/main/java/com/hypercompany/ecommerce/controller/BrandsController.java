package com.hypercompany.ecommerce.controller;

import com.hypercompany.ecommerce.model.dto.requests.CreateBrandRequest;
import com.hypercompany.ecommerce.model.dto.requests.UpdateBrandRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllBrandsResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByIdBrandResponse;
import com.hypercompany.ecommerce.service.BrandService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/brands")
@AllArgsConstructor
public class BrandsController {
    private BrandService brandService;

    @GetMapping()
    public List<GetAllBrandsResponse> getAll(){
        return brandService.getAll();
    }

    @GetMapping("/{id}")
    public GetByIdBrandResponse getById(@PathVariable int id){
        return brandService.getById(id);
    }

    @PostMapping()
    @ResponseStatus(code = HttpStatus.CREATED)
    public void add( CreateBrandRequest request){
        brandService.add(request);
    }

    @PutMapping()
    public void update( UpdateBrandRequest updateBrandRequest){
        brandService.update(updateBrandRequest);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        brandService.delete(id);
    }



}
