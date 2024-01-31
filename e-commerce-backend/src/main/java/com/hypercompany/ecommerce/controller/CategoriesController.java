package com.hypercompany.ecommerce.controller;

import com.hypercompany.ecommerce.model.dto.requests.CreateCategoryRequest;
import com.hypercompany.ecommerce.model.dto.requests.UpdateCategoryRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllCategoryResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByIdCategoryResponse;
import com.hypercompany.ecommerce.service.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@AllArgsConstructor
@CrossOrigin("*")
public class CategoriesController {

    private CategoryService categoryService;

    @GetMapping("/getAll")
    @Cacheable(value = "categories")
    public List<GetAllCategoryResponse> getAll(){
        return this.categoryService.getAll();
    }

    @PostMapping("/add")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @ResponseStatus(code = HttpStatus.CREATED)
    @CacheEvict(value = "categories", allEntries = true)
    public void add(@RequestBody CreateCategoryRequest createCategoryRequest){
        this.categoryService.add(createCategoryRequest);
    }

    @PutMapping("/update")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @CacheEvict(value = "categories", allEntries = true)
    public void update(@RequestBody UpdateCategoryRequest updateCategoryRequest){
        this.categoryService.update(updateCategoryRequest);
    }
    @GetMapping("/{id}")
    @Cacheable(value = "categories")
    public GetByIdCategoryResponse getById(@PathVariable int id){
        return this.categoryService.getById(id);
    }

    @DeleteMapping("delete/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @CacheEvict(value = "categories", allEntries = true)
    public void delete(@PathVariable int id){
        this.categoryService.delete(id);
    }

    @PostMapping("/addAll")
    @ResponseStatus(code = HttpStatus.CREATED)
    @CacheEvict(value = "categories", allEntries = true)
    public void addAll(@RequestBody List<CreateCategoryRequest> createCategoryRequestList){
        this.categoryService.addAll(createCategoryRequestList);
    }
}
