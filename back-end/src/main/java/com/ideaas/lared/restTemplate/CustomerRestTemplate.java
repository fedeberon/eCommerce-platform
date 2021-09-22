package com.ideaas.lared.restTemplate;

import com.ideaas.lared.domain.Customer;
import com.ideaas.lared.domain.Product;
import com.ideaas.lared.restTemplate.interfaces.MyFunction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Objects;

@Component
public class CustomerRestTemplate implements MyFunction<List<Customer>> {

    private final RestTemplate restTemplate;

    @Value("${ispcube-data.url}")
    private String url;

    @Value("${ispcube-data.key}")
    private String key;

    @Value("${ispcube-data.value}")
    private String value;

    @Autowired
    public CustomerRestTemplate(RestTemplateBuilder restTemplate) {
        this.restTemplate = restTemplate.build();
        this.restTemplate.getInterceptors().add((request, body, execution) -> {
            request.getHeaders().set(key, value);
            return execution.execute(request, body);
        });
    }

    @Override
    public List<Customer> apply() {
        LinkedHashMap mapResult = restTemplate.getForObject(url.concat("sudominio.com/customers?page=1&limit=10"),  LinkedHashMap.class);
        return convert(mapResult);
    }


    private List<Customer> convert(LinkedHashMap anObject) {
        List<Customer> customer = new ArrayList<>();
        if (Objects.isNull(anObject)) return customer;
        String code = (String) anObject.get("code");
        String description = (String) anObject.get("description");
        customer.add(new Customer().withNumber(code).withName(description));

        return customer;
    }
}
