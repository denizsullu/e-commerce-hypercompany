package com.hypercompany.ecommerce.service;

import com.hypercompany.ecommerce.core.utilities.mappers.ModelMapperService;
import com.hypercompany.ecommerce.model.Category;
import com.hypercompany.ecommerce.model.dto.requests.CreateCategoryRequest;
import com.hypercompany.ecommerce.model.dto.requests.UpdateCategoryRequest;
import com.hypercompany.ecommerce.model.dto.responses.GetAllCategoryResponse;
import com.hypercompany.ecommerce.model.dto.responses.GetByIdCategoryResponse;
import com.hypercompany.ecommerce.repository.CategoryRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoryManager implements CategoryService{

    private CategoryRepository categoryRepository;
    private ModelMapperService modelMapperService;
    @Override
    public List<GetAllCategoryResponse> getAll() {
        List<Category> categories = categoryRepository.findAll();
        return categories.stream().map(category -> this.modelMapperService
                .forResponse().map(category, GetAllCategoryResponse.class)).toList();
    }

    @Override
    public GetByIdCategoryResponse getById(int id) {
        Optional<Category> category = this.categoryRepository.findById(id);
        return this.modelMapperService.forResponse().map(category, GetByIdCategoryResponse.class);
    }

    @Override
    public void add(CreateCategoryRequest createCategoryRequest) {
        Category category = this.modelMapperService.forRequest().map(createCategoryRequest, Category.class);
        this.categoryRepository.save(category);

    }

    @Override
    public void update(UpdateCategoryRequest updateCategoryRequest) {
        Category category = this.modelMapperService.forRequest().map(updateCategoryRequest, Category.class);
        this.categoryRepository.save(category);
    }

    @Override
    public void delete(int id) {
        this.categoryRepository.deleteById(id);
    }
}
