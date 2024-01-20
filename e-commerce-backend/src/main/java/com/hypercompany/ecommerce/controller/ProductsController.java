package com.hypercompany.ecommerce.controller;

import com.hypercompany.ecommerce.model.dto.ApiResponse;
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
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@AllArgsConstructor
@CrossOrigin("*")
public class ProductsController {
    private final ProductService productService;
    @PostMapping("/add")
    public ResponseEntity<ApiResponse> add(@RequestBody CreateProductRequest request){
        this.productService.add(request);
        return new ResponseEntity<>(new ApiResponse(true,"Ürün Başarıyla Eklendi"), HttpStatus.CREATED);
    }

    @PostMapping("/addMultiple")
    @ResponseStatus(code = HttpStatus.CREATED)
    public  ResponseEntity<ApiResponse> addMultiple(@RequestBody List<CreateProductRequest> requestList){
        for (CreateProductRequest request : requestList) {
            this.productService.add(request);
        }
        return new ResponseEntity<>(new ApiResponse(true,"Products successfully added"), HttpStatus.CREATED);
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
    public  ResponseEntity<ApiResponse> update(@RequestBody UpdateProductRequest UpdateProductRequest){

        this.productService.update(UpdateProductRequest);
        return new ResponseEntity<>(new ApiResponse(true,"Product successfully updated"), HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public List<GetAllProductResponse> getAllProductResponses(){
        return this.productService.getAll();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> delete(@PathVariable int id){

        this.productService.delete(id);
        return new ResponseEntity<>(new ApiResponse(true,"Product successfully deleted"), HttpStatus.OK);
    }
}
