package com.ideaas.lared.service;

import com.ideaas.lared.dao.OrderDao;
import com.ideaas.lared.domain.Order;
import com.ideaas.lared.service.interfaces.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    private OrderDao dao;

    @Autowired
    public OrderServiceImpl(OrderDao dao) {
        this.dao = dao;
    }

    @Override
    public Order get(Long id) {
        return dao.findById(id).get();
    }

    @Override
    public Order getByPreferenceId(String preferenceId) {
        return dao.findByPreferenceId(preferenceId);
    }

    @Override
    public Order save(Order order) {
        return dao.save(order);
    }

}
