async function populate() {
    const requestURL = "https://raw.githubusercontent.com/JTris1/NavTag/main/assets/data.json";
    const request = new Request(requestURL);
    
    const response = await fetch(request);
    const data = await response.json();

    createProducts(data);
}

function createProducts(obj) {
    const products = document.querySelector(".products");

    const card = document.createElement("div");
    card.classList.add("card");

    for(let i in obj['Products']) {
        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        let name = document.createElement("h1");
        let price = document.createElement("p");
        price.classList.add("price");
        let desc = document.createElement("p");
        let button = document.createElement("button");

        name.innerHTML= obj['Products'][i].name;
        price.innerHTML= "$" + obj['Products'][i].price;
        desc.innerHTML= obj['Products'][i].description;
        img.src = obj['Products'][i].imgSrc;
        button.innerHTML = "Add To Cart";

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(desc);
        card.appendChild(button);

        products.appendChild(card);
    }
}

populate();


