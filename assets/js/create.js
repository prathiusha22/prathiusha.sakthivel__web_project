// create   product//
const getting_data = document.getElementById("create_form");
getting_data.addEventListener("submit", (e) => {
  e.preventDefault();
  createproduct();
  updateproduct();
});

const product = JSON.parse(localStorage.getItem("create_product")) ?? [];
function createproduct() {
  const product_create = {};

  const image = document.getElementById("image").value;
  const titlename = document.getElementById("titlename").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;
  const ratings = document.getElementById("Category").value;

  product_create.image = image;
  product_create.titlename = titlename;
  product_create.price = price;
  product_create.quantity = quantity;
  product_create.Category = ratings;
  product_create.product_id = product.length;
  product_create.status = true;

  product.push(product_create);
  localStorage.setItem("create_product", JSON.stringify(product));

  window.location.reload();
}

// delete product//
function delete_product(id) {
  product.find((obj) => {
    console.log(obj.product_id);
    if (obj.product_id == id) {
      obj.status = false;
      localStorage.setItem("create_product", JSON.stringify(product));
    }
  });
}

// update product//
let output = "";
const append_div = document.querySelector(".table_product");

product.forEach((item) => {
  output += `

<tr>
   <td>${item.product_id}</td>
   <td>${item.titlename}</td>
   <td class="td-img"><img src="${item.image}"></td>
   <td>${item.price}</td>
   <td>${item.quantity}</td>
   <td><a href="#"><button id="update" onclick="product_update(${item.product_id})">Update</button></a></td>
   <td><button onclick="delete_product(${item.product_id})">Delete</button></td>
</tr>`;
  append_div.innerHTML = output;
});

function product_update(id) {
  product.find((obj) => {
    if (obj.product_id == id) {
      document.getElementById("image").value = obj.image;
      document.getElementById("titlename").value = obj.titlename;
      document.getElementById("price").value = obj.price;
      document.getElementById("quantity").value = obj.quantity;
      document.getElementById("Category").value = obj.Category;
    }
  });
}

function updateproduct() {
  const image = document.getElementById("image").value;
  const title = document.getElementById("titlename").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;
  const categories = document.getElementById("Category").value;

  product.find((obj) => {
    if (title == obj.titlename) {
      obj.image = image;
      obj.titlename = title;
      obj.price = price;
      obj.quantity = quantity;
      obj.Category = categories;
    }
  });
  localStorage.setItem("create_product", JSON.stringify(product));
}
