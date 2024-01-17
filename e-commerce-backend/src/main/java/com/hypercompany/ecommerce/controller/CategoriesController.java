package com.hypercompany.ecommerce.controller;

import com.hypercompany.ecommerce.model.dto.requests.CreateBrandRequest;
import com.hypercompany.ecommerce.model.dto.requests.CreateCategoryRequest;
import com.hypercompany.ecommerce.model.dto.requests.UpdateCategoryRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllBrandsResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetAllCategoryResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByIdCategoryResponse;
import com.hypercompany.ecommerce.service.CategoryService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@AllArgsConstructor
public class CategoriesController {

    private CategoryService categoryService;

    @GetMapping()
    public List<GetAllCategoryResponse> getAll(){
        return this.categoryService.getAll();
    }

    @PostMapping()
    @ResponseStatus(code = HttpStatus.CREATED)
    public void add( CreateCategoryRequest createCategoryRequest){
        this.categoryService.add(createCategoryRequest);
    }

    @PutMapping()
    public void update( UpdateCategoryRequest updateCategoryRequest){
        this.categoryService.update(updateCategoryRequest);
    }
    @GetMapping("/{id}")
    public GetByIdCategoryResponse getById(@PathVariable int id){
        return this.categoryService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        this.categoryService.delete(id);
    }
}