import dataProducts from "./dataProducts";

const productPageLayout: string = `
<div class="wrapper">
  <p class="path-product font">STORE ></p>
  <div class="wrapper-product wrap">
    <div class="photos-product wrap">
      <div class="photos-main"></div>
      <div class="photos-other">
      </div>
    </div>
    <div class="info-product wrap">
      <div class="info-main font wrap">
        <h2 class="product-title font">iPhone 9</h2>
        <p class="product-description font">An apple mobile which is nothing like apple</p>
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
          <li class="product-rating">dataProducts.rating</li>
          <li class="product-stock">dataProducts.stock</li>
          <li class="product-brand">dataProducts.brand</li>
          <li class="product-category">dataProducts.category</li>
          <li class="product-discountPercentage">dataProducts.discountPercentage</li>
        </ul>
      </div>
    </div>
    <div class="wrapper-buttons">
      <button class="button-product btn-add font">ADD TO CART</button>
      <button class="button-product btn-buy font">BUY NOW</button>
    </div>
    <p class="cost-product font">€549.00</p>
  </div>
</div>`;

export default function productPage(): void {
  let id: string = location.pathname.slice(location.pathname.indexOf("-") + 1);
  const main = <HTMLElement>document.querySelector(".main");
  main.innerHTML = productPageLayout;

  const title = <HTMLElement>document.querySelector(".product-title");
  const description = <HTMLElement>document.querySelector(".product-description");
  const rating = <HTMLElement>document.querySelector(".product-rating");
  const stock = <HTMLElement>document.querySelector(".product-stock");
  const brand = <HTMLElement>document.querySelector(".product-brand");
  const category = <HTMLElement>document.querySelector(".product-category");
  const discount = <HTMLElement>(document.querySelector(".product-discountPercentage"));
  const path = <HTMLElement>document.querySelector(".path-product");
  const cost = <HTMLElement>document.querySelector(".cost-product");
  const main_page = <HTMLElement>document.querySelector(".photos-main");
  const other_photos_parent_block = <HTMLElement>document.querySelector(".photos-other");
  for (let i = 0; i < dataProducts.length; i++) {
    if (dataProducts[i].id === Number(id)) {
      title.innerText = dataProducts[i].title;
      description.innerText = dataProducts[i].description;
      rating.innerText = String(dataProducts[i].rating);
      stock.innerText = String(dataProducts[i].stock);
      brand.innerText = dataProducts[i].brand;
      category.innerText = dataProducts[i].category;
      discount.innerText = String(dataProducts[i].discountPercentage);
      path.innerHTML = `<a href='/'>STORE</a> > <a href='/?filter=${dataProducts[i].category}'>${dataProducts[i].category.toUpperCase()}</a> > <a href='/?filter=${dataProducts[i].brand.replace(/ /g, '_')}'>${dataProducts[i].brand.toUpperCase()}</a> > ${dataProducts[i].title.toUpperCase()}`;
      cost.innerText = `${dataProducts[i].price}`;
      main_page.style.background = `url('${dataProducts[i].thumbnail}') no-repeat`;
      main_page.style.backgroundSize = "cover";
      for (let j = 0; j < dataProducts[i].images.length; j++) {
        let imgBlock = document.createElement("div");
        imgBlock.classList.add("photo-other");
        imgBlock.style.backgroundImage = `url('${dataProducts[i].images[j]}')`;
        imgBlock.style.backgroundSize = 'cover';
        imgBlock.addEventListener("click", () => {
          main_page.style.background = `url('${dataProducts[i].images[j]}') no-repeat`;
          main_page.style.backgroundSize = "cover";
        });
        other_photos_parent_block.appendChild(imgBlock);
      }
    }
  }
 
  const btnAdd = <HTMLElement>document.querySelector(".btn-add");
  let count: number = 0;
  const countProduct = <HTMLElement>document.querySelector(".count");
  const totalCardSumma = <HTMLElement>document.querySelector(".summa");
  let summa: number = 0;
  if (localStorage.getItem("totalCard") != undefined) {
    summa = Number(localStorage.getItem("totalCard"));
    totalCardSumma.innerHTML = String(summa);
  }
  if (localStorage.getItem("count") != undefined) {
    count = Number(localStorage.getItem("count"));
    countProduct.innerHTML = String(count);
  }
  let idArrayElemAddCart: string = "";
  if (localStorage.getItem("idArrayCart") != undefined) {
    idArrayElemAddCart = String(localStorage.getItem("idArrayCart"));
  }
  if (localStorage.getItem("idArrayCart") != undefined) {
    let idArrayCartLocSor = localStorage.getItem("idArrayCart")?.split("-");
    if (idArrayCartLocSor != undefined) {
      for (let i = 0; i < idArrayCartLocSor.length; i++) {
        if (idArrayCartLocSor[i] === id) {
          btnAdd.innerHTML = "DROP FROM CART";
          btnAdd.style.background = "rgba(255, 173, 158, 1)";
        }
      }
    }
  }
  btnAdd.addEventListener("click", () => {
    btnChangeWhithAddToCart();
  });
  function btnChangeWhithAddToCart() {
    if (btnAdd.innerHTML === "ADD TO CART") {
      btnAdd.innerHTML = "DROP FROM CART";
      btnAdd.style.background = "rgba(255, 173, 158, 1)";
      count += 1;
      localStorage.setItem("count", `${count}`);
      countProduct.innerHTML = `${count}`;
      idArrayElemAddCart += `-${id}`;
      localStorage.setItem("idArrayCart", idArrayElemAddCart);
      summa += Number(cost.innerText);
      localStorage.setItem("totalCard", `${summa}`);
      totalCardSumma.innerHTML = `${summa}`;
    } else {
      btnAdd.innerHTML = "ADD TO CART";
      btnAdd.style.background = "rgba(255, 173, 158, 0.5)";
      if (localStorage.getItem(`${id}`) != null) {
        let idArrAmountCountAndSum = localStorage.getItem(`${id}`)?.split("-");
        if (idArrAmountCountAndSum != undefined) {
          count -= Number(idArrAmountCountAndSum[0]);
          localStorage.setItem("count", `${count}`);
          countProduct.innerHTML = `${count}`;
          let str = `-${id}`;
          idArrayElemAddCart = idArrayElemAddCart.replace(str, "");
          localStorage.setItem("idArrayCart", idArrayElemAddCart);
          summa -= Number(idArrAmountCountAndSum[1]);
          localStorage.setItem("totalCard", `${summa}`);
          totalCardSumma.innerHTML = `${summa}`;
        }
        localStorage.removeItem(`${id}`);
      } else {
        count -= 1;
        localStorage.setItem("count", `${count}`);
        countProduct.innerHTML = `${count}`;
        let str = `-${id}`;
        idArrayElemAddCart = idArrayElemAddCart.replace(str, "");
        localStorage.setItem("idArrayCart", idArrayElemAddCart);
        summa -= Number(cost.innerText);
        localStorage.setItem("totalCard", `${summa}`);
        totalCardSumma.innerHTML = `${summa}`;
      }
    }
  }
  let btnBuy = <HTMLElement>document.querySelector(".btn-buy");
  btnBuy.addEventListener("click", () => {
    addToCartBuyNow();
  });
  function addToCartBuyNow() {
    if (btnAdd.innerHTML === "ADD TO CART") {
      count += 1;
      localStorage.setItem("count", `${count}`);
      countProduct.innerHTML = `${count}`;
      idArrayElemAddCart += `-${id}`;
      localStorage.setItem("idArrayCart", idArrayElemAddCart);
      summa += Number(cost.innerText);
      localStorage.setItem("totalCard", `${summa}`);
      totalCardSumma.innerHTML = `${summa}`;
      window.location.href = '/cart-buynow';
      
    } else {
      window.location.href = '/cart-buynow';
    }
  }
}
