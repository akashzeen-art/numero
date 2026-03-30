package com.numeroinfo.tracker.service;

import com.numeroinfo.tracker.model.Click;
import com.numeroinfo.tracker.repository.ClickRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
public class ClickService {

    private final ClickRepository repo;

    public boolean track(String clickId, String page, String userAgent, String ipAddress) {
        if (repo.existsByClickId(clickId)) return false; // duplicate — ignore

        Click click = new Click();
        click.setClickId(clickId);
        click.setPage(page);
        click.setUserAgent(userAgent);
        click.setIpAddress(ipAddress);
        click.setTimestamp(LocalDateTime.now());
        repo.save(click);
        return true;
    }

    public List<Map<String, Object>> getHourlyStats() {
        LocalDateTime start = LocalDate.now().atStartOfDay();
        LocalDateTime end = start.plusDays(1);

        List<Object[]> rows = repo.countByHour(start, end);

        // Build a map of hour -> count from DB results
        Map<Integer, Long> hourMap = new HashMap<>();
        for (Object[] row : rows) {
            int hour = ((Number) row[0]).intValue();
            long count = ((Number) row[1]).longValue();
            hourMap.put(hour, count);
        }

        // Fill all 24 slots, even if count = 0
        List<Map<String, Object>> result = new ArrayList<>();
        for (int h = 0; h < 24; h++) {
            Map<String, Object> slot = new LinkedHashMap<>();
            slot.put("hourRange", h + "-" + (h + 1));
            slot.put("count", hourMap.getOrDefault(h, 0L));
            result.add(slot);
        }
        return result;
    }
}
