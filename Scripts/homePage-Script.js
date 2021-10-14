let items = [
  {
    id: 0,
    name: "Armen Living Summer Dining Chair",
    imgSrc: "../images/chair.jpg",
    details: [120, "black", "wood", "none"],
  },
  {
    id: 1,
    name: "LED Floor Lamp with Dimmer",
    imgSrc: "../images/lamp.jpg",
    details: [55, "silver", "silver", "15cm X 15cm x 2m"],
  },
  {
    id: 2,
    name: "KOHROS Large Decorative mirror",
    imgSrc: "../images/mirror.jpg",
    details: [60, "silver", "silver", "50cm X 80cm"],
  },
  {
    id: 3,
    name: "Walker Edison Modern",
    imgSrc: "../images/walker.jpg",
    details: [60, "Rustic Oak", "wood", "20cm X 10cm"],
  },
  {
    id: 4,
    name: "Janine Gray and Beige Updated",
    imgSrc: "../images/janine.jpg",
    details: [50, "Grey", "wood", "5'3 x 7'3"],
  },
  {
    id: 5,
    name: "nuLOOM Ashton Simple Wool Tassel Area Rug",
    imgSrc: "../images/wool.jpg",
    details: [70, "Grey", "80% Wool, 20% Cotton", "3' x 5'"],
  },
  {
    id: 6,
    name: "Vigorwise Round Wall Clock",
    imgSrc: "../images/watch.jpg",
    details: [18, "grey & brown", "plastic", "12inch"],
  },
  {
    id: 7,
    name: "Silk Road Concepts Collection",
    imgSrc: "../images/silk.jpg",
    details: [23, "Orange", "none", "3'3 x 4'7"],
  },
];

let allItems = document.getElementById("allItems");

items.forEach((e) => {
  // console.log(e);
  let item = document.createElement("div");
  item.setAttribute("class", "itemCard");
  item.innerHTML =
    `<div class="container">
            <img class="image" src= ` +
    e.imgSrc +
    ` />
            <div class="overlay">
              <div class="description">
                <h3>Details</h3>
                <ul class="detailsUl">
                  <li><b>Price:</b>    ` +
    e.details[0] +
    ` SR</li>
                  <li><b>Color:</b> ` +
    e.details[1] +
    `</li>
                  <li><b>Material:</b> ` +
    e.details[2] +
    `</li>
                  <li><b>Size: </b>` +
    e.details[3] +
    `</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 class="itemTitle">` +
    e.name +
    `</h2>
          <div class="bottom d-flex justify-content-center">
            <a
            id=` +
    e.id +
    `  class="itemLink "
              onclick="addToCart(this)"
              >add to cart</a>
          </div>`;
  allItems.appendChild(item);
});
localStorage.clear();
let myCart = [];

window.addToCart = function addToCart(e) {
  myCart.push(items[e.id]);
  let total = 0;
  myCart.forEach((itemAdded) => {
    total += itemAdded.details[0];
  });
  alert("The total price now: " + total);
  localStorage.setItem("myCart", JSON.stringify(myCart));
  console.log(myCart);
  document.getElementById("counterOfCart").innerText = myCart.length;
};
export default { myCart, items };
