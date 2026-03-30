package com.numeroinfo.tracker.controller;

import com.numeroinfo.tracker.service.ClickService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ClickController {

    private final ClickService service;

    @PostMapping("/track-click")
    public ResponseEntity<Map<String, String>> trackClick(
            @RequestBody Map<String, String> body,
            HttpServletRequest request) {

        String clickId = body.get("clickId");
        String page = body.get("page");
        String userAgent = body.get("userAgent");
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isBlank()) ip = request.getRemoteAddr();

        if (clickId == null || clickId.isBlank())
            return ResponseEntity.badRequest().body(Map.of("error", "clickId is required"));

        boolean saved = service.track(clickId, page, userAgent, ip);
        return ResponseEntity.ok(Map.of("status", saved ? "tracked" : "duplicate"));
    }

    @GetMapping("/clicks/hourly")
    public ResponseEntity<List<Map<String, Object>>> hourlyStats() {
        return ResponseEntity.ok(service.getHourlyStats());
    }
}
