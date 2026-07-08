window.onload = function(){

    const patient = JSON.parse(localStorage.getItem("patient"));
    const consultation = JSON.parse(localStorage.getItem("consultation"));

    if(patient){

        document.getElementById("patientId").value = patient.patientId;
        document.getElementById("patientName").value = patient.patientName;

    }

    if(consultation){

        document.getElementById("diagnosis").value = consultation.diagnosis;

    }

};

function printBill(){

    window.print();

}

function completePayment(){

    alert("Payment Successful!");

    localStorage.removeItem("patient");
    localStorage.removeItem("consultation");

    window.location.href="login.html";

}