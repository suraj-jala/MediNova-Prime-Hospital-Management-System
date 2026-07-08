document.getElementById("patientForm").addEventListener("submit", function(event){

    event.preventDefault();

    const patient = {

        patientId: document.getElementById("patientId").value,

        patientName: document.getElementById("patientName").value,

        age: document.getElementById("age").value,

        gender: document.getElementById("gender").value,

        problem: document.getElementById("problem").value

    };

    if(patient.patientId === "" ||
       patient.patientName === "" ||
       patient.age === "" ||
       patient.problem === "")
    {

        alert("Please fill all required fields.");

        return;

    }

    localStorage.setItem("patient", JSON.stringify(patient));

    alert("Patient Registered Successfully!");

    window.location.href = "consultation.html";

});