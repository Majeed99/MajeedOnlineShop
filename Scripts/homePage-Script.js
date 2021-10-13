let items = [
  {
    id: 0,
    name: "Armen Living Summer Dining Chair",
    imgSrc: "../images/chair.jpg",
    details: { price: 120, color: "black", material: "wood", size: "none" },
  },
  {
    id: 1,
    name: "LED Floor Lamp with Dimmer",
    imgSrc: "../images/lamp.jpg",
    details: {
      price: 55,
      color: "silver",
      material: "silver",
      size: "15cm X 15cm x 2m",
    },
  },
  {
    id: 2,
    name: "KOHROS Large Decorative mirror",
    imgSrc: "../images/mirror.jpg",
    details: {
      price: 60,
      color: "silver",
      material: "silver",
      size: "50cm X 80cm",
    },
  },
  {
    id: 3,
    name: "Walker Edison Modern",
    imgSrc: "../images/walker.jpg",
    details: {
      price: 60,
      color: "Rustic Oak",
      material: "wood",
      size: "20cm X 10cm",
    },
  },
  {
    id: 4,
    name: "Janine Gray and Beige Updated",
    imgSrc: "../images/janine.jpg",
    details: {
      price: 50,
      color: "Grey",
      material: "wood",
      size: "5'3 x 7'3",
    },
  },
  {
    id: 5,
    name: "nuLOOM Ashton Simple Wool Tassel Area Rug",
    imgSrc: "../images/wool.jpg",
    details: {
      price: 70,
      color: "Grey",
      material: "80% Wool, 20% Cotton",
      size: "3' x 5'",
    },
  },
  {
    id: 6,
    name: "Vigorwise Round Wall Clock",
    imgSrc: "../images/watch.jpg",
    details: {
      price: 18,
      color: "grey & brown",
      material: "plastic",
      size: "12inch",
    },
  },
  {
    id: 7,
    name: "Silk Road Concepts Collection",
    imgSrc: "../images/silk.jpg",
    details: {
      price: 23,
      color: "Orange",
      material: "none",
      size: "3'3 x 4'7",
    },
  },
];
let allItems = document.getElementById("allItems");

items.forEach((e) => {
  console.log(e.id);
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
    e.details.price +
    `</li>
                  <li><b>Color:</b> ` +
    e.details.color +
    `</li>
                  <li><b>Material:</b> ` +
    e.details.material +
    `</li>
                  <li><b>Size :</b>` +
    e.details.size +
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

let myCart = [];

window.addToCart = function addToCart(e) {
  myCart.push(items[e.id]);
  let total = 0;
  myCart.forEach((itemAdded) => {
    total += itemAdded.details.price;
  });

  alert("The total price now: " + total);
};

export default { myCart };
