package com.hospital.service;

import java.util.ArrayList;
import com.hospital.model.Patient;
import com.hospital.model.Staff;
import com.hospital.model.Admission;

public class HospitalService {

    private ArrayList<Patient> patients = new ArrayList<>();
    private ArrayList<Staff> staffList = new ArrayList<>();
    private ArrayList<Admission> admissions = new ArrayList<>();

    public void addPatient(Patient patient) {
        patients.add(patient);
    }

    public ArrayList<Patient> getAllPatients() {
        return patients;
    }

    public void addStaff(Staff staff) {
        staffList.add(staff);
    }

    public ArrayList<Staff> getAllStaff() {
        return staffList;
    }

    public void admitPatient(Admission admission) {
        admissions.add(admission);
    }

    public ArrayList<Admission> getAllAdmissions() {
        return admissions;
    }
}