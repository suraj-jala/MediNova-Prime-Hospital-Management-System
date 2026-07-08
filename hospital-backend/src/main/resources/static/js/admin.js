// ================================
// MediNova Prime Admin Dashboard
// ================================

// Welcome message
window.onload = function () {

    console.log("Admin Dashboard Loaded Successfully");

};

// Quick Action Buttons

const buttons = document.querySelectorAll(".actions button");

buttons.forEach(function(button){

    button.addEventListener("click",function(){

        const action = button.innerText;

        switch(action){

            case "Add Doctor":
                alert("Doctor Registration Module Coming Soon");
                break;

            case "Add Receptionist":
                alert("Receptionist Registration Module Coming Soon");
                break;

            case "View Patients":
                window.location.href="reception.html";
                break;

            case "Hospital Reports":
                alert("Reports Module Coming Soon");
                break;

            default:
                alert("Feature Under Development");

        }

    });

});