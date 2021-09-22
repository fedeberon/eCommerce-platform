package com.ideaas.lared.restTemplate;

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
public class ProductRestTemplate implements MyFunction<List<Product>> {


    private final RestTemplate restTemplate;

    @Value("${rpsistemas-data.url}")
    private String url;

    @Value("${rpsistemas-data.key}")
    private String key;

    @Value("${rpsistemas-data.value}")
    private String value;

    @Autowired
    public ProductRestTemplate(RestTemplateBuilder restTemplate) {
        this.restTemplate = restTemplate.build();
        this.restTemplate.getInterceptors().add((request, body, execution) -> {
            request.getHeaders().set(key, value);
            return execution.execute(request, body);
        });
    }

    @Override
    public List<Product> apply() {
        LinkedHashMap mapResult = restTemplate.getForObject(url.concat("product/list"),  LinkedHashMap.class);
        return convert(mapResult);
    }

    private List<Product> convert(LinkedHashMap anObject) {
        List<Product> products = new ArrayList<>();
        if (Objects.isNull(anObject)) return products;
        String code = (String) anObject.get("code");
        String description = (String) anObject.get("description");
        products.add(new Product().withCode(code).withDescription(description));

        return products;
    }
}
