//create   product//

let product = JSON.parse(localStorage.getItem('create_product')) ?? [];
function createproduct() {
    let product_create = {}


    const image = document.getElementById("image").value
    const titlename = document.getElementById("titlename").value
    const price = document.getElementById("price").value
    const ratings = document.getElementById("ratings").value

    product_create["image"] = image;
    product_create["titlename"] = titlename;
    product_create["price"] = price;
    product_create["ratings"] = ratings;
    product_create["product_id"] = product.length;

    product.push(product_create);
    localStorage.setItem("create_product", JSON.stringify(product))
}


//delete product//
function delete_product() {
    let user_product = JSON.parse(localStorage.getItem("create_product"));
    for (let i = 0; i < user_product.length; i++) {
        if (document.getElementById("titlename").value == user_product[i]["titlename"]) {
            user_product.splice(i, 1)
            localStorage.setItem("create_product", JSON.stringify(user_product));
        }
    }
}

//update product//
let output = "";
let append_div = document.querySelector(".table-body");

product.forEach(item => {

    output += `
<tr>
<td>${item.product_id}</td>
   <td>${item.titlename}</td>
   <td class="td-img"><img src="${item.image}"></td>
   <td>${item.price}</td>
   <td><button onclick="product_update(${item.product_id})">Update</button></td>
</tr>`
    append_div.innerHTML = output;
});


function product_update(id) {

    product.find(function (obj) {

        if (obj.product_id == id) {
            document.getElementById("image").value = obj.image;
            document.getElementById("titlename").value = obj.titlename;
            document.getElementById("price").value = obj.price;
            document.getElementById("ratings").value = obj.ratings;
        }
    });
}

function updateproduct() {
    const image = document.getElementById("image").value;
    const title = document.getElementById("titlename").value;
    const price = document.getElementById("price").value;
    const rating = document.getElementById("ratings").value;

    product.find(function (obj) {

        if (title == obj.titlename) {

            obj.image = image;
            obj.titlename = title;
            obj.price = price;
            obj.ratings = rating;
        }
    })
    localStorage.setItem("create_product", JSON.stringify(product));
}
