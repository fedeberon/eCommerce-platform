package com.ideaas.lared.service;

import com.ideaas.lared.dao.ProductDao;
import com.ideaas.lared.domain.Product;
import com.ideaas.lared.service.interfaces.ProducService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProducServiceImpl implements ProducService {

    private ProductDao dao;

    @Autowired
    public ProducServiceImpl(ProductDao dao) {
        this.dao = dao;
    }

    @Override
    public List<Product> save(List<Product> products){
        return dao.saveAll(products);
    }
}
