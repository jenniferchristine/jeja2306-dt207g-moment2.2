"use strict";

const addBtn = document.getElementById("addbtn");
addBtn.addEventListener('click', () => {
    addData();
});

async function addData() {
    const companyname = document.getElementById('companyname').value; // hämta in värdet från inputs
    const jobtitle = document.getElementById('jobtitle').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    if (!companyname || !jobtitle || !location || !description) {
        alert("Fyll i alla fält för att lägga till");
        return; // avbryter om fälten är tomt
    }

    const workexperience = { // skapar objekt för insamlad data
        companyname: companyname, // värde för varje nyckel
        jobtitle: jobtitle,
        location: location,
        description: description
    };

    try {
        const response = await fetch('https://jeja2306-dt207g-moment2-1.onrender.com/cv/workexperience', {
            method: 'POST', // skickar postförfrågan till url
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workexperience)
        });

        if (!response.ok) {
            throw new Error('Failed to add data to CV');
        }

        // töm fälten efter tillägg
        document.getElementById('companyname').value = "";
        document.getElementById('jobtitle').value = "";
        document.getElementById('location').value = "";
        document.getElementById('description').value = "";

        const data = await response.json();
        console.log('Data added to CV:', data);

        window.location.href = "index.html"; // skicka användaren dit det lagts till
        alert("Din arbetserfarenhet har lagts till! Du skickas nu till resultatsidan");

    } catch (error) {
        console.error('Error adding data to CV:', error);
    }
}