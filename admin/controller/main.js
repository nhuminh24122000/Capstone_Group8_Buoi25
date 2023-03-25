const productSer = new ProductService();
const validation = new Validation();


function showTable(arrayData) {
    var content = "";

    arrayData.map(function (product, index) {
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

    document.querySelector("#notifyListPro").innerHTML = content;

}


function showProductList() {
    var axiosResult = productSer.getProductList();

    axiosResult.then(function (result) {
        console.log(result.data);
        showTable(result.data)
    })
        .catch(function (error) {
            console.log(error)
        });
}

showProductList();

function addProduct() {
    var name = document.querySelector("#namePro").value;
    var price = Number(document.querySelector("#pricePro").value);
    var screen = document.querySelector("#screenPro").value;
    var backCamera = document.querySelector("#backCamPro").value;
    var frontCamera = document.querySelector("#frontCamPro").value;
    var img = document.querySelector("#imgPro").value
    var desc = document.querySelector("#descPro").value
    var type = document.querySelector("#typePro").value;

    var isValid = true;

    isValid &= validation.checkEmpty(name, "notifyName", "Tên sản phẩm không để trống!");
    isValid &= validation.checkEmpty(price, "notifyPrice", "Giá không để trống!") && validation.checkPrice(price, "notifyPrice", "Giá là kiểu số và lớn hơn 0!");
    isValid &= validation.checkEmpty(screen, "notifyScreen", "Size màn hình không để trống!");
    isValid &= validation.checkEmpty(backCamera, "notifyBackCam", "Thông tin không được để trống!");
    isValid &= validation.checkEmpty(frontCamera, "notifyFrontCam", "Thông tin không được để trống!");
    isValid &= validation.checkEmpty(img, "notifyImg", "Thông tin không được để trống!");
    isValid &= validation.checkEmpty(desc, "notifyDesc", "Thông tin không được để trống!");
    isValid &= validation.checkSelect("typePro", "notifyType", "Thông tin chưa hợp lệ!");

    if (isValid) {
        var product = new Product(name, Number(price), screen, backCamera, frontCamera, img, desc, type);

        productSer.addProductSer(product)
            .then(function (result) {
                console.log(result);

                showProductList();
                alert("Thêm thành công");
            })
            .catch(function (error) {
                console.log(error)
            })

    }
}


document.querySelector("#btnAdd").onclick = function () {
    document.querySelector("#myModal .modal-footer").innerHTML = `
        <button class="btn btn-success" onclick="addProduct()">Add Product</button>
    `;
    document.querySelector("#formProduct").reset();

}


function deleteProduct(id) {
    console.log(id);
    productSer.deleteProductSer(id)
        .then(function (result) {
            console.log(result);
            showProductList();

        })
        .catch(function (error) {
            console.log(error)
        })
}

function showProductDetail(id) {

    productSer.getProductItem(id)
        .then(function (result) {
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
            <button class="btn btn-success" onclick="updateProduct('${result.data.id}')" >Update Product</button>
            `
        })
        .catch(function (error) {
            console.log(error)
        })
}


function updateProduct(id) {

    console.log(id);

    var name = document.querySelector("#namePro").value;
    var price = Number(document.querySelector("#pricePro").value);
    var screen = document.querySelector("#screenPro").value;
    var backCamera = document.querySelector("#backCamPro").value;
    var frontCamera = document.querySelector("#frontCamPro").value;
    var img = document.querySelector("#imgPro").value
    var desc = document.querySelector("#descPro").value
    var type = document.querySelector("#typePro").value;

    var isValid = true;

    isValid &= validation.checkEmpty(name, "notifyName", "Tên sản phẩm không để trống!");
    isValid &= validation.checkEmpty(price, "notifyPrice", "Giá không để trống!") && validation.checkPrice(price, "notifyPrice", "Giá là kiểu số và lớn hơn 0!");
    isValid &= validation.checkEmpty(screen, "notifyScreen", "Size màn hình không để trống!");
    isValid &= validation.checkEmpty(backCamera, "notifyBackCam", "Thông tin không được để trống!");
    isValid &= validation.checkEmpty(frontCamera, "notifyFrontCam", "Thông tin không được để trống!");
    isValid &= validation.checkEmpty(img, "notifyImg", "Thông tin không được để trống!");
    isValid &= validation.checkEmpty(desc, "notifyDesc", "Thông tin không được để trống!");
    isValid &= validation.checkSelect("typePro", "notifyType", "Thông tin chưa hợp lệ!");

    if (isValid) {
        var productUpdate = new Product(name, Number(price), screen, backCamera, frontCamera, img, desc, type);
        console.log(productUpdate);

        productSer.updateProductSer(productUpdate, id)
            .then(function (result) {
                console.log(result.data);

                showProductList();
                alert("Cập nhật thành công");
                document.querySelector("#myModal .close").click();

            })
            .catch(function (error) {
                console.log(error);
            })
    }
}


function searchProduct() {
    var axiosResult = productSer.getProductList();

    axiosResult.then(function(result) {
            var products = result.data;
            var searchInput = document.getElementById('searchName');

            searchInput.onkeyup = function() {
                var searchValue = searchInput.value.toLowerCase();

                var filteredProducts = products.filter(function(product) {
                    return product.name.toLowerCase().includes(searchValue);
                });

                showTable(filteredProducts);
            };

        })
        .catch(function(error) {
            console.log(error)
        });
}

searchProduct();


function sortUp() {

    var axiosResult = productSer.getProductList();

    axiosResult.then(function(result) {
        var products = result.data;
        var sortIcons = document.querySelectorAll('.sort-icon');
      
        sortIcons.forEach(function(icon) {
          icon.addEventListener('click', function() {
            var selectedValue = this.getAttribute('data-value');
      
            if (selectedValue === 'asc') {
              products.sort(function(a, b) {
                return a.price - b.price;
              });
            } else if (selectedValue === 'desc') {
              products.sort(function(a, b) {
                return b.price - a.price;
              });
            }
      
            showTable(products);
          });
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

sortUp();