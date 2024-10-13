const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
})


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Manila Philippines",
      location: "Metro Manila Philippines",
      dedicated: "1984, September, 25–27 ",
      area: 26683,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg"
    },
    {
        templeName: "Cebu City Philippines",
        location: "Cebu City Philippines",
        dedicated: "2010, June, 13  ",
        area: 29556,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cebu-city-philippines/400x250/cebu-philippines-temple-lds-704575-wallpaper.jpg"
    }
  ];


function templeCards(temples) {
    temples.forEach(temple => {
        let card = document.createElement("figure");
        let img = document.createElement("img")
        let name = document.createElement("h1");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let figcaption = document.createElement("figcaption");

        name.textContent = temple.templeName;
        location.textContent = `Location : ${temple.location}`;
        dedication.textContent = `Dedicated : ${temple.dedicated}`;
        area.textContent = `Area : ${temple.area}`;
        img.setAttribute("src", temple.imageUrl)
        img.setAttribute("alt", `${temple.templeName} Temple`)
        img.setAttribute("loading", "lazy")

        

        card.appendChild(img);
        card.appendChild(figcaption);
        
        figcaption.appendChild(name);
        figcaption.appendChild(location);
        figcaption.appendChild(dedication);
        figcaption.appendChild(area);
        

        document.querySelector(".wrapper").appendChild(card);

    })


  }


const oldTemple = document.querySelector("#old");
const home = document.querySelector("#home");
const largeTemple = document.querySelector("#large");
const smallTemple = document.querySelector("#small");
const newTemple = document.querySelector("#new");

oldTemple.addEventListener("click", () => {
      
      document.querySelector("#title").textContent = "Old Temple";
      let filteredTemple = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
      document.querySelector(".wrapper").innerHTML = "";
      templeCards(filteredTemple);
})

home.addEventListener("click", () => {
      
    document.querySelector("#title").textContent = "Temples";
    document.querySelector(".wrapper").innerHTML = "";
    templeCards(temples);
    
   
})

newTemple.addEventListener("click", () => {
      
    document.querySelector("#title").textContent = "New Temples";
    let filteredTemple = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
    document.querySelector(".wrapper").innerHTML = "";
    templeCards(filteredTemple); 
})

largeTemple.addEventListener("click", () => {
      
    document.querySelector("#title").textContent = "Large Temples";
    let filteredTemple = temples.filter(temple => temple.area > 90000);
    document.querySelector(".wrapper").innerHTML = "";
    templeCards(filteredTemple); 
})

smallTemple.addEventListener("click", () => {
      
    document.querySelector("#title").textContent = "Small Temples";
    let filteredTemple = temples.filter(temple => temple.area < 10000);
    document.querySelector(".wrapper").innerHTML = "";
    templeCards(filteredTemple); 
})

templeCards(temples);

















