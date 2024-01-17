package com.hypercompany.ecommerce.service;


import com.hypercompany.ecommerce.model.dto.requests.CreateBrandRequest;
import com.hypercompany.ecommerce.model.dto.requests.CreateCategoryRequest;
import com.hypercompany.ecommerce.model.dto.requests.UpdateBrandRequest;
import com.hypercompany.ecommerce.model.dto.requests.UpdateCategoryRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllCategoryResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByIdCategoryResponse;

import java.util.List;

public interface CategoryService {

    List<GetAllCategoryResponse> getAll();
    GetByIdCategoryResponse getById(int id);
    void add(CreateCategoryRequest createCategoryRequest);
    void update(UpdateCategoryRequest updateCategoryRequest);
    void delete(int id);
}
