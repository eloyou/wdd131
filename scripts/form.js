const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const selectProduct = document.querySelector("#product-name");

selectProduct.addEventListener("click", () => {

    selectProduct.innerHTML = "";

    const defaultoption = document.createElement("option");
    defaultoption.textContent = "Select a Product";
    defaultoption.value = "";
    defaultoption.disabled = true;
    defaultoption.selected = true;
    selectProduct.appendChild(defaultoption);

    products.forEach((product) => {
        
        const option = document.createElement("option");

        
        option.textContent = `${product.name.toUpperCase()}`;
        option.setAttribute("value", `${product.id}`)
    
        selectProduct.appendChild(option);
        
    })
})


const submitForm = document.querySelector("form");

submitForm.addEventListener("submit", () => {



    if (!localStorage.getItem('review')) {
        localStorage.setItem('review', '0');
    }

    let review = parseInt(localStorage.getItem('review'));

    review += 1;

    localStorage.setItem('review', review.toString());
    
})

