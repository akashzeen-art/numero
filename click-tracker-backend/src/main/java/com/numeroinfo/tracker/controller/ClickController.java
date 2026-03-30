package com.numeroinfo.tracker.controller;

import com.numeroinfo.tracker.service.ClickService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ClickController {

    private final ClickService service;

    public ClickController(ClickService service) {
        this.service = service;
    }

    @PostMapping("/track-click")
    public ResponseEntity<?> trackClick(@RequestBody Map<String, String> body,
            HttpServletRequest request) {

        String clickId = body.get("clickId");
        String page = body.get("page");
        String userAgent = body.get("userAgent");

        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isBlank()) {
            ip = request.getRemoteAddr();
        }

        if (clickId == null || clickId.isBlank()) {
            Map<String, String> err = new java.util.HashMap<>();
            err.put("error", "clickId is required");
            return ResponseEntity.badRequest().body(err);
        }

        boolean isTracked = service.track(clickId, page, userAgent, ip);

        Map<String, String> response = new java.util.HashMap<>();
        response.put("status", isTracked ? "tracked" : "duplicate");

        return ResponseEntity.ok(response);
    }

    @GetMapping("/clicks/hourly")
    public ResponseEntity<List<Map<String, Object>>> hourlyStats() {
        return ResponseEntity.ok(service.getHourlyStats());
    }
}
