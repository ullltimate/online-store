import './index.css';
import dataProducts from './components/dataProducts';
import startPage from './components/startPage';
console.log(dataProducts);

let main = <HTMLElement>document.querySelector('.main');
main.innerHTML = startPage;
let filterCategory = <HTMLElement>document.querySelector('.filter-category');
let filterBrand = <HTMLElement>document.querySelector('.filter-brand');

let arrayCategory: string[] = [];
let arrayBrand: string[] = [];
let productsCards = <HTMLElement>document.querySelector('.products-cards');
for (var i=0; i<dataProducts.length; i++){
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


for (var i=0; i<arrayCategory.length; i++){
    let checkboxCategory = <HTMLElement>document.createElement('div');
    checkboxCategory.className = 'checkbox-line wrap item-active';
    checkboxCategory.innerHTML = 
    `<input type="checkbox" id="${arrayCategory[i]}">
    <label for="${arrayCategory[i]}">${arrayCategory[i]}</label>
    <span>(5/5)</span>`
    filterCategory.append(checkboxCategory);
    console.log(arrayCategory[i]);
}
for (var i=0; i<arrayBrand.length; i++){
    let checkboxBrand = <HTMLElement>document.createElement('div');
    checkboxBrand.className = 'checkbox-line wrap item-active';
    checkboxBrand.innerHTML = 
    `<input type="checkbox" id="${arrayBrand[i]}">
    <label for="${arrayBrand[i]}">${arrayBrand[i]}</label>
    <span>(5/5)</span>`
    filterBrand.append(checkboxBrand);
}
