$(document).ready(function() {


    function getProducts() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((data) =>
                data.forEach(element => {
                    createProducts(element.id, element.title, element.price, element.image, element.rating.count)
                })
            )
    }

    getProducts()


    var productsCard = document.querySelector(".products-card")

    function createProducts(id, title, price, img, count) {
        productsCard.innerHTML += `
    <div class="col-3">
    <div class="card">
    <div class="card-img product-image">
        <img class="card-image  " src="${img}" alt="" width="250px" height="250px">
    </div>
    <div class="card-head ">
        <div class="card-title mt-2  d-flex align-items-center">
            <h4 class="product-title">${title}</h4>
            <div class="card-description small mb-2 ms-2"></div>

        </div>
    </div>
    <div class="card-price d-flex align-items-center">
        <h2 class="price product-price">$${price}</h2>
        <div class="price-discount badge text-light ms-3 bg-danger">%30 İndirim</div>
    </div>
    <div class="card-color my-1 ">
        <a class="dot dot-1 btn m-2"></a>
        <a class="dot dot-2 btn m-2"></a>
        <a class="dot dot-3 btn m-2"></a>
        <a class="dot dot-4 btn m-3"></a>
    </div>
    <div class="card-body-size ">
        <a class="body-size-item btn  m-1" href="#">XS</a>
        <a class="body-size-item btn  m-1" href="#">S</a>
        <a class="body-size-item btn  m-1" href="#">L</a>
        <a class="body-size-item btn  m-1" href="#">XL</a>
    </div>
    <div class="card-addtocard my-2 ">
        <button id="btnaddtocart" class="btn-add-to-cart" data-id=${id}>
  Sepete Ekle
  </button>
        <span class="card-favori mx-4">
    <input class="fav" type="checkbox" checked="checked" id="favorite" name="favorite-checkbox" value="favorite-button">
    <label for="favorite" class="favorite">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </label>
</span>
    </div>
    <div class="card-stars my-3">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="small">(145) </span>
    </div>
    <div class="badge bg-warning card-comments">Stok : ${count}</div>
</div>
</div>
    
    `
    };



})