const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const date = new Date();

year.textContent = date.getFullYear();
lastModified.textContent = document.lastModified