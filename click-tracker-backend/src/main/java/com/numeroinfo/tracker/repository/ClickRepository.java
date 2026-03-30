package com.numeroinfo.tracker.repository;

import com.numeroinfo.tracker.model.Click;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.time.LocalDateTime;
import java.util.List;

public interface ClickRepository extends JpaRepository<Click, Long> {

    boolean existsByClickId(String clickId);

    @Query("SELECT HOUR(c.timestamp) as hour, COUNT(c) as count FROM Click c " +
           "WHERE c.timestamp >= :start AND c.timestamp < :end " +
           "GROUP BY HOUR(c.timestamp)")
    List<Object[]> countByHour(@Param("start") LocalDateTime start, @Param("end") LocalDateTime end);
}
