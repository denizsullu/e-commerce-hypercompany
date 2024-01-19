package com.hypercompany.ecommerce.controller;

import com.hypercompany.ecommerce.model.dto.requests.CreateBrandRequest;
import com.hypercompany.ecommerce.model.dto.requests.CreateProductRequest;
import com.hypercompany.ecommerce.model.dto.requests.UpdateBrandRequest;
import com.hypercompany.ecommerce.model.dto.requests.UpdateProductRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllProductResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByIdBrandResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByIdProductResponse;
import com.hypercompany.ecommerce.service.ProductService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@AllArgsConstructor
@CrossOrigin("*")
public class ProductsController {
    private final ProductService productService;
    @PostMapping("/add")
    @ResponseStatus(code = HttpStatus.CREATED)
    public void add( CreateProductRequest request){
        this.productService.add(request);
    }

    @PostMapping("/addMultiple")
    @ResponseStatus(code = HttpStatus.CREATED)
    public void addMultiple(@RequestBody List<CreateProductRequest> requestList){
        for (CreateProductRequest request : requestList) {
            this.productService.add(request);
        }
    }

    @GetMapping("/getAllByCategoryId/{id}")
    public List<GetAllProductResponse> getAllByCategoryId(@PathVariable int id){
        return this.productService.getAllByCategoryId(id);
    }

    @GetMapping("/{id}")
    public GetByIdProductResponse getById(@PathVariable int id){
        return this.productService.getById(id);
    }



    @PutMapping("/update")
    public void update( UpdateProductRequest UpdateProductRequest){

        this.productService.update(UpdateProductRequest);
    }

    @GetMapping("/getAll")
    public List<GetAllProductResponse> getAllProductResponses(){
        return this.productService.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        this.productService.delete(id);
    }
}
