"use strict";

async function fetchData() { // hämta data från api
    let url = "https://jeja2306-dt207g-moment2-1.onrender.com/cv/workexperience";

    try {
        const response = await fetch(url);
        if (!response.ok) { // felhantering
            throw new Error("Could not find any results");
        }
        const data = await response.json();
        return data; // returnerar från api
    } catch (error) {
        console.error("Fault accured: ", error);
        throw error;
    }
};

async function displayData() {
    const resultDiv = document.getElementById("result");

    try {
        const data = await fetchData();
        data.forEach(item => { // loopar igenom varje objekt och skriver ut
            const workExperience = document.createElement("div");
            workExperience.classList.add("workexperience");
            workExperience.innerHTML = `
            <h2>${item.companyname}</h2>
            <h3>${item.jobtitle}</h3>
            <h4>${item.location}</h4>
            <p>${item.description}</p>
            `;
            resultDiv.appendChild(workExperience);
        });
    } catch (error) {
        console.error("Fault accured: ", error);
    }
};

displayData(); // hämtar och visar vid start av sida