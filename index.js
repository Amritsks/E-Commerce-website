const product = [
  {
    id: 0,
    image: 'image/gg-1.jpg',
    title: 'Z Flip Foldable Mobile',
    price: 120,
  },
  {
    id: 1,
    image: 'image/speaker.jpg',
    title: 'JBL Speaker',
    price: 100,
  },
  {
    id: 7,
    image: 'image/Smartwatch.jpg',
    title: 'Smartwatch',
    price: 30,
  },
  
  {
    id: 3,
    image: 'image/aa-1.jpg',
    title: 'Head Phones',
    price: 100,
  },
  {
    id: 4,
    image: 'image/iphone.jpg',
    title: 'Iphone 15 plus',
    price: 790,
  },
  {
    id: 5,
    image: 'image/iqoo.jpg',
    title: 'Iqoo Z9s',
    price: 300,
  },
  {
    id: 6,
    image: 'image/calculator.jpg',
    title: 'Calculator',
    price: 9,
  },
  {
    id: 2,
    image: 'image/ee-3.jpg',
    title: '250D DSLR Camera',
    price: 230,
  },
  {
    id: 8,
    image: 'image/hh-2.jpg',
    title: 'Air Pods Pro',
    price: 60,
  },
  {
    id: 9,
    image: 'image/laptop.jpg',
    title: 'Dell Laptop',
    price: 550,
  }
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
  var { image, title, price } = item;
  return (
    `<div class='box'>
      <div class='img-box'>
        <img class='images' src=${image}></img>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
      `</div>
    </div>`
  )
}).join('')

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0, total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  }
  else {
    document.getElementById("cartItem").innerHTML = cart.map((items) => {
      var { image, title, price } = items;
      total = total + price;
      document.getElementById("total").innerHTML = "$ " + total + ".00";
      return (
        `<div class='cart-item'>
          <div class='row-img'>
            <img class='rowimg' src=${image}>
          </div>
          <p style='font-size:12px;'>${title}</p>
          <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
        "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
      );
    }).join('');
  }
}