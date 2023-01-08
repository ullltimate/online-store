import dataProducts from "./dataProducts";
import productPage from "./productPage";

const startPageLayout: string = `<div class="wrapper">
    <section class="search-menu">
        <ul class="menu-list wrap">
            <li class="list-item">
                <button class="btn-copy button font">Copy link</button>
            </li>
            <li class="list-item">
                <button class="btn-reset button font">Reset filters</button>
            </li>
            <li class="list-item">
                <select name="select-sort" id="" class="select-sort">
                    <option value="sort-title" disabled selected>Sort options:</option>
                    <option value="price-ASC">Sort by price ASC</option>
                    <option value="price-DESC">Sort by price DESC</option>
                    <option value="raiting-ASC">Sort by rating ASC</option>
                    <option value="raiting-DESC">Sort by raiting DESC</option>
                </select>
            </li>
            <li class="list-item">
                <p class="font found">FOUND: <a>0</a></p>
            </li>
            <li class="list-item">
                <input type="search" placeholder="Search product" class="search">
            </li>
            <li class="list-item wrap">
                <div class="size-elem-small wrap">
                    <div class="small-elem"></div>
                    <div class="small-elem"></div>
                    <div class="small-elem"></div>
                    <div class="small-elem"></div>
                    <div class="small-elem"></div>
                    <div class="small-elem"></div>
                    <div class="small-elem"></div>
                    <div class="small-elem"></div>
                    <div class="small-elem"></div>
                </div>
                <div class="size-elem-big wrap active-size">
                    <div class="big-elem"></div>
                    <div class="big-elem"></div>
                    <div class="big-elem"></div>
                    <div class="big-elem"></div>
                </div>
            </li>
        </ul>
    </section>
    <section class="products-wrapper wrap">
        <div class="filters-menu">
            <div class="filter-category filters-wrap">
                <h3 class="filter-title font">
                    Category
                </h3>
            </div>
            <div class="filter-brand filters-wrap">
                <h3 class="filter-title font">
                    Brand
                </h3>
            </div>
            <div class="filters-price filters-wrap">
                <h3 class="filter-title font">
                    Price
                </h3>
                <div class="out-data wrap">
                    <div class="stock-values font wrap">
                        <div class="from-price">0</div>
                        <div class="to-price">0</div>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="20"
                        step="1"
                        value="0"
                        multiple
                        class="min-price-dot"
                    />
                    <input
                        type="range"
                        min="0"
                        max="20"
                        step="1"
                        value="20"
                        class="max-price-dot"
                    />
                </div>
            </div>
            <div class="filters-stock filters-wrap">
                <h3 class="filter-title font">
                    Stock
                </h3>
                <div class="out-data wrap">
                    <div class="stock-values font wrap">    
                        <div class="from-stock">0</div>
                        <div class="to-stock">0</div>
                    </div>   
                    <input
                        type="range"
                        min="0"
                        max="20"
                        step="1"
                        value="0"
                        multiple
                        class="min-stock-dot"
                    />
                    <input
                        type="range"
                        min="0"
                        max="20"
                        step="1"
                        value="20"
                        class="max-stock-dot"
                    />
                </div>
            </div>
        </div>
        <div class="products-cards wrap">
        </div>
        <div class="wrapper-empty-product">
            <h2 class='font'>No products found &#129402</h2>
          </div> 
    </section>
</div>`;

export default function home(): void {
  let main = <HTMLElement>document.querySelector(".main");
  main.innerHTML = startPageLayout;
  let filterCategory = <HTMLElement>document.querySelector(".filter-category");
  let filterBrand = <HTMLElement>document.querySelector(".filter-brand");

  let arrayCategory: string[] = [];
  let arrayBrand: string[] = [];
  let productsCards = <HTMLElement>document.querySelector(".products-cards");
  for (let i = 0; i < dataProducts.length; i++) {
    arrayCategory.push(dataProducts[i].category);
    arrayBrand.push(dataProducts[i].brand);

    let productsCard = <HTMLElement>document.createElement("div");
    productsCard.className = "products-card";
    productsCard.id = `${dataProducts[i].id}`;
    productsCard.dataset.price = `${dataProducts[i].price}`;
    productsCard.dataset.rating = `${dataProducts[i].rating}`;
    productsCard.innerHTML = 
        `<a href = '/product-${dataProducts[i].id}'>
          <div class="products-card-image">
              <img src="${dataProducts[i].thumbnail}" alt="" class="card-image">
          </div>
        </a>
        <div class="products-card-title wrap">
          <a href = '/product-${dataProducts[i].id}'>  
            <img src="https://i.ibb.co/b1fRcKR/icons8-100-1.png" alt="" class="card-expand-img">
          </a>
          <p class="card-title font">${dataProducts[i].title}</p>
          <img src="https://i.ibb.co/b2V2ZLR/shopping-cart-icon-196876-1.png" alt='' class="card-basket-img">
        </div>`;
    productsCards.append(productsCard);
    if (
      localStorage.getItem("idArrayCart") != "" &&
      localStorage.getItem("idArrayCart") != undefined
    ) {
      let idArrayCartLocSor = localStorage.getItem("idArrayCart")?.split("-");
      if (idArrayCartLocSor != undefined) {
        for (let j = 0; j < idArrayCartLocSor?.length; j++) {
          if (dataProducts[i].id === Number(idArrayCartLocSor[j])) {
            productsCard.innerHTML = 
            `<a href = '/product-${dataProducts[i].id}'>
              <div class="products-card-image">
                <img src="${dataProducts[i].thumbnail}" alt="" class="card-image">
              </div>
            </a>    
            <div class="products-card-title wrap">
              <a href = '/product-${dataProducts[i].id}'>  
                <img src="https://i.ibb.co/b1fRcKR/icons8-100-1.png" alt="" class="card-expand-img">
              </a>
              <p class="card-title font">${dataProducts[i].title}</p>
              <img src="https://i.ibb.co/V3mPKbP/icons8-48.png" alt='' class="card-basket-img">
            </div>`;
          }
        }
      }
    }
  }
  arrayCategory = [...new Set(arrayCategory)];

  arrayBrand = [...new Set(arrayBrand)];

  for (let i = 0; i < arrayCategory.length; i++) {
    let checkboxCategory = <HTMLElement>document.createElement("div");
    checkboxCategory.className = "checkbox-line wrap item-active";
    checkboxCategory.innerHTML = `<input type="checkbox" id="${arrayCategory[i]}">
        <label for="${arrayCategory[i]}">${arrayCategory[i]}</label>
        <span class="countFilters">(5/5)</span>`;
    filterCategory.append(checkboxCategory);
  }
  for (let i = 0; i < arrayBrand.length; i++) {
    let checkboxBrand = <HTMLElement>document.createElement("div");
    checkboxBrand.className = "checkbox-line wrap item-active";
    checkboxBrand.innerHTML = `<input type="checkbox" id="${arrayBrand[i].replace(/ /g, '_')}">
        <label for="${arrayBrand[i].replace(/ /g, '_')}">${arrayBrand[i]}</label>
        <span class="countFilters">(5/5)</span>`;
    filterBrand.append(checkboxBrand);
  }

  let copyLink = <HTMLElement>document.querySelector('.btn-copy');
  copyLink.addEventListener('click', () => {
    let link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
      if (copyLink.innerText !== 'Copied!') {
        const originalText = copyLink.innerText;
        copyLink.innerText = 'Copied!';
        setTimeout(() => {
          copyLink.innerText = originalText;
        }, 1000);
      }
    })
  })

  let btnReset = <HTMLElement>document.querySelector('.btn-reset');
  btnReset.addEventListener('click', () => {
    resetAllFilters();
  })
  function resetAllFilters() {
    searchFilter.value = '';
    filterBySearchInput();
    selectSort.value = 'sort-title';
    switchingView(sizeElemBig, sizeElemSmall);
    let filterCheckbox = document.querySelectorAll('input[type=checkbox]');
    filterCheckbox.forEach(checkbox => checkbox.removeAttribute('checked'))
    filter();
    history.replaceState( {}, '', '/');
    home();
}

  let allCards: Array<HTMLElement> = Array.from(document.querySelectorAll('.products-card'));

  if (allCards != undefined) {
    for (let i = 0; i < dataProducts.length; i++) {
        allCards[i].addEventListener("click", (e) => {
            let eventElem = <HTMLImageElement>e.target;
            if (eventElem.classList.contains('card-basket-img')){
                addToCart(eventElem, eventElem.parentElement?.parentElement?.id);
                localStorage.setItem('idArrayCart', idArrayElemAddCart);
                localStorage.setItem('count', String(count));
                localStorage.setItem('totalCard', String(summa));
            } 
        });
    }
  }

    let count: number = 0;
    let countProduct = <HTMLElement>document.querySelector('.count');
    let totalCardSumma = <HTMLElement>document.querySelector('.summa');
    let summa: number = 0;
    if(localStorage.getItem('totalCard') != undefined){
        summa = Number(localStorage.getItem('totalCard'));
        totalCardSumma.innerHTML = String(summa);
    }
    if(localStorage.getItem('count') != undefined){
        count = Number(localStorage.getItem('count'));
        countProduct.innerHTML = String(count);
    }
    let idArrayElemAddCart: string = '';
    if(localStorage.getItem('idArrayCart') != undefined){
        idArrayElemAddCart = String(localStorage.getItem('idArrayCart'));
    }

    function addToCart(elem: HTMLImageElement, id?: string){
        if (elem.src === 'https://i.ibb.co/b2V2ZLR/shopping-cart-icon-196876-1.png'){
            elem.src = "https://i.ibb.co/V3mPKbP/icons8-48.png";
            count += 1;
            countProduct.innerHTML = `${count}`;
            if (id != undefined){
                idArrayElemAddCart += `-${id}`;
                for (let i=0; i<dataProducts.length; i++){
                    if(dataProducts[i].id === Number(id)){
                        summa += dataProducts[i].price;
                        totalCardSumma.innerHTML = `${summa}`
                    }
                }
            }

        } else {
            elem.src = 'https://i.ibb.co/b2V2ZLR/shopping-cart-icon-196876-1.png';
            if(localStorage.getItem(`${id}`) != null){
                let idArrAmountCountAndSum = localStorage.getItem(`${id}`)?.split('-');
                if(idArrAmountCountAndSum != undefined){
                    count -= Number(idArrAmountCountAndSum[0]);
                    countProduct.innerHTML = `${count}`;
                    if (id != undefined){
                        let str = `-${id}`;
                        idArrayElemAddCart = idArrayElemAddCart.replace(str, '');
                        for (let i=0; i<dataProducts.length; i++){
                            if(dataProducts[i].id === Number(id)){
                                summa -= Number(idArrAmountCountAndSum[1]);
                                totalCardSumma.innerHTML = `${summa}`;
                            }
                        }
                    }
                }
                localStorage.removeItem(`${id}`);
            } else {
                count -= 1;
                countProduct.innerHTML = `${count}`;
                if (id != undefined){
                    let str = `-${id}`;
                    idArrayElemAddCart = idArrayElemAddCart.replace(str, '');
                    for (let i=0; i<dataProducts.length; i++){
                        if(dataProducts[i].id === Number(id)){
                            summa -= dataProducts[i].price;
                            totalCardSumma.innerHTML = `${summa}`;
                        }
                    }
                }
            }
        }
    }
    
    let sizeElemSmall = <HTMLElement>document.querySelector('.size-elem-small');
    let sizeElemBig = <HTMLElement>document.querySelector('.size-elem-big');
    let cardImageArray: Array<HTMLImageElement> = Array.from(document.querySelectorAll('.card-image'));
    let cardExpandImgArray: Array<HTMLElement> = Array.from(document.querySelectorAll('.card-expand-img'));
    let cardBasketImgArray: Array<HTMLElement> = Array.from(document.querySelectorAll('.card-basket-img'));
    let cardTitleArray: Array<HTMLElement> = Array.from(document.querySelectorAll('.card-title'));
    function switchingView(addElemActive: HTMLElement, removeElemActive: HTMLElement){
        if(addElemActive.classList.contains('active-size') === false){
            addElemActive.classList.add('active-size');
            removeElemActive.classList.remove('active-size');
        }
        for (let i=0; i<cardImageArray.length; i++){
            if(addElemActive === sizeElemSmall){
                cardImageArray[i].style.width = '200px';
                cardImageArray[i].style.height = '100px';
                cardExpandImgArray[i].style.maxWidth = '20px';
                cardBasketImgArray[i].style.maxHeight = '20px';
                cardTitleArray[i].style.fontSize = '12px';
            }else{
                cardImageArray[i].style.width = '275px';
                cardImageArray[i].style.height = '175px';
                cardExpandImgArray[i].style.maxWidth = '35px';
                cardBasketImgArray[i].style.maxHeight = '35px';
                cardTitleArray[i].style.fontSize = '16px';    
            }
        }
    }
    
  sizeElemSmall.addEventListener("click", () => {
    updateUrl('size', 'small')
    switchingView(sizeElemSmall, sizeElemBig);
  });
  sizeElemBig.addEventListener("click", () => {
    updateUrl('size', 'big')
    switchingView(sizeElemBig, sizeElemSmall);
  });

  let selectSort = <HTMLSelectElement>document.querySelector(".select-sort");
  selectSort.onchange = function () {
    if (selectSort.value === "price-ASC") {
      sortPriceASC();
    }
    if (selectSort.value === "price-DESC") {
      sortPriceDESC();
    }
    if (selectSort.value === "raiting-ASC") {
      sortRaitingASC();
    }
    if (selectSort.value === "raiting-DESC") {
      sortRaitingDESC();
    }
    updateUrl('sort', selectSort.value)
  };

  function sortPriceASC() {
    let productsCardsInSort = <HTMLElement>document.querySelector('.products-cards');
    let items: Array<HTMLElement> = Array.from(document.querySelectorAll('.products-card'));
    items.sort(function (a, b) {
      return Number(a.dataset.price) - Number(b.dataset.price);
    });
    for(let i=0; i<items.length; i++){
      productsCardsInSort.append(items[i]);
    }
  }
  function sortPriceDESC() {
    let productsCardsInSort = <HTMLElement>document.querySelector('.products-cards');
    let items: Array<HTMLElement> = Array.from(document.querySelectorAll('.products-card'));
    items.sort(function (a, b) {
      return Number(b.dataset.price) - Number(a.dataset.price);
    });
    for(let i=0; i<items.length; i++){
      productsCardsInSort.append(items[i]);
    }
  }
  function sortRaitingASC() {
    let productsCardsInSort = <HTMLElement>document.querySelector('.products-cards');
    let items: Array<HTMLElement> = Array.from(document.querySelectorAll('.products-card'));
    items.sort(function (a, b) {
      return Number(a.dataset.rating) - Number(b.dataset.rating);
    });
    for(let i=0; i<items.length; i++){
      productsCardsInSort.append(items[i]);
    }
  }
  function sortRaitingDESC() {
    let productsCardsInSort = <HTMLElement>document.querySelector('.products-cards');
    let items: Array<HTMLElement> = Array.from(document.querySelectorAll('.products-card'));
    items.sort(function (a, b) {
      return Number(b.dataset.rating) - Number(a.dataset.rating);
    });
    for(let i=0; i<items.length; i++){
      productsCardsInSort.append(items[i]);
    }
  }

let foundProducts = <HTMLElement>document.querySelector(".found");
foundProducts.innerText=`Found: 21`

function startSPanForCheckbox() {
  let allSpan: Array<HTMLElement> = Array.from(document.querySelectorAll(".countFilters"));
  for (let j = 0; j < allSpan.length; j++) {
    let currentCountF = 0;
    let label = <HTMLElement>allSpan[j].previousSibling;
    let check = <HTMLElement>label.previousSibling;
    for (let i = 0; i < dataProducts.length; i++) {
      if (dataProducts[i].category == check.innerText) {
        currentCountF++;
      }
    }
    allSpan[j].innerText = `(${currentCountF}/${currentCountF})`;
  }
  for (let j = 5; j < allSpan.length; j++) {
    let currentCountF = 0;
    let label = <HTMLElement>allSpan[j].previousSibling;
    let check = <HTMLElement>label.previousSibling;
    for (let i = 0; i < dataProducts.length; i++) {
      if (dataProducts[i].brand == check.innerText) {
        currentCountF++;
      }
    }
    allSpan[j].innerText = `(${currentCountF}/${currentCountF})`;
  }
}

let checkboxesP: Array<HTMLElement> = Array.from(document.querySelectorAll(`.checkbox-line`));
let checkboxes: Array<HTMLInputElement> = Array.from(document.querySelectorAll(`input[type="checkbox"]`));

function changeSpanForCheckbox(currentSpan:any, filterArray:string []) {
  let allSpan: Array<HTMLElement> = Array.from(document.querySelectorAll(".countFilters"));
  let brands = [];
  let categories = [];
  let prices = [];
  let stocks = [];

  for (let i = 0; i < dataProducts.length; i++) {
    if (filterArray.includes(dataProducts[i].title)) {
      brands.push(dataProducts[i].brand);
      categories.push(dataProducts[i].category);
      prices.push(dataProducts[i].price);
      stocks.push(dataProducts[i].stock);
    }
  }
  let k = 0;
  for (let i = 0; i < allSpan.length; i++) {
    let startCount = allSpan[i].innerText;
    let silceStartCount = startCount.slice(2, 5);
    allSpan[i].innerText = `(${k}` + silceStartCount;
  }

  let countForSpanB = brands.reduce<Record<string, number>>(function (acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  let countForSpanC = categories.reduce<Record<string, number>>(function (acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  for (let i = 0; i < allSpan.length; i++) {
    let startCount = allSpan[i].innerText;
    let silceStartCount = startCount.slice(2, 5);
    let label = <HTMLElement>allSpan[i].previousSibling;
    let check = <HTMLElement>label.previousSibling;
    if (brands.indexOf(check.innerText) != -1) {
      if (allSpan[i] != currentSpan) {
        allSpan[i].innerText =
          `(${countForSpanB[check.innerText]}` + silceStartCount;
        if (allSpan[i].innerText == "(undefined" + silceStartCount) {
          allSpan[i].innerText =
            `(${silceStartCount.slice(1, 2)}` + silceStartCount;
        }
      } else {
        allSpan[i].innerText =
          `(${silceStartCount.slice(1, 2)}` + silceStartCount;
      }
    }
  }
  for (let i = 0; i < allSpan.length; i++) {
    let startCount = allSpan[i].innerText;
    let silceStartCount = startCount.slice(2, 5);
    let label = <HTMLElement>allSpan[i].previousSibling;
    let check = <HTMLElement>label.previousSibling;
    if (categories.indexOf(check.innerText) != -1) {
      if (allSpan[i] != currentSpan) {
        allSpan[i].innerText =
          `(${countForSpanC[check.innerText]}` + silceStartCount;
        if (allSpan[i].innerText == "(undefined" + silceStartCount) {
          allSpan[i].innerText =
            `(${silceStartCount.slice(1, 2)}` + silceStartCount;
        }
      } else {
        allSpan[i].innerText =
          `(${silceStartCount.slice(1, 2)}` + silceStartCount;
      }
    }
  }

  let priceMinValue = <HTMLInputElement>document.querySelector(".from-price");
  let priceMaxValue = <HTMLInputElement>document.querySelector(".to-price");
  let stockMinValue = <HTMLInputElement>document.querySelector(".from-stock");
  let stockMaxValue = <HTMLInputElement>document.querySelector(".to-stock");

  let priceMin = <HTMLInputElement>document.querySelector(".min-price-dot");
  let priceMax = <HTMLInputElement>document.querySelector(".max-price-dot");
  let stockMin = <HTMLInputElement>document.querySelector(".min-stock-dot");
  let stockMax = <HTMLInputElement>document.querySelector(".max-stock-dot");

  if (emptyPage !=null && emptyPage.style.display == "flex") {
    priceMinValue.innerText = String(Math.min.apply(null, priceRange));
    priceMaxValue.innerText = String(Math.max.apply(null, priceRange));
    stockMinValue.innerText = String(Math.min.apply(null, stockRange));
    stockMaxValue.innerText = String(Math.max.apply(null, stockRange));
  } else {
    priceMinValue.innerText = String(Math.min.apply(null, prices));
    priceMaxValue.innerText = String(Math.max.apply(null, prices));
    stockMinValue.innerText = String(Math.min.apply(null, stocks));
    stockMaxValue.innerText = String(Math.max.apply(null, stocks));
  }
  priceMin.value = String(priceRange.indexOf(Number(priceMinValue.innerText)));
  priceMax.value = String(priceRange.indexOf(Number(priceMaxValue.innerText)));
  stockMin.value = String(stockRange.indexOf(Number(stockMinValue.innerText)));
  stockMax.value = String(stockRange.indexOf(Number(stockMaxValue.innerText)));
}

startSPanForCheckbox();
let p_found = <HTMLElement>document.querySelector(".found");
let counter_found = 21;
for (let i = 0; i < checkboxesP.length; i++) {
  checkboxesP[i].addEventListener("click", (e) => {
    let eventElem = <HTMLInputElement>e.target;
    let currentSpan = <HTMLElement>checkboxesP[i].lastElementChild;
    if (eventElem.nodeName == "INPUT") {
      eventElem.addEventListener("change", (eventElem)=>{
        filter()});
      changeSpanForCheckbox(currentSpan, mathcedFinal);
    }
  });
}

let cards: Array<HTMLElement> = Array.from(document.querySelectorAll(".products-card")),
  cardTitle:string[] = [],
  checkedArr:Array<HTMLInputElement> = [];

for (let i = 0; i < cards.length; i++) {
  cardTitle[i] = cards[i].innerText.trim();
}
let checkboxC:string[] = [];
let checkboxB:string[] = [];
let checkedArrId: string[] = [];

function filter() {
  emptyPage.style.display = "none";
  productsCards.style.display="flex"; 
  checkboxC.length = 0;
  checkboxB.length = 0;
  checkedArrId.length = 0;
  checkedArr = checkboxes.filter((item) => item.checked);
  let filterParams:string = '';
  for (let i = 0; i < checkedArr.length; i++) {
    checkedArrId[i] = checkedArr[i].id.replace(/_/g, ' ');
    filterParams += (i === 0) ? checkedArrId[i] : `+${checkedArrId[i]}`;
    filterParams = filterParams.replace(/ /g, '_')
  }
  updateUrl('filter', filterParams);
  counter_found = 0;
  for (let i = 0; i < cards.length; i++) {
    if (checkedArrId.includes(dataProducts[i].brand)) {
      checkboxB.push(dataProducts[i].title);
    } else {
      if (checkboxB.includes(dataProducts[i].title)) {
        checkboxB.splice(checkboxB.indexOf(dataProducts[i].title), 1);
      }
    }
    if (checkedArrId.includes(dataProducts[i].category)) {
      checkboxC.push(dataProducts[i].title);
    } else {
      if (checkboxC.includes(dataProducts[i].title)) {
        checkboxC.splice(checkboxC.indexOf(dataProducts[i].title), 1);
      }
    }
  }
  checkAllFilters(resultSearch, checkboxC, checkboxB, rangeCarts);
}

let emptyPage = <HTMLElement>document.querySelector(".wrapper-empty-product");
emptyPage.style.display="none";
let searchFilter = <HTMLInputElement>document.querySelector(".search");
let resultSearch:string[] = [];
let textSearch:string = "";

function filterBySearchInput() {
  emptyPage.style.display = "none";
  productsCards.style.display="flex"; 
  resultSearch.length = 0;
  textSearch = searchFilter.value.toLowerCase();
  for (let i = 0; i < dataProducts.length; i++) {
    let currentCard: { [index: string]: any } = dataProducts[i];
    for (let key in currentCard) {
      if (
        currentCard.hasOwnProperty(key) &&
        key != "id" &&
        key != "thumbnail" &&
        key != "images"
      ) {
        if (currentCard[key].toString().toLowerCase().includes(textSearch)) {
          resultSearch.push(dataProducts[i].title);
          break;
        }
      }
    }
  }
  updateUrl('search', textSearch);
  
  checkAllFilters(resultSearch, checkboxC, checkboxB, rangeCarts);
  if(textSearch!=""&&resultSearch.length==0){
    emptyPage.style.display="flex";
    productsCards.style.display="none";  
  }
  changeSpanForCheckbox(0, mathcedFinal);
}
searchFilter.addEventListener("input", () => {
  filterBySearchInput();
});

let priceRange:number[] = [];
let stockRange:number[] = [];
for (let i = 0; i < dataProducts.length; i++) {
  priceRange.push(dataProducts[i].price);
  stockRange.push(dataProducts[i].stock);
}

let priceMinValue = <HTMLInputElement>document.querySelector(".from-price");
let priceMaxValue = <HTMLInputElement>document.querySelector(".to-price");
let stockMinValue = <HTMLInputElement>document.querySelector(".from-stock");
let stockMaxValue = <HTMLInputElement>document.querySelector(".to-stock");

let priceMin = <HTMLInputElement>document.querySelector(".min-price-dot");
let priceMax = <HTMLInputElement>document.querySelector(".max-price-dot");
let stockMin = <HTMLInputElement>document.querySelector(".min-stock-dot");
let stockMax = <HTMLInputElement>document.querySelector(".max-stock-dot");

priceMinValue.innerText = String(Math.min.apply(null, priceRange));
priceMaxValue.innerText = String(Math.max.apply(null, priceRange));
stockMinValue.innerText = String(Math.min.apply(null, stockRange));
stockMaxValue.innerText = String(Math.max.apply(null, stockRange));

priceRange.sort(function (a, b) {
  return a - b;
});

stockRange.sort(function (a, b) {
  return a - b;
});

let rangeCarts:string[] = [];

function priceRangeFilter(toInnerText:HTMLElement, arrayRange:number[], innerText:HTMLInputElement) {
  rangeCarts.length = 0;
  counter_found = 0;
  let minP = Number(priceRange[Number(priceMin.value)]);
  let maxP = Number(priceRange[Number(priceMax.value)]);
  let minS = Number(stockRange[Number(stockMin.value)]);
  let maxS = Number(stockRange[Number(stockMax.value)]);
  let filtValuesP = priceRange.filter((item) => item >= minP && item <= maxP);
  let filtValuesS = stockRange.filter((item) => item >= minS && item <= maxS);

  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < filtValuesP.length; j++) {
      if (
        filtValuesP.includes(dataProducts[i].price) &&
        filtValuesS.includes(dataProducts[i].stock)
      ) {
        cards[cardTitle.indexOf(dataProducts[i].title)].style.display = "block";
        counter_found++;
        rangeCarts.push(
          cards[cardTitle.indexOf(dataProducts[i].title)].innerText
        );
        break;
      }
      cards[cardTitle.indexOf(dataProducts[i].title)].style.display = "none";
    }
  }
  const result = String(arrayRange[Number(innerText.value)])
  toInnerText.innerText = result;
  p_found.innerText = `Found: ${counter_found}`;
  checkAllFilters(resultSearch, checkboxC, checkboxB, rangeCarts);
  return { minP, maxP, minS, maxS, result }
  
}

priceMin.addEventListener("change", () => {
  let {maxP, result} = priceRangeFilter(priceMinValue, priceRange, priceMin);
  updateUrl('price', `${result}-${maxP}`);
});

priceMax.addEventListener("change", () => {
  let {minP, result} = priceRangeFilter(priceMaxValue, priceRange, priceMax);
  updateUrl('price', `${minP}-${result}`);
});

stockMin.addEventListener("change", () => {
  priceRangeFilter(stockMinValue, stockRange, stockMin);
});

stockMax.addEventListener("change", () => {
  let {minS, result} = priceRangeFilter(stockMaxValue, stockRange, stockMax);
  updateUrl('stock', `${minS}-${result}`);
});

let mathcedFinal:string[] = [];
function checkAllFilters(resultSearch:string[], checkboxC:string[], checkboxB:string[], rangeFilter:string[]) {
  if (checkedArr.length == 0 && textSearch == "" && rangeFilter.length == 0) {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
    }
    priceMinValue.innerText = String(Math.min.apply(null, priceRange));
    priceMaxValue.innerText = String(Math.max.apply(null, priceRange));
    stockMinValue.innerText = String(Math.min.apply(null, stockRange));
    stockMaxValue.innerText = String(Math.max.apply(null, stockRange));

    priceMin.value = String(priceRange.indexOf(Number(priceMinValue.innerText)));
    priceMax.value = String(priceRange.indexOf(Number(priceMaxValue.innerText)));
    stockMin.value = String(stockRange.indexOf(Number(stockMinValue.innerText)));
    stockMax.value = String(stockRange.indexOf(Number(stockMaxValue.innerText)));
    startSPanForCheckbox();
    p_found.innerText = `Found: 21`;
  } else {
    if (resultSearch.length == 0 && searchFilter.value=="") {
      resultSearch = cardTitle;
    }
    if (checkboxC.length == 0) {
      checkboxC = cardTitle;
    }
    if (checkboxB.length == 0) {
      checkboxB = cardTitle;
    }
    if (rangeFilter.length == 0) {
      rangeFilter = cardTitle;
    }
    let matched1 = resultSearch.filter((el) => rangeFilter.indexOf(el) > -1);
    let matched2 = checkboxB.filter((el) => checkboxC.indexOf(el) > -1);
    mathcedFinal = matched1.filter((el) => matched2.indexOf(el) > -1);
    changeSpanForCheckbox(0, mathcedFinal);
    if (mathcedFinal.length == 0) {
      emptyPage.style.display = "flex";
      productsCards.style.display="none"; 
      p_found.innerText = `Found: 0`;
      priceMinValue.innerText = String(Math.min.apply(null, priceRange));
      priceMaxValue.innerText = String(Math.max.apply(null, priceRange));
      stockMinValue.innerText = String(Math.min.apply(null, stockRange));
      stockMaxValue.innerText = String(Math.max.apply(null, stockRange));

      priceMin.value = String(priceRange.indexOf(Number(priceMinValue.innerText)));
      priceMax.value = String(priceRange.indexOf(Number(priceMaxValue.innerText)));
      stockMin.value = String(stockRange.indexOf(Number(stockMinValue.innerText)));
      stockMax.value = String(stockRange.indexOf(Number(stockMaxValue.innerText)));
    } else {
      emptyPage.style.display = "none";
      productsCards.style.display="flex"; 
      for (let i = 0; i < cards.length; i++) {
        if (mathcedFinal.includes(cards[i].innerText.trim())) {
          cards[i].style.display = "block";
        } else {
          cards[i].style.display = "none";
        }
      }
      p_found.innerText = `Found: ${mathcedFinal.length}`;
    }
  }
}

function updateUrl(query: string, params: string) {
  const url = new URL(location.href);
  url.searchParams.set(query, params);
  if (!params) url.searchParams.delete(query);
  history.replaceState( {}, '', url);
}

// function getQueryParamsByName(name: string) {
//   const url = new URL(location.href);
//   let params = url.searchParams.get(name);
//   return params
// }

const sortByQueryParams= () => {
  const getAllQueryParams = (url: string) => {
    const paramArr = url.slice(url.indexOf('?') + 1).split('&');
    const params: { [index: string]: any } = {};
    paramArr.map(param => {
      const [key, val] = param.split('=');
      params[key] = decodeURIComponent(val);
    })
    return params;
  }
  const params = getAllQueryParams(location.search)
  for (let key in params) {
    if (key === 'sort') {
      if (params[key].toLowerCase() === 'price-asc') {
        selectSort.value = "price-ASC";
        sortPriceASC();
      }
      if (params[key].toLowerCase() === 'price-desc') {
        selectSort.value = "price-DESC";
        sortPriceDESC();
      }
      if (params[key].toLowerCase() === 'raiting-asc') {
        selectSort.value = "raiting-ASC";
        sortRaitingASC();
      }
      if (params[key].toLowerCase() === 'raiting-desc') {
        selectSort.value = "raiting-DESC";
        sortRaitingDESC();
      }
    }
    if (key === 'search' && params[key]) {
        searchFilter.value = params[key].toLowerCase();
        filterBySearchInput();
    }
    if (key === 'size') {
      params[key].toLowerCase() == 'big'
      ? switchingView(sizeElemBig, sizeElemSmall) 
      : switchingView(sizeElemSmall, sizeElemBig);
    }
    if (key === 'filter') {
      const filterParams = [...params[key].split('+')];
      for (let filterId of filterParams) {
        filterId = filterId;
        const filterCheckbox = document.querySelector(`#${filterId}`);
        filterCheckbox?.setAttribute('checked', 'true');
      }
      filter();     
    }
    if (key === 'price') {
      const priceParams= [...params[key].split('-')];
      const indexMin:string = String(priceRange.indexOf(+priceParams[0]));
      const indexMax:string = String(priceRange.indexOf(+priceParams[1]));
      priceMin.value = indexMin;
      priceMax.value = indexMax;
      priceRangeFilter(priceMinValue, priceRange, priceMin)
      priceRangeFilter(priceMaxValue, priceRange, priceMax)
    }
    if (key === 'stock') {
      const stockParams = [...params[key].split('-')];
      const indexMin:string = String(stockRange.indexOf(+stockParams[0]));
      const indexMax:string = String(stockRange.indexOf(+stockParams[1]));
      stockMin.value = indexMin;
      stockMax.value = indexMax;
      priceRangeFilter(stockMinValue, stockRange, stockMin)
      priceRangeFilter(stockMaxValue, stockRange, stockMax)
    }
  }
  let handleLocation = () => { 
    window.addEventListener('popstate', handleLocation);
    window.addEventListener('DOMContentLoaded', handleLocation);
  }; 
  handleLocation();
}
sortByQueryParams();
}