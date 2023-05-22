const create_product = [
  {
    image: "https://iili.io/HNNp0k7.jpg",
    titlename: "FreshorganicTomato",
    price: "20",
    ratings: "4",
    product_id: 0,
    status: true,
  },
  {
    image: "https://iili.io/HNOFWga.jpg",
    titlename: "FreshorganicBeetroot",
    price: "45",
    ratings: "4",
    product_id: 1,
    status: true,
  },
  {
    image: "https://iili.io/HNOKxkv.jpg",
    titlename: "FreshorganicPotato",
    price: "30",
    ratings: "4",
    product_id: 2,
    status: true,
  },
  {
    image: "https://iili.io/HNOKAQI.jpg",
    titlename: "FreshorganicKohlrabi",
    price: "28",
    ratings: "4",
    product_id: 3,
    status: true,
  },
  {
    image: "https://iili.io/HNOK7EX.jpg",
    titlename: "FreshorganicBrinjal",
    price: "30",
    ratings: "4",
    product_id: 4,
    status: true,
  },
  {
    image: "https://iili.io/HNOK1p4.jpg",
    titlename: "FreshorganicBittergourd",
    price: "50",
    ratings: "4",
    product_id: 5,
    status: true,
  },
  {
    image: "https://iili.io/HNOKVQS.jpg",
    titlename: "FreshorganicBroadbeans",
    price: "45",
    ratings: "4",
    product_id: 6,
    status: true,
  },
  {
    image: "https://iili.io/HNOqnbR.jpg",
    titlename: "FreshorganicBeans",
    price: "25",
    ratings: "4",
    product_id: 8,
    status: true,
  },
  {
    image: "https://iili.io/HNOqIsI.png",
    titlename: "FreshorganicCabbage",
    price: "60",
    ratings: "4",
    product_id: 9,
    status: true,
  },
  {
    image: "https://iili.io/HNOqA0X.jpg",
    titlename: "FreshorganicBrocholi",
    price: "90",
    ratings: "4",
    product_id: 10,
    status: true,
  },
  {
    image: "https://iili.io/HNOCUHg.jpg",
    titlename: "FreshorganicCarrot",
    price: "30",
    ratings: "4",
    product_id: 11,
    status: true,
  },
  {
    image: "https://iili.io/HNOCUHg.jpg",
    titlename: "FreshorganicCarrot",
    price: "30",
    ratings: "4",
    product_id: 12,
    status: true,
  },
];

if (localStorage.getItem("create_product")) {
  // console.log("pro");
} else {
  localStorage.setItem("create_product", JSON.stringify(create_product));
  console.log("yes");
  console.log("okok");
}
