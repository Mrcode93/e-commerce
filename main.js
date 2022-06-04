let bars = document.querySelector(".bars");
let bar = document.querySelectorAll(".bar");
let menu = document.querySelector("ul");
let menuList = document.querySelectorAll("ul li a");

bars.addEventListener("click", function() {
    bar.forEach(function(bar) {
        bar.classList.toggle("active");
    });
    menu.classList.toggle("active");
    menuList.forEach(function(list) {
        list.classList.toggle("active");
        list.PseudoElementContainer;
    });
});
// ================================================================
let quantity = document.querySelector(".quantity");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let price = document.querySelector("#price");
let addToCart = document.querySelector("#add");
let cartCounter = document.querySelector(".cart span");
counter = 0;

plus.addEventListener("click", function() {
    counter++;
    quantity.innerHTML = counter;
});
minus.addEventListener("click", function() {
    if (counter == 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You can't add minus quantity!",
        });
    } else {
        counter--;
        quantity.innerHTML = counter;
    }
});
addToCart.addEventListener("click", function() {
    if (counter === 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Sellect Something Please!",
        });
    } else {
        cartCounter.style.opacity = 1;
        cartCounter.innerHTML = counter;
    }
});
// ================================================================

let selected = document.querySelector(".selecters");
let selecters = document.querySelectorAll(".selecters img");

selected.addEventListener("click", function(e) {
    e.target.classList.toggle("active");
});

// ================================================================
let layer = document.querySelector(".image-layer");
let close = document.querySelector(".close");
let Selections = document.querySelector(".images .selected");

Selections.addEventListener("click", function() {
    layer.style.display = "flex";
});
close.addEventListener("click", function() {
    layer.style.display = "none";
});
// ================================================================
//create slider images

let slider = document.querySelector(".image-layer .selected");
let images = document.querySelector("#image-product");
let prev = document.querySelector(".right");
let next = document.querySelector(".left");
let counter2 = 1;
next.addEventListener("click", function() {
    if (counter2 === 1) {
        counter2 = 4;
        images.src = "images/image-product-" + counter2 + ".jpg";
    } else {
        counter2--;
        images.src = "images/image-product-" + counter2 + ".jpg";
    }
});
prev.addEventListener("click", function() {
    if (counter2 === 4) {
        counter2 = 1;
        images.src = "images/image-product-" + counter2 + ".jpg";
    } else {
        counter2++;
        images.src = "images/image-product-" + counter2 + ".jpg";
    }
});
let img = document.querySelectorAll(".image-layer .selecters img");

img.forEach(function(img) {
    img.addEventListener("click", function() {
        //delete (thumbnail) from src
        let src = img.src;
        src = src.replace("-thumbnail", "");
        console.log(src);
        images.src = src;

        //add active class to item and delete active class from other items
        img.classList.toggle("active");
    });
});

///===mobile buttons==============
let next1 = document.querySelector(".selected .arows .right");
let prev1 = document.querySelector(".selected .arows .left");
let images2 = document.querySelector("#mobile");
let count = 1;
next1.addEventListener("click", function() {
    console.log(images2.src);
    if (count === 1) {
        count = 4;
        images2.src = "images/image-product-" + count + ".jpg";
    } else {
        count--;
        images2.src = "images/image-product-" + count + ".jpg";
    }
});
prev1.addEventListener("click", function() {
    if (count === 4) {
        count = 1;
        images2.src = "images/image-product-" + count + ".jpg";
    } else {
        count++;
        images2.src = "images/image-product-" + count + ".jpg";
    }
});
// ================================================================

let cart = document.querySelector(".cart");

// ================================================================
let priceItem = document.querySelector(".description h2");
addToCart.addEventListener("click", () => {
    let num = priceItem.innerHTML;
    let numm = num.replace("$", "");
    //create a new main div class adds
    let adds = document.createElement("div");
    adds.classList.add("adds");
    cart.appendChild(adds);
    //creat title for adds
    let title = document.createElement("h2");
    title.setAttribute("id", "title");
    title.innerHTML = "Cart";
    //add title to add div
    adds.appendChild(title);
    cart.addEventListener("click", function() {
        adds.classList.toggle("active");

        if (counter == 0) {
            //add title to add div
            // let title = document.createElement("h2");
            // title.setAttribute("id", "title");
            // title.innerHTML = "Cart";
            //
            adds.appendChild(title);
            let product = document.createElement("div");
            product.classList.add("product");
            adds.appendChild(product);
            product.innerHTML = "The Cart is empty!";
        } else {
            //add product div to add div
            let product = document.createElement("div");
            product.classList.add("product");
            adds.appendChild(product);
            // create image div and apeend it in product div
            let imgProduct = document.createElement("div");
            imgProduct.classList.add("img");
            product.appendChild(imgProduct);
            let img = document.createElement("img");
            img.setAttribute("src", "images/image-product-" + counter + ".jpg");
            imgProduct.appendChild(img);
            //create div for product text
            let text = document.createElement("div");
            text.classList.add("text");
            let productText = document.createElement("p");
            productText.setAttribute("id", "fall");
            productText.innerHTML = "Fall Limited Edition.";
            text.appendChild(productText);
            // create p for price text
            priceText = document.createElement("p");
            priceText.classList.add("product-price");
            priceText.innerHTML = num + "x";
            text.appendChild(priceText);
            //create p for product-count
            let productCount = document.createElement("p");
            productCount.classList.add("product-count");
            productCount.innerHTML = counter;
            text.appendChild(productCount);
            // create p for total price
            let totalPrice = document.createElement("p");
            totalPrice.classList.add("all-price");
            totalPrice.innerHTML = "$" + numm * counter;
            text.appendChild(totalPrice);
            product.appendChild(text);
            // add delete button for product div
            let deleteButton = document.createElement("button");
            deleteButton.classList.add("svg");
            deleteButton.innerHTML = `<i class="fas fa-trash-can"></i>`;
            product.appendChild(deleteButton);
            //create button for checkout button
            let checkoutButton = document.createElement("button");
            checkoutButton.innerHTML = "Check Out";
            if ((counter = 1)) {
                adds.appendChild(checkoutButton);
            }

            ////////////////////////////////
        }
    });
});