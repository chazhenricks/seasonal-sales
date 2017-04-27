
var productRequest = new XMLHttpRequest();

productRequest.open("GET", "products.json");

productRequest.addEventListener("load",productRequestComplete);
productRequest.addEventListener("error", productRequestError);

function productRequestComplete(event){
    console.log("SUCCESS!");
    var productData = JSON.parse(event.target.responseText);
    console.log("productData", productData);
    showProduct(productData);
};

function showProduct(products){
    var productList = document.getElementById("product-list");
    var productsHTML = "";

    for(var i=0;i<products.products.length;i++){
        productsHTML+= `<tr>`;
        productsHTML += `<td>${products.products[i].name}</td>`;
        productsHTML += `<td>${products.products[i].price}</td>`;
        productsHTML += `</tr>`;

    }

    productList.innerHTML = productsHTML;
}

function productRequestError(event){
    console.log("ERROR");
}

productRequest.send();
