package com.ideaas.lared.restController;

import com.ideaas.lared.domain.Detail;
import com.ideaas.lared.domain.Order;
import com.ideaas.lared.service.interfaces.MercadoPagoService;
import com.mercadopago.exceptions.MPException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class CartRestController {

    private MercadoPagoService mercadoPagoService;

    @Autowired
    public CartRestController(MercadoPagoService mercadoPagoService) {
        this.mercadoPagoService = mercadoPagoService;
    }

    @PostMapping(value = "api/cart/preference", consumes = "application/json")
    private String preparePay(@RequestBody List<Detail> details){
        try {
            Order order = new Order().withDetails(details);
            return mercadoPagoService.createPreference(order);
        } catch (MPException e) {
            e.printStackTrace();
            return "error/pago";
        }
    }
}
