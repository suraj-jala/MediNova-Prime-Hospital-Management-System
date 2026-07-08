// Load patient details from localStorage
window.onload = function () {

    const patient = JSON.parse(localStorage.getItem("patient"));

    if (patient) {

        const patientId = document.getElementById("patientId");
        const patientName = document.getElementById("patientName");
        const age = document.getElementById("age");
        const gender = document.getElementById("gender");
        const problem = document.getElementById("problem");

        if (patientId) patientId.value = patient.patientId;
        if (patientName) patientName.value = patient.patientName;
        if (age) age.value = patient.age;
        if (gender) gender.value = patient.gender;
        if (problem) problem.value = patient.problem;
    }

};

// Complete Consultation
function completeConsultation() {

    const diagnosis = document.getElementById("diagnosis")?.value || "";
    const medicine = document.getElementById("medicine")?.value || "";

    if (diagnosis.trim() === "") {
        alert("Please enter diagnosis.");
        return;
    }

    if (medicine.trim() === "") {
        alert("Please enter prescription.");
        return;
    }

    const consultation = {
        diagnosis: diagnosis,
        medicine: medicine
    };

    localStorage.setItem(
        "consultation",
        JSON.stringify(consultation)
    );

    alert("Consultation Completed Successfully!");

    window.location.href = "billing.html";
}