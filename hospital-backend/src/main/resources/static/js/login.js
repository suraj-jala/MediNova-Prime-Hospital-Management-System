document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value.trim();

    const button = document.querySelector("button");

    if(username === ""){

        alert("Please enter your username.");
        return;

    }

    if(password === ""){

        alert("Please enter your password.");
        return;

    }

    button.innerHTML = "Signing In...";

    button.disabled = true;

    setTimeout(function(){

        // Reception Login
        if(username === "reception" && password === "1234"){

            window.location.href="dashboard.html";

        }

        // Doctor Login
        else if(username === "doctor" && password === "1234"){

            window.location.href = "doctor-dashboard.html";

        }

        // Billing Login
        else if(username === "billing" && password === "1234"){

            window.location.href = "billing.html";

        }

        // Admin Login
        else if(username === "admin" && password === "1234"){

            window.location.href = "admin.html";

        }

        else{

            alert("Invalid Username or Password");

            button.innerHTML = "Sign In →";

            button.disabled = false;

        }

    },1000);

});