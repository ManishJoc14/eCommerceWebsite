
let cartTable = document.querySelector("#cartItems");
if (localStorage.getItem('myCart') == null || localStorage.getItem('myCart').length == 0 ) {
        cartTable.innerHTML = `<tr colspan=5>
        <td>No Items In Cart</td>
    </tr>`;
document.getElementsByClassName("cardTotals")[0].innerText="$0";
document.getElementsByClassName("cardTotals")[1].innerText="$0";
} else {
    items = JSON.parse(localStorage.getItem('myCart'));
    let tbody = "";
    for (item of items) {
        item = JSON.parse(item);
        tbody += `<tr>
                        <td><i class="far fa-times-circle delete"></i></td>
                        <td><img src="${item.product_image}"></td>
                        <td>${item.product_title}</td>
                        <td>${item.product_price}</td>
                        <td><input type="number" value="1"min="1"></td>
                        <td>${item.product_price}</td>
                    </tr>`;
    }
    cartTable.innerHTML = tbody;
}