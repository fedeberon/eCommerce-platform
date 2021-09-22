package com.ideaas.lared.service;

import com.ideaas.lared.dao.MPReceiptDao;
import com.ideaas.lared.domain.MPReceipt;
import com.ideaas.lared.service.interfaces.MPReceiptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MPReceiptServiceImpl implements MPReceiptService {

    private MPReceiptDao dao;

    @Autowired
    public MPReceiptServiceImpl(MPReceiptDao dao) {
        this.dao = dao;
    }

    @Override
    public MPReceipt save(MPReceipt mpReceipt) {
        return dao.save(mpReceipt);
    }

}
