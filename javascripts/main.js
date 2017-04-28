
var productRequest = new XMLHttpRequest();
var productDataObj = {};

productRequest.open("GET", "products.json");

productRequest.addEventListener("load",productRequestComplete);
productRequest.addEventListener("error", productRequestError);

function productRequestComplete(event){
    console.log("SUCCESS!");
    var productData = JSON.parse(event.target.responseText);
    console.log("productData", productData);
    showProduct(productData);
    productDataObj = productData;
};

function showProduct(products){
    var productList = document.getElementById("product-list");
    var productsHTML = "";

    for(var i=0;i<products.products.length;i++){
        console.log("season",season);
        if(season == 1){
            if(products.products[i].category_id == season){
                var discountPrice = (products.products[i].price * .9).toFixed(2);
                productsHTML+= `<tr class="success">`;
                productsHTML += `<td>${products.products[i].name}</td>`;
                productsHTML += `<td class="succes">${discountPrice}</td>`;
                productsHTML += `</tr>`;
            } else{
            productsHTML+= `<tr>`;
            productsHTML += `<td>${products.products[i].name}</td>`;
            productsHTML += `<td>${products.products[i].price}</td>`;
            productsHTML += `</tr>`;
            }
        } else if(season == 2){
            if (products.products[i].category_id == season){
            var discountPrice = (products.products[i].price * (.75)).toFixed(2);
            productsHTML+= `<tr class="success">`;
            productsHTML += `<td>${products.products[i].name}</td>`;
            productsHTML += `<td class="succes">${discountPrice}</td>`;
            productsHTML += `</tr>`;
            } else{
            productsHTML+= `<tr>`;
            productsHTML += `<td>${products.products[i].name}</td>`;
            productsHTML += `<td>${products.products[i].price}</td>`;
            productsHTML += `</tr>`;
            }
        } else if(season == 3){
            if (products.products[i].category_id == season){
            var discountPrice = (products.products[i].price * (.85)).toFixed(2);
            productsHTML+= `<tr class="success">`;
            productsHTML += `<td>${products.products[i].name}</td>`;
            productsHTML += `<td >${discountPrice}</td>`;
            productsHTML += `</tr>`;
            } else{
            productsHTML+= `<tr>`;
            productsHTML += `<td>${products.products[i].name}</td>`;
            productsHTML += `<td>${products.products[i].price}</td>`;
            productsHTML += `</tr>`;
            }
        } else{
            productsHTML+= `<tr>`;
            productsHTML += `<td>${products.products[i].name}</td>`;
            productsHTML += `<td>${products.products[i].price}</td>`;
            productsHTML += `</tr>`;
        }
    }

    productList.innerHTML = productsHTML;
}

function productRequestError(event){
    console.log("PRODUCT ERROR");
}





var seasonRequest = new XMLHttpRequest();


seasonRequest.open("GET", "departments.json");

seasonRequest.addEventListener("load",seasonRequestComplete);
seasonRequest.addEventListener("error", seasonRequestError);

function seasonRequestComplete(event){
    console.log("SEASON SUCCESS!");
    var seasonData = JSON.parse(event.target.responseText);
    console.log("seasonData", seasonData);
    showSeason(seasonData);
};

function showSeason(season){
    var seasonList = document.getElementById("product-list");
    var seasonHTML = "";




}

function seasonRequestError(event){
    console.log("SEASON ERROR");
}

seasonRequest.send(productRequest.send());


var seasonBtn = document.getElementById("season-btn");
var seasonOptions = document.getElementsByName("season");
var season="";
var discount = "";

seasonBtn.addEventListener("click", function(event){
    for (var i=0;i<seasonOptions.length;i++){
        if(seasonOptions[i].selected){
            season = seasonOptions[i].value;

        }
    }

    showProduct(productDataObj);
});
































