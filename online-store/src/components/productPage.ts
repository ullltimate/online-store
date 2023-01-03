import cartProduct from "./cartPage";
import dataProducts from "./dataProducts";
import { buyNow } from "./cartPage";
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
      <button class="button-product btn-add font">ADD TO CART</button>
      <button class="button-product btn-buy font">BUY NOW</button>
    </div>
    <p class="cost-product font">€549.00</p>
  </div>
</div>`;

export default function productPage(): void {
  console.log(location.pathname);
  let id: string = location.pathname.slice(location.pathname.indexOf("-") + 1);
  console.log(id);
  let main = <HTMLElement>document.querySelector(".main");
  main.innerHTML = productPageLayout;

  let title = <HTMLElement>document.querySelector(".product-title");
  let description = <HTMLElement>document.querySelector(".product-description");
  let rating = <HTMLElement>document.querySelector(".product-rating");
  let stock = <HTMLElement>document.querySelector(".product-stock");
  let brand = <HTMLElement>document.querySelector(".product-brand");
  let category = <HTMLElement>document.querySelector(".product-category");
  let discount = <HTMLElement>(
    document.querySelector(".product-discountPercentage")
  );
  let path = <HTMLElement>document.querySelector(".path-product");
  let cost = <HTMLElement>document.querySelector(".cost-product");
  let main_page = <HTMLElement>document.querySelector(".photos-main");
  let other_photos_parent_block = <HTMLElement>document.querySelector(".photos-other");
  for (let j = 0; j < dataProducts.length; j++) {
    if (dataProducts[j].id === Number(id)) {
      title.innerText = dataProducts[j].title;
      description.innerText = dataProducts[j].description;
      rating.innerText = String(dataProducts[j].rating);
      stock.innerText = String(dataProducts[j].stock);
      brand.innerText = dataProducts[j].brand;
      category.innerText = dataProducts[j].category;
      discount.innerText = String(dataProducts[j].discountPercentage);
      path.innerText = `Store > ${dataProducts[j].category} > ${dataProducts[j].brand} > ${dataProducts[j].title}`;
      cost.innerText = `${dataProducts[j].price}`;
      main_page.style.background = `url('${dataProducts[j].thumbnail}') no-repeat`;
      main_page.style.backgroundSize = "cover";
      for (let o = 0; o < dataProducts[j].images.length; o++) {
        let k = document.createElement("div");
        k.classList.add("photo-other");
        k.style.backgroundImage = `url('${dataProducts[j].images[o]}')`;
        k.style.backgroundSize = 'cover';
        k.addEventListener("click", () => {
          main_page.style.background = `url('${dataProducts[j].images[o]}')`;
        });
        other_photos_parent_block.appendChild(k);
      }
    }
  }
  //let title = <HTMLElement>document.querySelector(".product-title");
  //title.innerText = dataProducts[i].title;

  //let description = <HTMLElement>(document.querySelector(".product-description"));
  //description.innerText = dataProducts[i].description;

  //let rating = <HTMLElement>document.querySelector(".product-rating");
  //rating.innerText = String(dataProducts[i].rating);

  //let stock = <HTMLElement>document.querySelector(".product-stock");
  //stock.innerText = String(dataProducts[i].stock);

  //let brand = <HTMLElement>document.querySelector(".product-brand");
  //brand.innerText = dataProducts[i].brand;

  //let category = <HTMLElement>document.querySelector(".product-category");
  //category.innerText = dataProducts[i].category;

  //let discount = <HTMLElement>(document.querySelector(".product-discountPercentage"));
  //discount.innerText = String(dataProducts[i].discountPercentage);

  //let path = <HTMLElement>document.querySelector(".path-product");
  //path.innerText = `Store > ${dataProducts[i].category} > ${dataProducts[i].brand} > ${dataProducts[i].title}`;

  //let main_page = <HTMLElement>document.querySelector(".photos-main");
  //main_page.style.background = `url('${dataProducts[i].images[0]}') no-repeat`;
  //for (let j = 0; j < 3; j++) {
  //  let k = <HTMLElement>document.getElementsByClassName("photo-other")[j];
  //  k.style.backgroundImage = `url('${dataProducts[i].images[j]}')`;
  //  k.style.backgroundSize = "cover";
  //  k.addEventListener("click", () => {
  //    main_page.style.backgroundImage = `url('${dataProducts[i].images[j]}')`;
  //  });
  //}
  //let cost = <HTMLElement>document.querySelector(".cost-product");
  //cost.innerText = `€${dataProducts[i].price}`;

  let btnAdd = <HTMLElement>document.querySelector(".btn-add");
  let count: number = 0;
  let countProduct = <HTMLElement>document.querySelector(".count");
  let totalCardSumma = <HTMLElement>document.querySelector(".summa");
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
  console.log(localStorage.getItem("idArrayCart"));
  console.log(id);
  if (localStorage.getItem("idArrayCart") != undefined) {
    let idArrayCartLocSor = localStorage.getItem("idArrayCart")?.split("-");
    console.log(idArrayCartLocSor);
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
      cartProduct();
      buyNow();
    } else {
      cartProduct();
      buyNow();
    }
  }
}
