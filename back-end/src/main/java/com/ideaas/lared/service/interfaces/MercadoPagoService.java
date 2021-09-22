package com.ideaas.lared.service.interfaces;

import com.ideaas.lared.domain.Order;
import com.mercadopago.exceptions.MPException;

public interface MercadoPagoService {
    String createPreference(Order order) throws MPException;
}
