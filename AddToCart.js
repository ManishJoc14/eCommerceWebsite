let addToCartBtn = document.getElementById("addToCart");
if (localStorage.getItem('myCart') == null || localStorage.getItem('myCart').length == 0) {
    insertToCart = [];
} else {
    insertToCart = JSON.parse(localStorage.getItem('myCart'))
}
    addToCartBtn.addEventListener("click",function(){
            let dataToAdd = {
                product_image: document.getElementById("MainImg").src,
                product_title: document.getElementById("main_product_title").innerText,
                product_price: document.getElementById("main_product_price").innerText,
                product_quantity : document.getElementById("main_product_title").parentElement.children[4].value
            }
            insertToCart.push(JSON.stringify(dataToAdd));
            localStorage.setItem('myCart', JSON.stringify(insertToCart));
            alert("Item added to the cart");
        });