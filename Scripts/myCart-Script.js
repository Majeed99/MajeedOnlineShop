window.addEventListener("load", function () {
  let vat = calcVAT();
  let total = calcTotal();
  let delivery = calcDelivery();
  function AllTotal() {
    return calcTotal() + calcVAT() + calcDelivery() - calcDesc();
  }

  let myCart = JSON.parse(localStorage.myCart);
  document.getElementById("counterOfCart").innerText = myCart.length;

  let all = document.getElementById("allItems");
  // Here is print all items of my cart
  myCart.forEach((e) => {
    let div = document.createElement("div");
    div.setAttribute("class", "itemCard");
    div.innerHTML =
      `<div class="item">
  <img class="col" src="` +
      e.imgSrc +
      `" width="25%" alt="" />
  <h2 class="heading col">
  ` +
      e.name +
      `
  </h2>
  <div class="d-flex justify-content-center col">
            <b>Price: </b> <span>` +
      e.details[0] +
      ` SR</span>
            </div>
            </div>
            <div class="d-flex justify-content-center">
            <button
            class="btn btn-danger my-1 removeBtn"
            style="width: 50%"
            
            id=` +
      e.id +
      `
            >
            Remove
            </button>
            </div>
            <hr />`;

    all.appendChild(div);
  });
  // ----------CHECK REMOVE ITEM FROM MY CART
  let allBtns = document.getElementsByClassName("removeBtn");

  for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener("click", function () {
      console.log(i);
      myCart.splice(i, 1);
      console.table(myCart);
      localStorage.clear();
      localStorage.setItem("myCart", JSON.stringify(myCart));
      location.reload();
      // console.log("here should delete " + allBtns[i].id);
    });
  }

  let sammury = document.getElementById("sammury");
  // -----------------CALCULATE TOTAL
  function calcTotal() {
    let myCart = JSON.parse(localStorage.myCart);
    let res = 0;
    myCart.forEach((e) => {
      res += e.details[0];
    });

    return res;
  }
  // -----------------CALCULATE VAT
  function calcVAT() {
    return calcTotal() * 0.15;
  }

  // ----------------CALCULATE DELIVERY
  function calcDelivery() {
    const radios = document.querySelectorAll('input[name="method"]');
    let selectedValue;
    for (const rb of radios) {
      if (rb.checked) {
        selectedValue = rb.value;
        if (selectedValue == "yes") return 40;
        else if (selectedValue == "no") return 0;
      }
    }
  }
  // ---------------CALCULATE ALL TOTAL

  // --------------------CALCULATE DISCOUNT
  function calcDesc() {
    let input = document.getElementById("coupon").value;
    // console.log(input);
    if (input == "des10") {
      return (total + vat) * 0.1;
    } else return 0;
  }
  // --------------
  const radios = document.querySelectorAll('input[name="method"]');
  if (document.querySelectorAll('input[name="method"]')) {
    const radios = document.querySelectorAll('input[name="method"]');

    for (const rb of radios) {
      rb.addEventListener("click", function () {
        var item = rb.value;
        if (item == "yes") {
          document.getElementById("deliveryNum").innerHTML =
            calcDelivery() + " SR";
          document.getElementById("totalNum").innerHTML = AllTotal() + " SR";
        } else if (item == "no") {
          document.getElementById("deliveryNum").innerHTML = 0 + " SR";
          document.getElementById("totalNum").innerHTML = AllTotal() + " SR";
        }
      });
    }
  }
  // --------------------
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
  // ------------------------CHECK CONFIRM BUTTON
  let confirmBtn = document.getElementById("confirmBtn");
  window.addEventListener("click", Confirmation());
  function Confirmation() {
    let modal = document.getElementById("modal-body");

    modal.innerHTML =
      " The order is sended ,Thank You " +
      " (Order ID: #" +
      generateString(6) +
      " )";
  }
  // -----------------------------

  // --------------------CHECK COUPON BUTTON

  let couponBtn = document.getElementById("couponBtn");
  couponBtn.addEventListener("click", () => {
    console.log("clicked");
    let input = document.getElementById("coupon").value;
    console.log(input);
    let Discount = document.getElementById("Discount");

    if (input == "des10") {
      // console.log(calcDesc());
      Discount.style.display = "block";
      let DiscountNum = document.getElementById("DiscountNum");
      DiscountNum.innerHTML = "-" + calcDesc() + " SR";
      let totalWithVAT = document.getElementById("totalNum");
      // console.log(AllTotal());
      totalWithVAT.innerHTML = AllTotal() + " SR";
    }
  });

  // --------------------
  sammury.innerHTML =
    `<hr />
        <h3>Total: <span > ` +
    total +
    ` SR</span></h3>
        <h3 id="Discount" style="display:none;">Discount: <span id="DiscountNum"> -14 SR</span></h3>
        <h3>VAT: <span> ` +
    vat +
    ` SR</span></h3>
        <h3>delivery: <span id="deliveryNum"> ` +
    delivery +
    ` SR</span></h3>
  <h3>Total (with VAT): <span id="totalNum"> ` +
    AllTotal() +
    ` SR</span></h3>
        <button id="confirmBtn" class="btn btn-primary" data-toggle="modal"
      data-target="#exampleModalCenter" >
          Confirm
        </button>`;
});
