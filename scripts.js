var i;
var cart = {}
$('.minus, .plus').click(function () {
  i = parseInt(this.parentNode.childNodes[7].value);
  i = (this.classList.contains('minus'))? i-1 : i+1;
  if(i==-1){
    i=0;
  }
  console.log(this.parentNode)
  this.parentNode.childNodes[7].value = i

})

$(".addtocart").on("click", function () {
  console.log(this.parentNode.childNodes[3].childNodes[3]);
  console.log(this.parentNode.childNodes[3].childNodes[7]);

  const priceString = this.parentNode.childNodes[3].childNodes[3].textContent;
  console.log(this.parentNode.childNodes[5]);
  const unitPrice = parseFloat(
    priceString.replace("₵", "").replace(/,/g, "")
  ).toFixed(2);
  let quantity = parseInt(
    this.parentNode.childNodes[3].childNodes[7].value
    
  );
  
  let totalCost = quantity * unitPrice;
  let productName = this.parentNode.childNodes[3].childNodes[1].textContent;
  console.log(productName);
  if (quantity > 0) {
    cart[productName] = {
      cost: totalCost,
      price: priceString,
      productQty: quantity,
    };
    alert(
      `\nYou have added ${productName} to your cart\n\nQuantity: ${quantity}\n`
    );
  }
  sessionStorage.setItem("cart", JSON.stringify(cart));
});

