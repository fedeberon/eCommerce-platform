package com.ideaas.lared.web;

import com.ideaas.lared.domain.Order;
import com.ideaas.lared.domain.PaymentResponse;
import com.ideaas.lared.service.interfaces.MercadoPagoService;
import com.mercadopago.exceptions.MPException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("cart")
public class CartController {

    private MercadoPagoService mercadoPagoService;

    @Autowired
    public CartController(MercadoPagoService mercadoPagoService) {
        this.mercadoPagoService = mercadoPagoService;
    }

    @RequestMapping("payment")
    private String preparePay(@ModelAttribute Order order) {
        try {
            return mercadoPagoService.createPreference(order);
        } catch (MPException e) {
            e.printStackTrace();
            return "error/pago";
        }
    }

    @RequestMapping("success")
    public String success(@RequestParam("collection_id") String collectionId,
                          @RequestParam("collection_status") String collectionStatus,
                          @RequestParam("external_reference") String externalReference,
                          @RequestParam("payment_type") String paymentType,
                          @RequestParam("merchant_order_id") String merchantOrderId,
                          @RequestParam("preference_id") String preferenceId,
                          @RequestParam("site_id") String siteId,
                          @RequestParam("processing_mode") String processingMode,
                          @RequestParam("merchant_account_id") String merchantAccountId) {

        PaymentResponse paymentResponse = new PaymentResponse(collectionId, collectionStatus
                , externalReference, paymentType, merchantOrderId, preferenceId, siteId
                , processingMode, merchantAccountId);

        return "order-detail";
    }

    @RequestMapping("pending")
    public String pending(@RequestParam("collection_id") String collectionId,
                          @RequestParam("collection_status") String collectionStatus,
                          @RequestParam("external_reference") String externalReference,
                          @RequestParam("payment_type") String paymentType,
                          @RequestParam("merchant_order_id") String merchantOrderId,
                          @RequestParam("preference_id") String preferenceId,
                          @RequestParam("site_id") String siteId,
                          @RequestParam("processing_mode") String processingMode,
                          @RequestParam("merchant_account_id") String merchantAccountId) {

        PaymentResponse paymentResponse = new PaymentResponse(collectionId, collectionStatus
                , externalReference, paymentType, merchantOrderId, preferenceId, siteId
                , processingMode, merchantAccountId);

        return "order-detail";
    }

    @RequestMapping("failure")
    public String failure(@RequestParam("collection_id") String collectionId,
                          @RequestParam("collection_status") String collectionStatus,
                          @RequestParam("external_reference") String externalReference,
                          @RequestParam("payment_type") String paymentType,
                          @RequestParam("merchant_order_id") String merchantOrderId,
                          @RequestParam("preference_id") String preferenceId,
                          @RequestParam("site_id") String siteId,
                          @RequestParam("processing_mode") String processingMode,
                          @RequestParam("merchant_account_id") String merchantAccountId) {

        PaymentResponse paymentResponse = new PaymentResponse(collectionId, collectionStatus
                , externalReference, paymentType, merchantOrderId, preferenceId, siteId
                , processingMode, merchantAccountId);

        return "order-detail";
    }

}
