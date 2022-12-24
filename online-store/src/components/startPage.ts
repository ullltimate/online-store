import dataProducts from './dataProducts';
import productPage from "./productPage";

const startPageLayout: string = 
`<div class="wrapper">
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
                <p class="font">FOUND: <a>0</a></p>
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
                        max="17"
                        step="1"
                        value="0"
                        multiple
                    />
                    <input
                        type="range"
                        min="0"
                        max="17"
                        step="1"
                        value="17"
                        class="input-max"
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
                        max="17"
                        step="1"
                        value="0"
                        multiple
                    />
                    <input
                        type="range"
                        min="0"
                        max="17"
                        step="1"
                        value="17"
                        class="input-max"
                    />
                </div>
            </div>
        </div>
        <div class="products-cards wrap"> 
        </div>
    </section>
</div>`


export default function home(): void{
    let main = <HTMLElement>document.querySelector('.main');
    main.innerHTML = startPageLayout;
    let filterCategory = <HTMLElement>document.querySelector('.filter-category');
    let filterBrand = <HTMLElement>document.querySelector('.filter-brand');

    let arrayCategory: string[] = [];
    let arrayBrand: string[] = [];
    let productsCards = <HTMLElement>document.querySelector('.products-cards');
    for (let i=0; i<dataProducts.length; i++){

        arrayCategory.push(dataProducts[i].category);
        arrayBrand.push(dataProducts[i].brand);

        let productsCard = <HTMLElement>document.createElement('div')
        productsCard.className = 'products-card';
        productsCard.id = `${dataProducts[i].id}`
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
        if (localStorage.getItem('idArrayCart') != '' && localStorage.getItem('idArrayCart') != undefined){
            let idArrayCartLocSor = localStorage.getItem('idArrayCart')?.split('-');
            if(idArrayCartLocSor != undefined){
                for (let j=0; j<idArrayCartLocSor?.length; j++){
                    if(dataProducts[i].id === Number(idArrayCartLocSor[j])){
                        productsCard.innerHTML = 
                                `<div class="products-card-image">
                                    <img src="${dataProducts[i].thumbnail}" alt="" class="card-image">
                                </div>
                                <div class="products-card-title wrap">
                                    <img src="https://i.ibb.co/b1fRcKR/icons8-100-1.png" alt="" class="card-expand-img">
                                    <p class="card-title font">${dataProducts[i].title}</p>
                                    <img src="${localStorage.getItem('basketSrc')}" alt='' class="card-basket-img">
                                </div>`
                    }
                }
            }
        }
    }
    arrayCategory = [...new Set(arrayCategory)];

    arrayBrand = [...new Set(arrayBrand)];



    for (let i=0; i<arrayCategory.length; i++){
        let checkboxCategory = <HTMLElement>document.createElement('div');
        checkboxCategory.className = 'checkbox-line wrap item-active';
        checkboxCategory.innerHTML = 
        `<input type="checkbox" id="${arrayCategory[i]}">
        <label for="${arrayCategory[i]}">${arrayCategory[i]}</label>
        <span>(5/5)</span>`
        filterCategory.append(checkboxCategory);

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

    let allCards: HTMLCollection = productsCards.children;

    if (allCards != undefined) {
    for (let i = 0; i < dataProducts.length; i++) {
        allCards[i].addEventListener("click", (e) => {
            let eventElem = <HTMLImageElement>e.target;
            if (eventElem.classList.contains('card-basket-img')){
                addToCart(eventElem, eventElem.parentElement?.parentElement?.id);
                localStorage.setItem('idArrayCart', idArrayElemAddCart);
                localStorage.setItem('count', String(count));
                localStorage.setItem('totalCard', String(summa));
            } else {
                productPage(i, allCards[i].id);
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
            localStorage.setItem('basketSrc', elem.src);
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
    sizeElemSmall.addEventListener('click', () => {
        switchingView(sizeElemSmall, sizeElemBig)
    })
    sizeElemBig.addEventListener('click', () => {
        switchingView(sizeElemBig, sizeElemSmall)
    })

    let selectSort = <HTMLSelectElement>document.querySelector('.select-sort');
    selectSort.onchange = function(){
        if (selectSort.value === 'price-ASC'){
            sortPriceASC();
        }
        if (selectSort.value === 'price-DESC'){
            sortPriceDESC();
        }
        if (selectSort.value === 'raiting-ASC'){
            sortRaitingASC();
        }
        if (selectSort.value === 'raiting-DESC'){
            sortRaitingDESC()
        }
    }
    function switchingViewBySort(){
        for(let i=0; i<dataProducts.length; i++){
            cardImageArray[i].src = `${dataProducts[i].thumbnail}`;
            cardTitleArray[i].innerText = `${dataProducts[i].title}`;
        }
    }
    function sortPriceASC(){
        dataProducts.sort(function(a,b){return a.price - b.price});
        switchingViewBySort();
    }
    function sortPriceDESC(){
        dataProducts.sort(function(a,b){return b.price - a.price});
        switchingViewBySort();
    }
    function sortRaitingASC(){
        dataProducts.sort(function(a,b){return a.rating - b.rating});
        switchingViewBySort();
    }
    function sortRaitingDESC(){
        dataProducts.sort(function(a,b){return b.rating - a.rating});
        switchingViewBySort();
    }  

}