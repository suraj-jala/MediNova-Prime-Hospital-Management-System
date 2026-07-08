package com.hospital.controller;

import com.hospital.model.Patient;
import com.hospital.service.HospitalService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/patients")
public class PatientController {

    private HospitalService hospitalService = new HospitalService();

    @PostMapping
    public String addPatient(@RequestBody Patient patient) {
        hospitalService.addPatient(patient);
        return "Patient Added Successfully!";
    }

    @GetMapping
    public ArrayList<Patient> getPatients() {
        return hospitalService.getAllPatients();
    }
}