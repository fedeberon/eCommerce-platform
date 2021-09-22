package com.ideaas.lared.domain;

import javax.persistence.*;

@Entity
@Table(name = "MP_RECEIPTS")
public class MPReceipt {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "MPR_ID")
    private Long id;

    @Column(name = "MPR_COLLECTION_ID")
    private String collectionId;

    @Column(name = "MPR_COLLECTION_STATUS")
    private String collectionStatus;

    @Column(name = "MPR_EXTERNAL_REFERENCE")
    private String externalReference;

    @Column(name = "MPR_PAYMENT_TYPE")
    private String paymentType;

    @Column(name = "MPR_MERCHANT_ORDER_ID")
    private String merchantOrderId;

    @Column(name = "MPR_PREFERENCE_ID")
    private String preferenceId;

    @Column(name = "MPR_SITE_ID")
    private String siteId;

    @Column(name = "MPR_PROCESSING_MODE")
    private String processingMode;

    @Column(name = "MPR_MERCHANT_ACCOUNT_ID")
    private String merchantAccountId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCollectionId() {
        return collectionId;
    }

    public void setCollectionId(String collectionId) {
        this.collectionId = collectionId;
    }

    public String getCollectionStatus() {
        return collectionStatus;
    }

    public void setCollectionStatus(String collectionStatus) {
        this.collectionStatus = collectionStatus;
    }

    public String getExternalReference() {
        return externalReference;
    }

    public void setExternalReference(String externalReference) {
        this.externalReference = externalReference;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public String getMerchantOrderId() {
        return merchantOrderId;
    }

    public void setMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
    }

    public String getPreferenceId() {
        return preferenceId;
    }

    public void setPreferenceId(String preferenceId) {
        this.preferenceId = preferenceId;
    }

    public String getSiteId() {
        return siteId;
    }

    public void setSiteId(String siteId) {
        this.siteId = siteId;
    }

    public String getProcessingMode() {
        return processingMode;
    }

    public void setProcessingMode(String processingMode) {
        this.processingMode = processingMode;
    }

    public String getMerchantAccountId() {
        return merchantAccountId;
    }

    public void setMerchantAccountId(String merchantAccountId) {
        this.merchantAccountId = merchantAccountId;
    }


    public MPReceipt withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }

    public MPReceipt withCollectionStatus(String collectionStatus) {
        this.collectionStatus = collectionStatus;
        return this;
    }

    public MPReceipt withExternalReference(String externalReference) {
        this.externalReference = externalReference;
        return this;
    }

    public MPReceipt withPaymentType(String paymentType) {
        this.paymentType = paymentType;
        return this;
    }

    public MPReceipt withMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
        return this;
    }

    public MPReceipt withPreferenceId(String preferenceId) {
        this.preferenceId = preferenceId;
        return this;
    }

    public MPReceipt withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }

    public MPReceipt withProcessingMode(String processingMode) {
        this.processingMode = processingMode;
        return this;
    }

    public MPReceipt withMerchantAccountId(String merchantAccountId) {
        this.merchantAccountId = merchantAccountId;
        return this;
    }
}
