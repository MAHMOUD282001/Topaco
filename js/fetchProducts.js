let saleSectionProducts = document.querySelector(".sale-section-products");

let computerSectionProducts = document.querySelector(
  ".computer-section-products"
);

let mobileSectionProducts = document.querySelector(".mobile-section-products");

let allProductsContent = document.querySelector(".products");

fetch("js/items.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      allProducts = data;

      //All Products Page
      if (window.location.pathname === "/allproducts.html") {
        allProductsContent.innerHTML += getProduct(
          item.id,
          item.old_price,
          item.price,
          item.img,
          item.img_hover,
          item.name
        );
      } else if (window.location.pathname === "/item.html") {
        if (item.old_price) {
          saleSectionProducts.innerHTML += getProduct(
            item.id,
            item.old_price,
            item.price,
            item.img,
            item.img_hover,
            item.name
          );
        }
      } else {
        if (item.old_price) {
          saleSectionProducts.innerHTML += getProduct(
            item.id,
            item.old_price,
            item.price,
            item.img,
            item.img_hover,
            item.name
          );
        }

        if (item.cat === "mobile") {
          mobileSectionProducts.innerHTML += getProduct(
            item.id,
            item.old_price,
            item.price,
            item.img,
            item.img_hover,
            item.name
          );
        } else if (item.cat === "computer") {
          computerSectionProducts.innerHTML += getProduct(
            item.id,
            item.old_price,
            item.price,
            item.img,
            item.img_hover,
            item.name
          );
        }
      }
    });
  });

function getProduct(id, oldPrice, price, img, imgHover, name) {
  return `
            <div class="product swiper-slide">
              ${
                oldPrice
                  ? `<div class="sale-percent">%${Math.floor(
                      ((oldPrice - price) / oldPrice) * 100
                    )}</div>`
                  : ""
              }
              <div class="icons">
                <span>
                  <i class="fa-solid fa-heart"></i>
                </span>

                <span>
                  <i class="fa-solid fa-cart-plus" onclick="addToCart(${id})"></i>
                </span>

                <span>
                  <i class="fa-solid fa-share"></i>
                </span>
              </div>

              <div class="product-img">
                <img src="${img}" alt="product" />

                <img
                  class="img-cover"
                  src="${imgHover}"
                  alt="product"
                />
              </div>

              <h3 class="product-name">
                <a href="../item.html"
                  >"${name}"</a>
              </h3>

              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div class="price">
                <p><span>$ ${price}</span></p>
                ${oldPrice ? `<p class="old-price">$ ${oldPrice}</p>` : ""}
              </div>
            </div>
            `;
}
