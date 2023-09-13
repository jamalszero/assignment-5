function extractProductNameFromCard(ID){
    const productName = document.getElementById(ID).innerText;
    const selectedProductsLists = document.getElementById('selected-products');
    const newItemInsSelectedProductsList = document.createElement('li');
    newItemInsSelectedProductsList.innerText = productName;
    selectedProductsLists.appendChild(newItemInsSelectedProductsList);
}



function extractProductPriceFromCard(ID){
    const totalPrice = parseFloat(document.getElementById('total-price').innerText);
    const productPrice = parseFloat(document.getElementById(ID).innerText);
    const newTotalPrice = totalPrice + productPrice;
    document.getElementById('total-price').innerText = newTotalPrice.toFixed(2);
    document.getElementById('total-price2').innerText = newTotalPrice.toFixed(2);
    if(newTotalPrice > 0){
        document.getElementById('btn-purchase').removeAttribute('disabled');
        
    }
    if(newTotalPrice >= 200){
        document.getElementById('btn-apply').removeAttribute('disabled');
    }
    return newTotalPrice;
}

function applyCouponCode(ID){
    const enteredCouponCode = document.getElementById(ID).value;
    if(enteredCouponCode === 'SELL200'){
    const newTotalPrice = parseFloat(document.getElementById('total-price').innerText);
    const discountAmount = (newTotalPrice/100)*20;
    document.getElementById('discount-amount').innerText = discountAmount.toFixed(2);
    const totalPriceAfterDiscount = newTotalPrice - discountAmount;
    document.getElementById('total-price2').innerText = totalPriceAfterDiscount;
    }
}

function allClear(ID){
    document.getElementById('selected-products').innerHTML = '';
    document.getElementById('total-price').innerText = "0.00 ";
    document.getElementById('discount-amount').innerText = "0.00 ";
    document.getElementById('total-price2').innerText = "0.00 ";
    document.getElementById('btn-apply').disabled = true;
    document.getElementById('btn-purchase').disabled = true;
}