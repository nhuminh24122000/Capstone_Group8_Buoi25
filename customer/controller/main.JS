const menu =[
    {
    "id": "1",
    "name": "iphoneX",
    "price": 1000,
    "screen": "screen 68",
    "backCamera": "2 camera 12 MP",
    "frontCamera": "7 MP",
    "img": "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
    "desc": "Thiết kế mang tính đột phá",
    "type": "Iphone"
    },
    {
    "id": "2",
    "name": "Samsung Galaxy M51 ",
    "price": 3500,
    "screen": "screen 69",
    "backCamera": " Chính 64 MP & Phụ 12 MP, 5 MP, 5 MP",
    "frontCamera": " 32 MP",
    "img": "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
    "desc": "Thiết kế đột phá, màn hình tuyệt đỉnh",
    "type": "Samsung"
    },
    {
    "id": "3",
    "name": "Samsung Galaxy M22",
    "price": 45000,
    "screen": "screen 70",
    "backCamera": "Chính 12 MP & Phụ 64 MP, 12 MP",
    "frontCamera": " 32 MP",
    "img": "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
    "desc": "Thiết kế mang tính đột phá",
    "type": "Samsung"
    },
    {
    "id": "4",
    "name": "Iphone 11",
    "price": 1000,
    "screen": "screen 54",
    "backCamera": "Camera: Chính 12 MP & Phụ 64 MP, 12 MP",
    "frontCamera": "32 MP",
    "img": "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-pro-max-256gb-didongviet_23.jpg",
    "desc": "Thiết kế đột phá, màn hình tuyệt đỉnh",
    "type": "Iphone"
    }
    ]


let category = 'all';

const setCategory = (type) => {
    category = type;
    renderListPhone(menu);
};

const renderListPhone = (menu) => {
    const listPhone = getListPhoneByCategory(menu, category);

    const listPhoneDiv = document.getElementById('phoneList');
    listPhoneDiv.innerHTML = '';

    for (let i = 0; i < listPhone.length; i++) {
        if (i % 4 === 0) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            listPhoneDiv.appendChild(rowDiv);
        }
        const divItem = document.createElement('div');
        divItem.classList.add('col-lg-3', 'col-md-6');

        const phone = listPhone[i];
        const {id, name, price, screen, backCamera, frontCamera, img, desc, type} = phone;

        divItem.innerHTML = `
            <div class="card text-black h-100 text-center">
      <div class="card-wrapper">
        <div class="content-overlay"></div>
        <input hidden value="a">
        <img src="${img}" class="card-img" alt="Phone Image">
        <div class="content-details">
          <h3 class="pb-5" style="color: white;">Specifications</h3>
          <div class="d-flex justify-content-start py-1">
            <span class="text-light"><b>Screen:</b> ${screen}</span>
            <span class="text-light">&nbsp;</span>
          </div>
          <div class="d-flex justify-content-start py-1">
            <span class="text-light"><b>Back Camera:</b> ${backCamera}</span>
          </div>
          <div class="d-flex justify-content-start py-1">
            <span class="text-light"><b>Front Camera:</b> ${frontCamera}</span>
          </div>
          <p class="pt-5" style="color: white;"><u>click here for more details</u></p>
          <button type="button" class="btn btn-warning w-50 btn-add-to-cart" data-id="${id}">Add to cart</button>
        </div>
        
        <div class="card-body">
          <div class="text-center">
            <h5 class="card-title pt-3">${name}</h5>
            <span class="text-muted mb-2">${price}$</span>
            <span class="text-danger"><s></s></span>
          </div>
          <div class="mt-3 brand-box text-center">
            <span>${type}</span>
          </div>
          <div class="d-flex justify-content-start pt-3">
            <span><b>Description:</b> ${desc}</span>
          </div>
          <div class="d-flex justify-content-between pt-3">
            <div class="text-warning">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <span class="text-success"><b>In Stock</b></span>
          </div>
          
        </div>
      </div>
    </div>
    
    
        `;
        listPhoneDiv.lastChild.appendChild(divItem);
       
    }
};

const getListPhoneByCategory = (menu, typeCategory) => {
const newMenu = menu.filter((item) => {
    if (typeCategory === 'all') return true;
        return item.type === typeCategory;
});
        
        return newMenu;
};
document.getElementById('selectList').addEventListener('change', (event) => {
            setCategory(event.target.value);
});            
renderListPhone(menu);







const btn_addtoCart = document.querySelectorAll(".btn-add-to-cart");

btn_addtoCart.forEach(function (button,index) {
   
    button.addEventListener('click',function(event){
        var btnItem = event.target;
        // console.log(btnItem);
       
        const product = btnItem.closest('.card-wrapper');
        
        const productImg = product.querySelector('img').src;
        
        const productName = product.querySelector('.card-title').innerText;
        // console.log(productName)
        
        const productPrice = product.querySelector('.text-muted').innerText;
        // console.log(productPrice);
        const productId = btnItem.getAttribute('data-id');
        addtocart(productPrice,productName,productImg,productId);
    })
})
function addtocart(productPrice,productName,productImg,productId){
  cartItem = document.getElementById(`cart-item-${productId}`);
  if( cartItem){
    increaseQuantity(productId);
  }else{
    const addDiv = document.createElement('div');
    addDiv.setAttribute('id', `cart-item-${productId}`)
    const divContent = `
    <div class="products" id="cartList">
            <div class="product">
              <div class="product__1">
                <div class="product__thumbnail">
                  <img src="`+productImg+`">
                </div>
                <div class="product__details">
                  <div style="margin-bottom: 8px;"><b></b></div>
                  <div style="font-size: 90%;">Name : <span class="tertiary">`+productName+`</span></div>
                  <div style="font-size: 90%;">Price : <span class="tertiary productPrice">`+productPrice+`</span></div>
                  <div style="margin-top: 8px;"> <a href="#!" onclick="removeFromCart('${productId}')">Remove</a>
                  </div>
                </div>
              </div>
              <div class="product__2">
                <div class="qty">
                  <span><b>Quantity:</b> </span> &nbsp; &nbsp;
                  <span class="minus bg-dark" onclick="decreaseQuantity('${productId}')">-</span>
                  <span class="quantityResult mx-2">1</span>
                  <span class="plus bg-dark" onclick="increaseQuantity('${productId}')">+</span>
                </div>
                
              </div>
            </div>
            
          </div>
          <div class="cart__totals" >
          <table class="totals">
            <tbody>
              <tr>
                <th class="align-left font-normal tertiary">Subtotal</th>
                <td class="align-right" id="subTotal">$0</td>
              </tr>
              <tr>
                <th class="align-left font-normal tertiary">
                  Shipping <small>(estimated)</small>
                </th>
                <td class="align-right" id="shipping">$10</td>
              </tr>
              <tr>
                <th class="align-left font-normal tertiary">
                  Tax <small>(estimated)</small>
                </th>
                <td class="align-right" id="tax">$0</td>
              </tr>
              <tr>
                <th class="align-left">Total</th>
                <td class="align-right" id="priceTotal">$0</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="tertiary">
                  <small>Estimations based on New York, United States</small>
                </td>
              </tr>
            </tfoot>
          </table>
          <div class="form__footer ">
            <button class="btn  first js-toggle-cart">Continue Shopping</button>
            <button class="btn yellow-btn" onclick="payNow()">Pay Now</button>
            <button class="btn me-5 ms-0 px-4 red-btn" onclick="emptyCart()" id="emptyCart">
              <i class="fa-solid fa-trash me-2"></i> Empty Cart
            </button>
          </div>
        </div>
          
    `
    addDiv.innerHTML = divContent;
    const cartTable = document.querySelector("#cartList");
    // console.log(cartTable)
    cartTable.append(addDiv);
}
}
function removeFromCart(productId) {
  const cartItem = document.getElementById(`cart-item-${productId}`);
  if (cartItem) {
      cartItem.remove();
  }
}

function increaseQuantity(productId) {
  const quantityElement = document.querySelector(`#cart-item-${productId} .quantityResult`);
  if (quantityElement) {
      const currentQuantity = parseInt(quantityElement.textContent, 10);
      quantityElement.textContent = currentQuantity + 1;
  }
}

function decreaseQuantity(productId) {
  const quantityElement = document.querySelector(`#cart-item-${productId} .quantityResult`);
  if (quantityElement) {
      const currentQuantity = parseInt(quantityElement.textContent, 10);
      if (currentQuantity > 1) {
          quantityElement.textContent = currentQuantity - 1;
      }
  }
}






