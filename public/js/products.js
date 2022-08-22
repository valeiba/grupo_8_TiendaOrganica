const containerProducts = document.querySelector("#container-products");
const token = localStorage.getItem("token");
const buttonPrev = document.querySelector("#button-prev");
const buttonNext = document.querySelector("#button-next");
let page = 1;
let totalData = 0;

function makeTemplateProduct(product) {
  let bottons = "";

  if (token) {
    bottons = `<a href="/users/shopping-cart" class="product-card__button">Comprar</a>`;
  } else {
    bottons = `<a href="/products/detail/${product.id}" class="product-card__button">Ver</a>`;
  }

  return `
    <article class="product-card">
        <a href="/products/detail/${product.id}" class="product-card__details">
            <img src="images/products/${product.image}" alt="" class="product-card__img" />
            <h2 class="product-card__title">${product.name}</h2>
            <p class="product-card__price">$${product.price}</p>
            <p class="">${product.presentation}</p>
        </a>
        ${bottons}	
    </article>
    `;
}

function getProducts(page = 1, limit = 10) {
  fetch(`/api/products?page=${page}&limit=${limit}`)
    .then((response) => response.json())
    .then((data) => {
      const { products, total } = data;

      containerProducts.innerHTML = ""; // limpiar los datos

      products.forEach((product) => {
        // containerProducts.innerHTML += makeTemplateProduct(product);

        containerProducts.insertAdjacentHTML(
          "beforeend",
          makeTemplateProduct(product)
        );
      });
      totalData = total;
    })
    .catch((error) => console.log(error));
}

buttonPrev.addEventListener("click", () => {
  if (page > 1) {
    page--;
    getProducts(page);
  }
});

buttonNext.addEventListener("click", () => {
  if (page < Math.ceil(totalData / 10)) {
    page++;
    getProducts(page);
  }
});

getProducts();
