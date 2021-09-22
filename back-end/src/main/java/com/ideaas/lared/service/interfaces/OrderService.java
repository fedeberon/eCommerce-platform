package com.ideaas.lared.service.interfaces;

import com.ideaas.lared.domain.Order;

public interface OrderService {
    Order get(Long id);

    Order getByPreferenceId(String preferenceId);

    Order save(Order order);
}
