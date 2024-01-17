package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.core.utilities.mappers.ModelMapperService;
import com.hypercompany.ecommerce.model.Product;
import com.hypercompany.ecommerce.model.dto.requests.CreateProductRequest;
import com.hypercompany.ecommerce.model.dto.requests.UpdateProductRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllProductResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByIdProductResponse;
import com.hypercompany.ecommerce.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductManager implements ProductService{
    private final ProductRepository productRepository;
    private final ModelMapperService modelMapperService;

    @Override
    public List<GetAllProductResponse> getAll() {
        List<Product> products = this.productRepository.findAll();
        return products.stream()
                .map(product -> this.modelMapperService.forResponse()
                        .map(product, GetAllProductResponse.class)).toList();

    }

    @Override
    public GetByIdProductResponse getById(int id) {
        Product product = this.productRepository.findById(id).orElse(null);
        return this.modelMapperService.forResponse().map(product, GetByIdProductResponse.class);
    }

    @Override
    public void add(CreateProductRequest createProductRequest) {
        Product product = this.modelMapperService.forRequest().map(createProductRequest, Product.class);
        this.productRepository.save(product);
    }

    @Override
    public void update(UpdateProductRequest updateProductRequest) {
        Product product = this.modelMapperService.forRequest().map(updateProductRequest, Product.class);
        this.productRepository.save(product);
    }

    @Override
    public void delete(int id) {
        this.productRepository.deleteById(id);
    }
}
