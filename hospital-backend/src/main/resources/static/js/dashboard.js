// ===============================
// MediNova Prime Dashboard
// ===============================

// Show Current Date

const today = new Date();

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

document.getElementById("currentDate").innerHTML =
today.toLocaleDateString("en-IN", options);

// Navigation

function goDashboard(){

    window.location.href = "dashboard.html";

}

function goReception(){

    window.location.href = "reception.html";

}

function goDoctor(){

    window.location.href = "doctor-dashboard.html";

}

function goBilling(){

    window.location.href = "billing.html";

}

function goAdmin(){

    window.location.href = "admin.html";

}

function logout(){

    if(confirm("Are you sure you want to logout?")){

        window.location.href="login.html";

    }

}