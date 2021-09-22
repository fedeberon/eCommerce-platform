package com.ideaas.lared.dao;

import com.ideaas.lared.domain.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDao extends JpaRepository<Order, Long> {

    Order findByPreferenceId(String preferenceId);

}
