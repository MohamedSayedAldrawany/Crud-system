var ProductNameInput = document.getElementById("ProductNameInput") //.value//input kolo
var ProductPriceInput = document.getElementById("ProductPriceInput")//input kolo
var ProductCategoryInput = document.getElementById("ProductCategoryInput")//input kolo
var ProductDescriptionInput = document.getElementById("ProductDescriptionInput")//input kolo
var searchValue = document.getElementById("searchInput")
var currentIndex = 0;

var productsContainer = [];
if (localStorage.getItem("productData") != null) {
    productsContainer = JSON.parse(localStorage.getItem("productData"))
    disPlay();
}

function AddProduct() {
    var product = {
        name: ProductNameInput.value,
        price: ProductPriceInput.value,
        category: ProductCategoryInput.value,
        des: ProductDescriptionInput.value
    }
    productsContainer.push(product)
    if (validationName() == true && validationPrice() == true && validationProductcategory() == true && validationProductDesc() == true) {
        localStorage.setItem("productData", JSON.stringify(productsContainer))

        disPlay();

    }



}


function search() {
    var searchValue = searchInput.value;
    var cartona = ""
    for (var i = 0; i < productsContainer.length; i++) {
        if (productsContainer[i].name.toLowerCase().includes(searchValue.toLowerCase())
            ||
            (productsContainer[i].category.toLowerCase().includes(searchValue.toLowerCase()))) {
            cartona += `
    <tr>
    <td>${i}</td>
    <td>${productsContainer[i].name.replace(searchValue, "<span class='text-danger'>" + searchValue + "</span>")}
    </td>
    <td>${productsContainer[i].price}</td>
    <td>${productsContainer[i].category.replace(searchValue, "<span class='text-danger'>" + searchValue + "</span>")}</td>
    <td>${productsContainer[i].des}</td>
    <td><button class="btn btn-sm btn-outline-info"  onclick="update(`+ i + `)">update</button></td>
    <td><button class="btn btn-sm btn-outline-warning" onclick="deleteData(`+ i + `)">delete</button></td>
      </tr> `}

    }

    document.getElementById("demo").innerHTML = cartona;
}

function clearForm() {
    ProductNameInput.value = ""
    ProductPriceInput.value = ""
    ProductCategoryInput.value = ""
    ProductDescriptionInput.value = ""

}


function disPlay() {
    var temp = "";
    for (var i = 0; i < productsContainer.length; i++) {
        temp += `
        <tr>
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].des}</td>
        <td><button class="btn btn-sm btn-outline-info"  onclick="update(`+ i + `)">update</button></td>
        <td><button class="btn btn-sm btn-outline-warning" onclick="deleteData(`+ i + `)">delete</button></td>
          </tr> `}
    document.getElementById("demo").innerHTML = temp;





}

function update(index) {
    currentIndex = index;
    ProductNameInput.value = productsContainer[index].name
    ProductPriceInput.value = productsContainer[index].price
    ProductCategoryInput.value = productsContainer[index].category
    ProductDescriptionInput.value = productsContainer[index].des

    document.getElementById("editbtn").style.display = "inline"
    document.getElementById("addbtn").style.display = "none"
}
function edit() {
    productsContainer[currentIndex].name = ProductNameInput.value
    productsContainer[currentIndex].price = ProductPriceInput.value
    productsContainer[currentIndex].category = ProductCategoryInput.value
    productsContainer[currentIndex].des = ProductDescriptionInput.value
    document.getElementById("editbtn").style.display = "none"
    document.getElementById("addbtn").style.display = "inline"

    localStorage.setItem("productData", JSON.stringify(productsContainer))
    disPlay();

}

function deleteData(index) {
    productsContainer.splice(index, 1)
    localStorage.setItem("productData", JSON.stringify(productsContainer))
    disPlay();
}


function validationProductcategory() {
    var regex = /^[A-Z][a-z]{3,8}$/
    if (regex.test(ProductCategoryInput.value)) {
        document.getElementById("alertCtegory").style.display = "none"
        ProductCategoryInput.classList.add("is-valid")
        ProductCategoryInput.classList.remove("is-invalid")
        return true;

    }
    else {
        document.getElementById("alertCtegory").style.display = "block"
        ProductCategoryInput.classList.remove("is-valid")
        ProductCategoryInput.classList.add("is-invalid")
    }
}
function validationName() {
    var regex = /^[A-Z][a-z]{3,8}[0,9]?/
    if (regex.test(ProductNameInput.value)) {
        document.getElementById("alertName").style.display = "none"
        ProductNameInput.classList.add("is-valid")
        ProductNameInput.classList.remove("is-invalid")
        return true;

    }
    else {
        document.getElementById("alertName").style.display = "block"
        ProductNameInput.classList.remove("is-valid")
        ProductNameInput.classList.add("is-invalid")
    }
}
function validationProductDesc() {
    var regex = /^[A-Z][a-z]{3,8}[0,9]?/
    if (regex.test(ProductDescriptionInput.value)) {
        document.getElementById("alertdesc").style.display = "none"
        ProductDescriptionInput.classList.add("is-valid")
        ProductDescriptionInput.classList.remove("is-invalid")
        return true;

    }
    else {
        document.getElementById("alertdesc").style.display = "block"
        ProductDescriptionInput.classList.remove("is-valid")
        ProductDescriptionInput.classList.add("is-invalid")
    }
}

function validationPrice() {
    var regex = /^[0-9]{3,5}?/
    if (regex.test(ProductPriceInput.value)) {
        document.getElementById("alertPrice").style.display = "none"
        ProductPriceInput.classList.add("is-valid")
        ProductPriceInput.classList.remove("is-invalid")
        return true

    }
    else {
        document.getElementById("alertPrice").style.display = "block"
        ProductPriceInput.classList.remove("is-valid")
        ProductPriceInput.classList.add("is-invalid")
    }
}

