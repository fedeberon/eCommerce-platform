package com.ideaas.lared.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "mercadopago")
public class MercadoPagoProperties {

    private String accessToken;
    private String urlFailure;
    private String urlSuccess;
    private String urlPending;


    public String getUrlFailure() {
        return urlFailure;
    }

    public void setUrlFailure(String urlFailure) {
        this.urlFailure = urlFailure;
    }

    public String getUrlSuccess() {
        return urlSuccess;
    }

    public void setUrlSuccess(String urlSuccess) {
        this.urlSuccess = urlSuccess;
    }

    public String getUrlPending() {
        return urlPending;
    }

    public void setUrlPending(String urlPending) {
        this.urlPending = urlPending;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
