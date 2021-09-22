package com.ideaas.lared.domain;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "ORDERS")
public class Order {

    @Id
    @Column(name = "ORD_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(mappedBy = "order", cascade = CascadeType.MERGE)
    private List<Detail> details;

    @Column(name = "ORD_PREFERENCE")
    private String preferenceId;

    public Order withDetails(List<Detail> details){
        this.details = details;
        return this;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Detail> getDetails() {
        return details;
    }

    public void setDetails(List<Detail> details) {
        this.details = details;
    }

    public String getPreferenceId() {
        return preferenceId;
    }

    public void setPreferenceId(String preferenceId) {
        this.preferenceId = preferenceId;
    }

    public Order withPreferenceId(String preferenceId) {
        this.preferenceId = preferenceId;
        return this;
    }

}
