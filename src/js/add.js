"use strict";

const addBtn = document.getElementById("addbtn");
addBtn.addEventListener('click', () => {
    addData();
});

function addData() {
    const form = document.getElementById("addform");
    const newData = new FormData(form);
    const url = "https://jeja2306-dt207g-moment2-1.onrender.com/cv/workexperience"

    fetch(url, {
        method: 'POST',
        body: newData
    })
    
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to add data to database");
        }
        return response.json();
    })
    .then(data => {
        console.log("Data added", data);
    })
    .catch (error => {
        console.error("Error when adding data", error);
    });
}