"use strict";

async function getData() { // hämta data från api
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
        const data = await getData();
        data.forEach(item => { // loopar igenom varje objekt och skriver ut
            const workExperience = document.createElement("div");
            workExperience.classList.add("workexperience");
            
            workExperience.innerHTML = `
            <h2>Arbetsplats: ${item.companyname}</h2>
            <h3>Jobtitel: ${item.jobtitle}</h3>
            <h4>Ort: ${item.location}</h4>
            <p><span class="desc">"</span> ${item.description} <span class="desc">"</span></p>`;

            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("material-symbols-outlined");
            deleteBtn.innerHTML = "delete";
            workExperience.appendChild(deleteBtn);
            resultDiv.appendChild(workExperience);

            deleteBtn.addEventListener('click', () => {
                resultDiv.removeChild(workExperience);
                deleteData(item.id);
            });
        });
    } catch (error) {
        console.error("Fault accured: ", error);
    }
};

function deleteData(id) {
    const url = "https://jeja2306-dt207g-moment2-1.onrender.com/cv/workexperience/" + id;

    fetch(url, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to delete data");
            }
            return response.json();
        })
        .then(data => {
            console.log("Data deleted", data);
        })
        .catch(error => {
            console.error("Error when deleting data", error);
        });
};

displayData(); // hämtar och visar vid start av sida