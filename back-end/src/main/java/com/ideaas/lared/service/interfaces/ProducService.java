package com.ideaas.lared.service.interfaces;

import com.ideaas.lared.dao.ProductDao;
import com.ideaas.lared.domain.Product;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ProducService {

    List<Product> save(List<Product> products);
}
