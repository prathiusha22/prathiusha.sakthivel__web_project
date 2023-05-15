// let fruits = [

//   {
//       "product_image": {
//           "source": "../assets/image/grapes.jpg",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "Fresh Organic grapes",

//       "price" : 150,

//       "rating" : 4

//   },

//   {
//       "product_image": {
//           "source": "../assets/image/apple.jfif",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "Fresh Organic Cabbage",

//       "price" : 150,

//       "rating" : 4

//   },

//   {
//       "product_image": {
//           "source": "../assets/image/cherry.jfif",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "Fresh Organic Tomato",

//       "price" : 150,

//       "rating" : 4

//   },

//   {
//       "product_image": {
//           "source": "../assets/image/custard apple.jfif",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "Fresh Organic Tomato",

//       "price" : 150,

//       "rating" : 4

//   },

//   {
//       "product_image": {
//           "source": "../assets/image/guava.jpg",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "Fresh Organic Tomato",

//       "price" : 150,

//       "rating" : 4

//   },

//   {
//       "product_image": {
//           "source": "../assets/image/kiwi.jfif",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "Fresh Organic Tomato",

//       "price" : 150,

//       "rating" : 4

//   },

//   {
//       "product_image": {
//           "source": "../assets/image/muskmelon.jfif",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "Fresh Organic Tomato",

//       "price" : 150,

//       "rating" : 4

//   },

//   {
//       "product_image": {
//           "source": "../assets/image/peach.jfif",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "Fresh Organic Tomato",

//       "price" : 150,

//       "rating" : 4

//   },

//   {
//       "product_image": {
//           "source": "../assets/image/plums.jfif",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "Fresh Organic Tomato",

//       "price" : 150,

//       "rating" : 4

//   },

//   {
//       "product_image": {
//           "source": "../assets/image/pomegranate.jfif",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "Fresh Organic Tomato",

//       "price" : 150,

//       "rating" : 4

//   },

//   {
//       "product_image": {
//           "source": "../assets/image/raspberry.jfif",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "Fresh Organic Tomato",

//       "price" : 150,

//       "rating" : 4

//   },

//   {
//       "product_image": {
//           "source": "../assets/image/strawberry.jfif",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "Fresh Organic Tomato",

//       "price" : 150,

//       "rating" : 5.0

//   },

//   {
//       "product_image": {
//           "source": "../assets/image/water.jfif",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "Fresh Organic Tomato",

//       "price" : 150,

//       "rating" : 5.0

//   },

//   {
//       "product_image": {
//           "source": "../assets/image/blueberry.jfif",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "Fresh Organic Tomato",

//       "price" : 150,

//       "rating" : 5.0

//   },

//   {
//       "product_image": {
//           "source": "../assets/image/apricot.jfif",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "Fresh Organic Tomato",

//       "price" : 150,

//       "rating" : 5.0

//   },

//   {
//       "product_image": {
//           "source": "../assets/image/gooseberry.jpg",
//           "alt": "image of tomato veggie"
//       },

//       "product_name": "FreshorganicTomato",

//       "price" : 150,

//       "rating" : 5.0

//   },
// ]

// let product_card_div;

// let prdouct_link;
// let product_image;
// let product_name;

// let product_quantity;

// let ratings_div;

// let buy_now_link;
// let add_to_cart_link;

// let i;

// for(i=0; i<fruits.length; i++){
// //   productCard();
// // }

// // function productCard(){

// product_card_div = document.createElement("div");
// product_card_div.setAttribute("class", "product-card");
// document.querySelector(".product-list-container").append(product_card_div);

// prdouct_link = document.createElement("a");
// // prdouct_link.setAttribute("href", "#");
// product_card_div.append(prdouct_link);

// product_image = document.createElement("img");
// product_image.setAttribute("src", fruits[i]["product_image"]);
// prdouct_link.append(product_image);

// product_name = document.createElement("p");
// product_name.innerText = fruits[i]["titlename"];
// prdouct_link.append(product_name);

// product_quantity = document.createElement("p");
// product_quantity.innerText = "₹ "+fruits[i]["price"]+ " Per kg";
// product_card_div.append(product_quantity);

// ratings_div = document.createElement("div");
// ratings_div.setAttribute("class", "product-ratings");
// product_card_div.append(ratings_div);

// let product = fruits[i];
// let rating_round = Math.round(product.rating);

// let stars = "";
// for(let j=0; j<rating_round; j++){
//   stars += "⭐";
// }

// ratings_div.append(stars);

// buy_now_link = document.createElement("a");
// buy_now_link.setAttribute("href", "order2.html?name="+fruits[i]["titlename"]);
// buy_now_link.setAttribute("class", "buy-now")
// buy_now_link.innerText = "Buy Now";
// product_card_div.append(buy_now_link);

// add_to_cart_link = document.createElement("a");
// add_to_cart_link.setAttribute("href", "../html/cart.html");
// add_to_cart_link.setAttribute("class" , "add-to-cart")
// add_to_cart_link.innerText = "Add to Cart";
// product_card_div.append(add_to_cart_link);

// }
