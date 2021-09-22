package com.ideaas.lared.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CUSTOMER")
public class Customer {

    @Id
    @Column(name = "SOC_ID")
    private Long id;

    @Column(name = "SOC_NUMBER")
    private String number;

    @Column(name = "SOC_NAME")
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Customer withNumber(String number){
        this.number = number;
        return this;
    }

    public Customer withName(String name){
        this.name = name;
        return this;
    }
}
