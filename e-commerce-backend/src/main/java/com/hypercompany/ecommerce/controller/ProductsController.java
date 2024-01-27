package com.hypercompany.ecommerce.controller;

import com.hypercompany.ecommerce.model.dto.responses.ApiResponse;
import com.hypercompany.ecommerce.model.dto.requests.CreateProductRequest;
import com.hypercompany.ecommerce.model.dto.requests.UpdateProductRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllProductResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByIdProductResponse;
import com.hypercompany.ecommerce.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@AllArgsConstructor
@CrossOrigin("*")
public class ProductsController {
    private final ProductService productService;

    @PostMapping("/add")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<ApiResponse> add(@RequestBody CreateProductRequest request){
        this.productService.add(request);
        return new ResponseEntity<>(new ApiResponse(true,"Ürün Başarıyla Eklendi"), HttpStatus.CREATED);
    }

    @PostMapping("/addMultiple")
   @PreAuthorize("hasRole('ROLE_ADMIN')")
    @ResponseStatus(code = HttpStatus.CREATED)
    public  ResponseEntity<ApiResponse> addMultiple(@RequestBody List<CreateProductRequest> requestList){
        for (CreateProductRequest request : requestList) {
            this.productService.add(request);
        }
        return new ResponseEntity<>(new ApiResponse(true,"Products successfully added"), HttpStatus.CREATED);
    }

    @GetMapping("/getAllByCategoryId/{id}")
    @Cacheable(value = "productsCategory")
    public List<GetAllProductResponse> getAllByCategoryId(@PathVariable int id){
        return this.productService.getAllByCategoryId(id);
    }

    @GetMapping("/{id}")
    public GetByIdProductResponse getById(@PathVariable int id){
        return this.productService.getById(id);
    }



    @PutMapping("/update")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public  ResponseEntity<ApiResponse> update(@RequestBody UpdateProductRequest UpdateProductRequest){

        this.productService.update(UpdateProductRequest);
        return new ResponseEntity<>(new ApiResponse(true,"Product successfully updated"), HttpStatus.OK);
    }

    @GetMapping("/getAll")
    @Cacheable(value = "products")
    public List<GetAllProductResponse> getAllProductResponses(){
        return this.productService.getAll();
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<ApiResponse> delete(@PathVariable int id){

        this.productService.delete(id);
        return new ResponseEntity<>(new ApiResponse(true,"Product successfully deleted"), HttpStatus.OK);
    }
}
