package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.model.Product;
import com.hypercompany.ecommerce.model.dto.requests.CreateProductRequest;
import com.hypercompany.ecommerce.model.dto.requests.UpdateBrandRequest;
import com.hypercompany.ecommerce.model.dto.requests.UpdateProductRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllBrandsResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetAllProductResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByIdProductResponse;

import java.util.List;

public interface ProductService {
    List<GetAllProductResponse> getAll();

    GetByIdProductResponse getById(int id);
    void add (CreateProductRequest createProductRequest);
    void update(UpdateProductRequest updateProductRequest);

    void delete(int id);

}