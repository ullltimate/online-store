import './index.css';
import dataProducts from './components/dataProducts';
import startPage from './components/startPage';
import cartPage from "./components/cartPage";
import productPage from "./components/productPage";
console.log(dataProducts);

let main = <HTMLElement>document.querySelector('.main');
main.innerHTML = startPage;
let filterCategory = <HTMLElement>document.querySelector('.filter-category');
let filterBrand = <HTMLElement>document.querySelector('.filter-brand');

let arrayCategory: string[] = [];
let arrayBrand: string[] = [];
let productsCards = <HTMLElement>document.querySelector('.products-cards');
for (let i=0; i<dataProducts.length; i++){
    console.log(dataProducts[i].title)
    console.log(dataProducts[i].thumbnail)
    arrayCategory.push(dataProducts[i].category);
    arrayBrand.push(dataProducts[i].brand);

    let productsCard = <HTMLElement>document.createElement('div')
    productsCard.className = 'products-card';
    productsCard.innerHTML = 
    `<div class="products-card-image">
        <img src="${dataProducts[i].thumbnail}" alt="" class="card-image">
    </div>
    <div class="products-card-title wrap">
        <img src="https://i.ibb.co/b1fRcKR/icons8-100-1.png" alt="" class="card-expand-img">
        <p class="card-title font">${dataProducts[i].title}</p>
        <img src="https://i.ibb.co/b2V2ZLR/shopping-cart-icon-196876-1.png" alt='' class="card-basket-img">
    </div>`
    productsCards.append(productsCard);
}
arrayCategory = [...new Set(arrayCategory)];
console.log(arrayCategory)
arrayBrand = [...new Set(arrayBrand)];
console.log(arrayBrand)


for (let i=0; i<arrayCategory.length; i++){
    let checkboxCategory = <HTMLElement>document.createElement('div');
    checkboxCategory.className = 'checkbox-line wrap item-active';
    checkboxCategory.innerHTML = 
    `<input type="checkbox" id="${arrayCategory[i]}">
    <label for="${arrayCategory[i]}">${arrayCategory[i]}</label>
    <span>(5/5)</span>`
    filterCategory.append(checkboxCategory);
    console.log(arrayCategory[i]);
}
for (let i=0; i<arrayBrand.length; i++){
    let checkboxBrand = <HTMLElement>document.createElement('div');
    checkboxBrand.className = 'checkbox-line wrap item-active';
    checkboxBrand.innerHTML = 
    `<input type="checkbox" id="${arrayBrand[i]}">
    <label for="${arrayBrand[i]}">${arrayBrand[i]}</label>
    <span>(5/5)</span>`
    filterBrand.append(checkboxBrand);
}

let cart = <HTMLElement>document.querySelector(".basket-img");
let footer = <HTMLElement>document.querySelector(".footer");

cart.addEventListener("click", () => {
  main.innerHTML = cartPage;
  /*main.classList.add("main-cart");
  footer.classList.add("footer-product");*/
  let toModal = <HTMLElement>document.querySelector(".toModal");
  let modalBg = <HTMLElement>document.querySelector(".modal-background");
  let modalWindow = <HTMLElement>document.querySelector(".modal-window");
  let closeModal = <HTMLElement>document.querySelector(".modal-close");

  toModal.addEventListener("click", () => {
    modalBg.style.display = "block";
    modalWindow.style.display = "flex";
  });

  closeModal.addEventListener("click", () => {
    modalBg.style.display = "none";
    modalWindow.style.display = "none";
  });
});

let allCards: HTMLCollection = productsCards.children;

if (allCards != undefined) {
  for (let i = 0; i < dataProducts.length; i++) {
    allCards[i].addEventListener("click", () => {
      main.innerHTML = productPage;
      /*main.classList.add("main-cart");
      main.style.flexDirection = "column";*/
      /*footer.classList.add("footer-product");*/

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
    });
  }
}

