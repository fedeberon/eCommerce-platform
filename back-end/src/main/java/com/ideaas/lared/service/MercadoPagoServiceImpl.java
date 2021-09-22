package com.ideaas.lared.service;

import com.ideaas.lared.configuration.MercadoPagoProperties;
import com.ideaas.lared.domain.Order;
import com.ideaas.lared.domain.Product;
import com.ideaas.lared.service.interfaces.MercadoPagoService;
import com.ideaas.lared.service.interfaces.OrderService;
import com.ideaas.lared.service.interfaces.ProducService;
import com.mercadopago.MercadoPago;
import com.mercadopago.exceptions.MPConfException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.Preference;
import com.mercadopago.resources.datastructures.preference.BackUrls;
import com.mercadopago.resources.datastructures.preference.Item;
import com.mercadopago.resources.datastructures.preference.Payer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class MercadoPagoServiceImpl implements MercadoPagoService {

    private MercadoPagoProperties mercadoPagoProperties;
    private OrderService orderService;
    private ProducService producService;

    @Autowired
    public MercadoPagoServiceImpl(MercadoPagoProperties mercadoPagoProperties, OrderService orderService, ProducService producService) throws MPConfException {
        this.orderService = orderService;
        this.producService = producService;
        MercadoPago.SDK.setAccessToken(mercadoPagoProperties.getAccessToken());
        this.mercadoPagoProperties = mercadoPagoProperties;
    }

    @Override
    public String createPreference(Order order) throws MPException {
        Preference preference = new Preference();
        Payer payer = new Payer();
        payer.setEmail("fedeberon@hotmail.com");

        preference.setBackUrls(
                new BackUrls()
                        .setFailure(mercadoPagoProperties.getUrlFailure())
                        .setPending(mercadoPagoProperties.getUrlPending())
                        .setSuccess(mercadoPagoProperties.getUrlSuccess())
        );

        List<Product> products = new ArrayList<>();
        order.getDetails().forEach(detail -> {
            detail.setOrder(order);
            Item item = new Item();
            item.setTitle(detail.getProduct().getName()).setQuantity(detail.getQuantity().intValue()).setUnitPrice(detail.getProduct().getPrice().floatValue());
            //.setPictureUrl(detail.getProduct().getImage());
            preference.appendItem(item);
            products.add(detail.getProduct());
        });
        //producService.save(products);
        preference.setPayer(payer);
        Preference result = preference.save();
        order.withPreferenceId(result.getId());
        orderService.save(order);

        return result.getSandboxInitPoint();
    }


}
