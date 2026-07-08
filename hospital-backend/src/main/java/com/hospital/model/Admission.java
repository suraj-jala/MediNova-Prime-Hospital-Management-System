package com.hospital.model;

public class Admission {

    private int admissionId;
    private int patientId;
    private int doctorId;
    private String ward;
    private int bedNumber;
    private String status;
    private String admissionDate;

    public Admission() {
    }

    public Admission(int admissionId, int patientId, int doctorId,
                     String ward, int bedNumber,
                     String status, String admissionDate) {

        this.admissionId = admissionId;
        this.patientId = patientId;
        this.doctorId = doctorId;
        this.ward = ward;
        this.bedNumber = bedNumber;
        this.status = status;
        this.admissionDate = admissionDate;
    }

    public int getAdmissionId() {
        return admissionId;
    }

    public void setAdmissionId(int admissionId) {
        this.admissionId = admissionId;
    }

    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public String getWard() {
        return ward;
    }

    public void setWard(String ward) {
        this.ward = ward;
    }

    public int getBedNumber() {
        return bedNumber;
    }

    public void setBedNumber(int bedNumber) {
        this.bedNumber = bedNumber;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAdmissionDate() {
        return admissionDate;
    }

    public void setAdmissionDate(String admissionDate) {
        this.admissionDate = admissionDate;
    }
}