const productSer = new ProductServive();


function showTable(arrayData) {
    var content = "";

    arrayData.map(function(product, index) {
        content += `
            <tr>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString()}</td>
                <td>${product.screen}</td>
                <td>${product.backCamera}</td>
                <td>${product.frontCamera}</td>
                <td><img src="${product.img}" style="width:100%" ></td>
                <td>${product.desc}</td>
                <td>${product.type}</td>
                <td>
                    <button onclick="deleteProduct('${product.id}')" class="btn btn-danger">Xóa</button>
                    <button data-toggle="modal" data-target="#myModal" onclick="showProductDetail('${product.id}')" class="btn btn-info">Xem</button>
                </td>
            </tr>
        `
    });

    document.querySelector("#notifyProducts").innerHTML = content;

}


function showProductList() {
    var axiosResult = productSer.getProductList();

    axiosResult.then(function(result) {
            console.log(result.data);
            showTable(result.data)
        })
        .catch(function(error) {
            console.log(error)
        });
}

showProductList();

function addProduct() {
    var name = document.querySelector("#namePro").value;
    var price = document.querySelector("#pricePro").value;
    var screen = document.querySelector("#screenPro").value;
    var backCamera = document.querySelector("#backCamPro").value;
    var frontCamera = document.querySelector("#frontCamPro").value;
    var img = document.querySelector("#imgPro").value
    var desc = document.querySelector("#descPro").value
    var type = document.querySelector("#typePro").value;

    var product = new Product(name, price, screen, backCamera, frontCamera, img, desc, type);

    productSer.addProductSer(product)
        .then(function(result) {
            console.log(result);
            showProductList();
        })
        .catch(function(error) {
            console.log(error)
        })
}


document.querySelector("#btnAdd").onclick = function() {
    document.querySelector("#myModal .modal-footer").innerHTML = `
        <button class="btn btn-success" onclick="addProduct()">Add Product</button>
    `;
    document.querySelector("#formProduct").reset();

}


function deleteProduct(id) {
    console.log(id);
    productSer.deleteProductSer(id)
        .then(function(result) {
            console.log(result);
            showProductList();

        })
        .catch(function(error) {
            console.log(error)
        
        })
}


function showProductDetail(id) {
    console.log(id);

    productSer.getProductItem(id)
        .then(function(result) {
            console.log(result.data);

            document.querySelector("#namePro").value = result.data.name;
            document.querySelector("#pricePro").value = result.data.price;
            document.querySelector("#screenPro").value = result.data.screen;
            document.querySelector("#backCamPro").value = result.data.backCamera;
            document.querySelector("#frontCamPro").value = result.data.frontCamera;
            document.querySelector("#imgPro").value = result.data.img;
            document.querySelector("#descPro").value = result.data.desc;
            document.querySelector("#typePro").value = result.data.type;

            document.querySelector("#myModal .modal-footer").innerHTML = `
            <button class="btn btn-success" onclick="updateProduct('${result.data.id}')">Update Product</button>
            `
        })
        .catch(function(error) {
            console.log(error)

        })
}


function updateProduct(id) {

    var name = document.querySelector("#namePro").value;
    var price = document.querySelector("#pricePro").value;
    var screen = document.querySelector("#screenPro").value;
    var backCamera = document.querySelector("#backCamPro").value;
    var frontCamera = document.querySelector("#frontCamPro").value;
    var img = document.querySelector("#imgPro").value
    var desc = document.querySelector("#descPro").value
    var type = document.querySelector("#typePro").value;

    var productUpdate = new Product(name, price, screen, backCamera, frontCamera, img, desc, type);

    productSer.updateProductSer(productUpdate, id)
        .then(function(result) {
            console.log(result.data);

            showProductList();
            alert("Cập nhật thành công");

            document.querySelector("#myModal .close").click();
        })
        .catch(function(error) {
            console.log(error);

        })

}