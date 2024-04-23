"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const logo = document.getElementById("logo");

    logo.addEventListener('click', function () {
        window.location.href = "index.html";
    });
});

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

            // målar ut
            workExperience.innerHTML = `
            <h2>Arbetsplats: ${item.companyname}</h2>
            <h3>Jobbtitel: ${item.jobtitle}</h3>
            <h4>Ort: ${item.location}</h4>
            <p><span class="desc">"</span> ${item.description} <span class="desc">"</span></p>`;

            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("material-symbols-outlined");
            deleteBtn.innerHTML = "delete";

            workExperience.appendChild(deleteBtn);
            resultDiv.appendChild(workExperience);

            deleteBtn.addEventListener('click', async (e) => {
                try {
                    const confirmation = confirm("OBS: Är du säker på att du vill radera denna?"); // "är du säker"

                    if (confirmation) {
                        await deleteData(item.id); // skickar vidare id och inväntar för att ta bort specifikt
                        resultDiv.removeChild(workExperience); // tar bort resultat direkt från sidan
                    }
                } catch (error) {
                    console.error("Error when deleting data", error);
                }
            });
        });
    } catch (error) {
        console.error("Fault accured: ", error);
    }
};

async function deleteData(id) {
    const url = "https://jeja2306-dt207g-moment2-1.onrender.com/cv/workexperience/" + id; // lägger till angivet id

    const response = await fetch(url, {
        method: 'DELETE' // metod delete för att radera
    });
    if (!response.ok) {
        throw new Error("Failed to delete data");
    }
    const data = await response.json();
    console.log("Data deleted", data);
};

displayData(); // hämtar och visar vid start av sida