document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenuButton = document.querySelector(".hamburger_menu");
    const links = document.querySelector(".nav_menu .links");

    function toggleMenu() {
        links.classList.toggle("active");
    }

    hamburgerMenuButton.addEventListener("click", toggleMenu);

    window.addEventListener("resize", function() {
        if (window.innerWidth >= 768) {
            links.classList.remove("active");
        }
    });
});

const products = [
    {
        id: 1,
        name: "Back bag",
        price: 220,
        image: "./imgs/bag1.png",
        description: "Description for Back bag",
    },
    {
        id: 2,
        name: "Leather tote shoulder",
        price: 300,
        image: "./imgs/bag2.png",
        description: "Description for Back bag",
    },
    {
        id: 3,
        name: "Laptop bag",
        price: 230,
        image: "./imgs/bag3.png",
        description: "Description for Back bag",
    },
    {
        id: 4,
        name: "Travel brown bag",
        price: 400,
        image: "./imgs/bag4.png",
        description: "Description for Back bag",
    },
    {
        id: 5,
        name: "Top bag",
        price: 200,
        image: "./imgs/bag5.png",
        description: "Description for Back bag",
    },
   
];

const slider = document.querySelector('.slider');

products.forEach(product => {
    const slide = document.createElement("div");
    slide.classList.add("slide");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = "$" + product.price;

    const productDescription = document.createElement("p");
    productDescription.classList.add("description");
    productDescription.textContent = product.description;

    slide.appendChild(productImage);
    slide.appendChild(productName);
    slide.appendChild(productPrice);

    slider.appendChild(slide);})

function searchProducts() {

const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
displayProducts(filteredProducts);

}

function displayProducts(products) {
    slider.innerHTML = "";
    products.forEach(product => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        
        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        
        const productName = document.createElement("h3");
        productName.textContent = product.name;
        
        const productPrice = document.createElement("p");
        productPrice.textContent = "$" + product.price;
        
        const productDescription = document.createElement("p");
        productDescription.classList.add("description");
        productDescription.textContent = product.description;
        
        slide.appendChild(productImage);
        slide.appendChild(productName);
        slide.appendChild(productPrice);
        
        slider.appendChild(slide);
    });
}
