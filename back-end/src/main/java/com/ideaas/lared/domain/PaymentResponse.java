package com.ideaas.lared.domain;

import javax.persistence.*;

@Entity
@Table(name = "PAYMENTRESPONSE")
public class PaymentResponse {

    @Id
    @Column(name = "PR_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "COLL_ID")
    private String collectionId;

    @Column(name = "COLL_STATUS")
    private String collectionStatus;

    @Column(name = "EXT_REF")
    private String externalReference;

    @Column(name = "PAY_TYPE")
    private String paymentType;

    @Column(name = "MER_ORD_ID")
    private String merchantOrderId;

    @Column(name = "PREF_ID")
    private String preferenceId;

    @Column(name = "SITE_ID")
    private String siteId;

    @Column(name = "PROC_MODE")
    private String processingMode;

    @Column(name = "MER_ACC_ID")
    private String merchantAccountId;

    //Constructores
    public PaymentResponse() {}

    public PaymentResponse(String collectionId, String collectionStatus, String externalReference, String paymentType
            , String merchantOrderId, String preferenceId, String siteId, String processingMode, String merchantAccountId) {

        this.collectionId = collectionId;
        this.collectionStatus = collectionStatus;
        this.externalReference = externalReference;
        this.paymentType = paymentType;
        this.merchantOrderId = merchantOrderId;
        this.preferenceId = preferenceId;
        this.siteId = siteId;
        this.processingMode = processingMode;
        this.merchantAccountId = merchantAccountId;
    }

    //Métodos Get & Set
    public int getId() {
        return id;
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

    @Override
    public String toString() {
        return "PaymentResponse{" +
                "collectionId='" + collectionId + '\'' +
                ", collectionStatus='" + collectionStatus + '\'' +
                ", externalReference='" + externalReference + '\'' +
                ", paymentType='" + paymentType + '\'' +
                ", merchantOrderId='" + merchantOrderId + '\'' +
                ", preferenceId='" + preferenceId + '\'' +
                ", siteId='" + siteId + '\'' +
                ", processingMode='" + processingMode + '\'' +
                ", merchantAccountId='" + merchantAccountId + '\'' +
                '}';
    }

}
