import dataProducts from './dataProducts';
const productPageLayout: string = 
`
<div class="wrapper">
  <p class="path-product font">STORE ></p>
  <div class="wrapper-product wrap">
    <div class="photos-product wrap">
      <div class="photos-main"></div>
      <div class="photos-other">
        <div class="photo-other"></div>
        <div class="photo-other"></div>
        <div class="photo-other"></div>
      </div>
    </div>
    <div class="info-product wrap">
      <div class="info-main font wrap">
        <h2 class = "product-title font">iPhone 9</h2>
        <p class = "product-description font">An apple mobile which is nothing like apple</p>
      </div>
      <div class="info-other">
        <ul class="font">
          <li>Rating:</li>
          <li>Stock:</li>
          <li>Brand:</li>
          <li>Category:</li>
          <li>Discount precentage:</li>
        </ul>
        <ul>
          <li class = "product-rating">dataProducts.rating</li>
          <li class = "product-stock">dataProducts.stock</li>
          <li class = "product-brand">dataProducts.brand</li>
          <li class = "product-category">dataProducts.category</li>
          <li class = "product-discountPercentage">dataProducts.discountPercentage</li>
        </ul>
      </div>
    </div>
    <div class="wrapper-buttons">
      <button class="button-product font">DROP FORM CART</button>
      <button class="button-product font">BUY NOW</button>
    </div>
    <p class="cost-product font">€549.00</p>
  </div>
</div>`

export default function productPage(i: number): void{
  let main = <HTMLElement>document.querySelector('.main');
  main.innerHTML = productPageLayout;

  let title = <HTMLElement>document.querySelector(".product-title");
  title.innerText = dataProducts[i].title;

  let description = <HTMLElement>(
    document.querySelector(".product-description")
  );
  description.innerText = dataProducts[i].description;

  let rating = <HTMLElement>document.querySelector(".product-rating");
  rating.innerText = String(dataProducts[i].rating);

  let stock = <HTMLElement>document.querySelector(".product-stock");
  stock.innerText = String(dataProducts[i].stock);

  let brand = <HTMLElement>document.querySelector(".product-brand");
  brand.innerText = dataProducts[i].brand;

  let category = <HTMLElement>document.querySelector(".product-category");
  category.innerText = dataProducts[i].category;

  let discount = <HTMLElement>(
    document.querySelector(".product-discountPercentage")
  );
  discount.innerText = String(dataProducts[i].discountPercentage);

  let path = <HTMLElement>document.querySelector(".path-product");
  path.innerText = `Store > ${dataProducts[i].category} > ${dataProducts[i].brand} > ${dataProducts[i].title}`;

  let main_page = <HTMLElement>document.querySelector(".photos-main");
  main_page.style.background = `url('${dataProducts[i].images[0]}') no-repeat`;
  for (let j = 0; j < 3; j++) {
    let k = <HTMLElement>document.getElementsByClassName("photo-other")[j];
    k.style.backgroundImage = `url('${dataProducts[i].images[j]}')`;
    k.style.backgroundSize = "cover";
    k.addEventListener("click", () => {
      main_page.style.backgroundImage = `url('${dataProducts[i].images[j]}')`;
    });
  }
  let cost = <HTMLElement>document.querySelector(".cost-product");
  cost.innerText = `€${dataProducts[i].price}`;
}