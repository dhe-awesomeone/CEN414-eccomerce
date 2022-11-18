function refreshCart() {
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    let sNo = 1;
    var totalPrice = 0;
    $("tbody").html("");
    $("tfoot .amount-to-be-paid").text("₦0.00");
    for (const key in cart) {
      let cost =
        "₦" +
        cart[key]["cost"].toLocaleString("en-US", { minimumFractionDigits: 2 });
      $("tbody").append(
        `<tr><td>${sNo}</td><td>${key}</td><td class="qty-col">${cart[key]["productQty"]}</td><td>${cart[key]["price"]}</td><td class="cost">${cost}</td><td class="remove-item">x</td></tr>`
      );
      sNo++;
      totalPrice += cart[key]["cost"];
    }
    $("tfoot .amount-to-be-paid").text(
      "₦" +
        totalPrice.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
    );
    sessionStorage.setItem("cart", JSON.stringify(cart));
    $(".remove-item").on("click", function () {
      var cart = JSON.parse(sessionStorage.getItem("cart"));
      delete cart[this.parentNode.childNodes[1].textContent];
      sessionStorage.setItem("cart", JSON.stringify(cart));
      refreshCart();
    });
  }
  refreshCart();
  $(".returnshop").on("click", function () {
    window.open("products.html", "_self");
  });
  $(".clear-cart").on("click", function () {
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    for (const key in cart) {
      delete cart[key];
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));
    refreshCart();
  });
  $(".checkout").on("click", () => {
    var priceString = $("tfoot .amount-to-be-paid").text();
    if (priceString == "₦0.00") {
      return;
    }
    else if (confirm(`You are about to pay ${priceString}\nClick "Ok" to confirm.`)) {
      alert(
        "You have successfully checked out.\nThank you for shopping with Alvin's Store!"
      );
    }
  });
  