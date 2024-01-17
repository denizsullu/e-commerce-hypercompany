package com.hypercompany.ecommerce.service;


import com.hypercompany.ecommerce.model.dto.requests.CreateBrandRequest;
import com.hypercompany.ecommerce.model.dto.requests.UpdateBrandRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllBrandsResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByIdBrandResponse;

import java.util.List;

public interface BrandService {
    List<GetAllBrandsResponse> getAll();
    GetByIdBrandResponse getById(int id);
    void add(CreateBrandRequest updateBrandRequest);
    void update(UpdateBrandRequest updateBrandRequest);
    void delete(int id);

}
