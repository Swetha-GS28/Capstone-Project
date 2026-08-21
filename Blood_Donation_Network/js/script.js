const donors = [
    {
        name: "Arun",
        bloodGroup: "O+",
        location: "Trichy"
    },
    {
        name: "Priya",
        bloodGroup: "A+",
        location: "Chennai"
    },
    {
        name: "Kavin",
        bloodGroup: "O+",
        location: "Trichy"
    },
    {
        name: "Divya",
        bloodGroup: "B+",
        location: "Madurai"
    }
];

document.addEventListener("DOMContentLoaded", function () {

    const searchDonorBtn = document.getElementById("search-Donor-btn");
    const bloodGroup = document.getElementById("blood-group");
    const locationInput = document.getElementById("location");
    const resultsDiv = document.getElementById("donor-results");

    searchDonorBtn.addEventListener("click", function () {

        const selectedBloodGroup = bloodGroup.value;
        const enteredLocation = locationInput.value.trim();

        resultsDiv.innerHTML = "";

        if (selectedBloodGroup === "" || enteredLocation === "") {
            alert("Please select a blood group and enter a location.");
            return;
        }

        const matchingDonors = donors.filter(function (donor) {
            return donor.bloodGroup === selectedBloodGroup &&
                   donor.location.toLowerCase() === enteredLocation.toLowerCase();
        });

        if (matchingDonors.length > 0) {

            matchingDonors.forEach(function (donor) {

                const donorCard = document.createElement("div");

                donorCard.innerHTML = `
                    <h3>${donor.name}</h3>
                    <p>Blood Group: ${donor.bloodGroup}</p>
                    <p>Location: ${donor.location}</p>
                `;

                resultsDiv.appendChild(donorCard);
            });

        } else {

            resultsDiv.innerHTML = "<p>No matching donor found.</p>";

        }
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const emergencyBtn = document.getElementById("emergency-request-btn");

    const patientName = document.getElementById("patient-name");
    const requiredBloodGroup = document.getElementById("required-blood-group");
    const units = document.getElementById("units");
    const hospital = document.getElementById("hospital");
    const requestLocation = document.getElementById("request-location");
    const emergencyResult = document.getElementById("emergency-result");

    emergencyBtn.addEventListener("click", function () {

        const name = patientName.value.trim();
        const bloodGroup = requiredBloodGroup.value;
        const unitCount = units.value;
        const hospitalName = hospital.value.trim();
        const location = requestLocation.value.trim();

        if (
            name === "" ||
            bloodGroup === "" ||
            unitCount === "" ||
            hospitalName === "" ||
            location === ""
        ) {
            alert("Please fill in all emergency request details.");
            return;
        }

        emergencyResult.innerHTML = `
            <h3>Emergency Request Submitted</h3>
            <p>Patient: ${name}</p>
            <p>Blood Group: ${bloodGroup}</p>
            <p>Units Required: ${unitCount}</p>
            <p>Hospital: ${hospitalName}</p>
            <p>Location: ${location}</p>
        `;
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const registerDonorBtn = document.getElementById("register-donor-btn");

    const nameInput = document.getElementById("name");
    const donorBloodGroup = document.getElementById("donor-blood-group");
    const donorLocation = document.getElementById("donor-location");
    const phoneInput = document.getElementById("phone");
    const registrationResult = document.getElementById("registration-result");

    registerDonorBtn.addEventListener("click", function () {

        const name = nameInput.value.trim();
        const bloodGroup = donorBloodGroup.value;
        const location = donorLocation.value.trim();
        const phone = phoneInput.value.trim();

        if (
            name === "" ||
            bloodGroup === "" ||
            location === "" ||
            phone === ""
        ) {
            alert("Please fill in all donor registration details.");
            return;
        }

        registrationResult.innerHTML = `
            <h3>Donor Registration Successful!</h3>
            <p>Name: ${name}</p>
            <p>Blood Group: ${bloodGroup}</p>
            <p>Location: ${location}</p>
            <p>Phone: ${phone}</p>
        `;
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.getElementById("login-btn");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    loginBtn.addEventListener("click", function () {

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === "" || password === "") {
            alert("Please enter your email and password.");
            return;
        }

        alert("Login successful!");
    });
});