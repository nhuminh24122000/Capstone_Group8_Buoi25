
document.addEventListener('DOMContentLoaded', function () {
    var addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    var cartCountElement = document.getElementById('cartCount');
    var cartCount = 0;

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            cartCount++;
            cartCountElement.innerText = cartCount;
        });
    });
});
