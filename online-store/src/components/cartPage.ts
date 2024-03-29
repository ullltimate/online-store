import dataProducts from "./dataProducts";
import productPage from "./productPage";
const cartPageLayout: string = `<div class="wrapper">
    <div class="modal-background">
      <div class="modal-window">
        <img class="modal-close" src="https://i.ibb.co/q70WLs6/close.png">
        <div class="modal-info">
          <div class="modal-card">
            <p>Credit card details</p>
            <div class="credit-card">
              <div class="credit-card-line"></div>
                <div class="credit-card-number">
                  <div class="credit-card-bg">
                    <img src="https://i.ibb.co/TLqbk79/default-card.png" />
                  </div>
                  <p class="input-err">Err</p>
                  <input type="number" placeholder="Card number" onkeypress="if(this.value.length==16) return false;" class="cardNumber validCheckCard"/>
                </div>
                <div class="credit-card-private-info">
                  <ul>
                    <li>
                      <p>Valid:</p>
                      <input type="text" placeholder="Valid thru" onkeypress="if(this.value.length==5) return false;" class="cardDate validCheckCard"/>
                    </li>
                    <li>
                      <p>CVV:</p>
                      <input type="number" placeholder="Code" onkeypress="if(this.value.length==3) return false;" class="cardCVV validCheckCard"/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="modal-personal">
              <p>Personal details</p>
              <div class="personal-input-err"><p class="input-err">Err</p><input type="text" placeholder="Name" class="cardName validCheck"/></div>
              <div class="personal-input-err"><p class="input-err">Err</p><input type="tel" placeholder="Phone number" class="cardPhone validCheck"/></div>
              <div class="personal-input-err"><p class="input-err">Err</p><input type="text" placeholder="Delivery address" class="cardAddress validCheck"/></div>
              <div class="personal-input-err"><p class="input-err">Err</p><input type="email" placeholder="E-mail" class="cardEmail validCheck"/></div>
            </div>
          </div>
          <button class="confirmButton">Confirm</button>
        </div>
      </div>
      <div class="cart-wrapper wrap">
        <div class="products-cart">
          <div class="products-header wrap font">
            <h2>Products in cart</h2>
            <p>ITEMS: <input type="number" value=1 class="itemsInput"></p>
            <div><a>PAGE:</a><a class="prev-page">&lt</a> <a class="current-page">1</a> <a class="next-page">&gt</a></div>
          </div>
          <div class="products-cart-wrapper">
            
          </div>
        </div>
        <div class="summary-cart font wrap">
          <h3>Summary</h3>
          <div class="summary-total wrap">
            <ul>
              <li>Products:</li>
              <li>Total:</li>
              <li>Discounted Total:</li>
            </ul>
            <ul>
              <li class="summary-count">0</li>
              <li class="summary-total-summa">€0</li>
              <li class="summary-total-summa-discount">0</li>
            </ul>
          </div>
          <input type="text" class="search-promo" placeholder="Enter promo code" />
          <p class="promo font">Promo for Test: 'RS', 'EPM'</p>
          <button class="toModal">Buy now</button>
        </div>
      </div> 
</div>`;
const cartPageLayoutEmpty: string = `<div class="wrapper">
  <h2 class='empty-cart header-text font'>Cart is Empty &#129402</h2>
</div>`;

export default function cartProduct(): void {
  let path = window.location.pathname;
  let main = <HTMLElement>document.querySelector(".main");
  if (localStorage.getItem("count") === null || localStorage.getItem("count") === "0") {
    main.innerHTML = cartPageLayoutEmpty;
  } else {
    main.innerHTML = cartPageLayout;
    if (path === '/cart-buynow'){
      buyNow();
    }
    let point: number = 0;
    const summaryCount = <HTMLElement>document.querySelector(".summary-count");
    const summaryTotalSumma = <HTMLElement>(document.querySelector(".summary-total-summa"));
    summaryCount.innerHTML = `${localStorage.getItem("count")}`;
    summaryTotalSumma.innerHTML = `${localStorage.getItem("totalCard")}`;
    const countProduct = <HTMLElement>document.querySelector(".count");
    const totalCardSumma = <HTMLElement>document.querySelector(".summa");
    countProduct.innerHTML = `${localStorage.getItem("count")}`;
    totalCardSumma.innerHTML = `${localStorage.getItem("totalCard")}`;

    let idArrayCartLocSor = localStorage.getItem("idArrayCart")?.split("-");
    const productsCartWrap = <HTMLElement>(document.querySelector(".products-cart-wrapper"));
    for (let i = 0; i < dataProducts.length; i++) {
      if (idArrayCartLocSor != undefined) {
        for (let j = 0; j < idArrayCartLocSor.length; j++) {
          if (dataProducts[i].id === Number(idArrayCartLocSor[j])) {
            if (localStorage.getItem(`${dataProducts[i].id}`) != null) {
              let idArrAmountCountAndSum = localStorage.getItem(`${dataProducts[i].id}`)?.split("-");
              if (idArrAmountCountAndSum != undefined) {
                let cardCart = <HTMLElement>document.createElement("div");
                cardCart.className = "card-cart wrap";
                cardCart.id = `${dataProducts[i].id}`;
                cardCart.innerHTML = `<p class="font currentNumber">${++point}</p>
                <a href='/product-${dataProducts[i].id}'>
                  <img class="card-cart-photo" src="${dataProducts[i].thumbnail}" alt="">
                </a>
                <div class="card-cart-info wrap">
                  <p class="header-text font">${dataProducts[i].title}</p>
                  <div class="cart-info-description-and-count wrap">
                    <p class="cart-info-desc font">${
                      dataProducts[i].description
                    }</p>
                    <div class="cart-info-count">
                      <p class="font">STOCK: <a class='stock-amount'>${
                        dataProducts[i].stock
                      }</a></p>
                      <div class="cart-info-current-count wrap">
                        <div class="round-sign sign-add wrap">+</div>
                        <p class="font sign-count">${
                          idArrAmountCountAndSum[0]
                        }</p>
                        <div class="round-sign sign-remove wrap">-</div>
                      </div>
                    </div>
                  </div>
                  <div class="cart-info-rating-discount-cost wrap">
                    <div class="cart-info-rating-discount wrap">
                      <ul class="font">
                        <li>Rating: </li>
                        <li>Discount: </li>
                      </ul>
                      <ul class="font">
                        <li>${dataProducts[i].rating}</li>
                        <li>${dataProducts[i].discountPercentage}</li>
                      </ul>
                    </div>
                    <p class='count-summa'>${idArrAmountCountAndSum[1]}</p>
                  </div>
                </div>`;
                productsCartWrap?.append(cardCart);
              }
            } else {
              let cardCart = <HTMLElement>document.createElement("div");
              cardCart.className = "card-cart wrap";
              cardCart.id = `${dataProducts[i].id}`;
              cardCart.innerHTML = `<p class="font currentNumber">${++point}</p>
              <a href='/product-${dataProducts[i].id}'>
                <img class="card-cart-photo" src="${dataProducts[i].thumbnail}" alt="">
              </a>
              <div class="card-cart-info wrap">
                <p class="header-text font">${dataProducts[i].title}</p>
                <div class="cart-info-description-and-count wrap">
                  <p class="cart-info-desc font">${
                    dataProducts[i].description
                  }</p>
                  <div class="cart-info-count">
                    <p class="font">STOCK: <a class='stock-amount'>${
                      dataProducts[i].stock
                    }</a></p>
                    <div class="cart-info-current-count wrap">
                      <div class="round-sign sign-add wrap">+</div>
                      <p class="font sign-count">1</p>
                      <div class="round-sign sign-remove wrap">-</div>
                    </div>
                  </div>
                </div>
                <div class="cart-info-rating-discount-cost wrap">
                  <div class="cart-info-rating-discount wrap">
                    <ul class="font">
                      <li>Rating: </li>
                      <li>Discount: </li>
                    </ul>
                    <ul class="font">
                      <li>${dataProducts[i].rating}</li>
                      <li>${dataProducts[i].discountPercentage}</li>
                    </ul>
                  </div>
                  <p class='count-summa'>${dataProducts[i].price}</p>
                </div>
              </div>`;
              productsCartWrap?.append(cardCart);
            }
          }
        }
      }
    }

    const productsInCart = productsCartWrap.children;

    const itemsInput = <HTMLInputElement>document.querySelector(".itemsInput");
    let cardsCount: number = productsCartWrap.children.length;
    itemsInput.value = `${cardsCount}`;
    const prevPageButton = <HTMLElement>document.querySelector(".prev-page");
    const nextPageButton = <HTMLElement>document.querySelector(".next-page");
    const currentPage = <HTMLElement>document.querySelector(".current-page");
    itemsInput.addEventListener("input", () => {
      toBack();
      let state = {
        allItems: Array.from(document.querySelectorAll(".card-cart")),
        maximumItems: Number(itemsInput.value),
        initialPage: 1,
        totalPages() {
          return Math.ceil(state.allItems.length / Number(itemsInput.value));
        },
        curPage: 1,
      };

      let getItems = (page: number) => {
        state.allItems.forEach((item) => item.remove());
        let min = (page - 1) * Number(itemsInput.value);
        let max = page * Number(itemsInput.value);
        return state.allItems.slice(min, max);
      };

      let renderItems = (page: number) => {
        let items = getItems(page);
        items.forEach((item) => productsCartWrap?.append(item));
        let allCardsToCart: HTMLElement[] = Array.from(
          document.querySelectorAll(".card-cart")
        );
        let allCardsNumber: HTMLElement[] = Array.from(
          document.querySelectorAll(".currentNumber")
        );
        for (let i = 0; i < allCardsToCart.length; i++) {
          allCardsToCart[i].addEventListener("click", (e) => {
            let event = <HTMLElement>e.target;
            allCardsNumber = Array.from(document.querySelectorAll(".currentNumber"));
            allCardsToCart= Array.from(document.querySelectorAll(".card-cart"));
            allSignCount= Array.from(document.querySelectorAll(".sign-count"));
            allCountSumma= Array.from(document.querySelectorAll(".count-summa"));
            if (event.classList.contains("sign-add")) {
              if(state.totalPages()===1){
                if (amountStock[i].innerHTML === allSignCount[i].innerHTML) {
                  return;
                } else {
                  allSignCount[i].innerHTML = `${Number(allSignCount[i].innerHTML) + 1}`;
                  for (let o = 0; o < dataProducts.length; o++) {
                    if (allCardsToCart[i].id === String(dataProducts[o].id)) {
                      allCountSumma[i].innerHTML = `${dataProducts[o].price * Number(allSignCount[i].innerHTML)}`;
                      localStorage.setItem(`${allCardsToCart[i].id}`,`${allSignCount[i].innerHTML}-${allCountSumma[i].innerHTML}`);
                      localStorage.setItem("count",`${Number(localStorage.getItem("count")) + 1}`);
                      countProduct.innerHTML = `${localStorage.getItem("count")}`;
                      localStorage.setItem("totalCard",`${Number(localStorage.getItem("totalCard")) + dataProducts[o].price}`);
                      totalCardSumma.innerHTML = `${localStorage.getItem("totalCard")}`;
                      summaryCount.innerHTML = `${localStorage.getItem("count")}`;
                      summaryTotalSumma.innerHTML = `${localStorage.getItem("totalCard")}`;
                      if (localStorage.getItem("promo") != undefined) {
                        if (localStorage.getItem("promo")?.split("-").length === 3) {
                          summaryTotalSummaDiscount.innerHTML = `${
                            Number(localStorage.getItem("totalCard")) -
                            Number(localStorage.getItem("totalCard")) * 0.2
                          }`;
                          summaryTotalSumma.style.textDecoration = "line-through";
                        } else if (
                          localStorage.getItem("promo")?.split("-").length === 2
                        ) {
                          summaryTotalSummaDiscount.innerHTML = `${
                            Number(localStorage.getItem("totalCard")) -
                            Number(localStorage.getItem("totalCard")) * 0.1
                          }`;
                          summaryTotalSumma.style.textDecoration = "line-through";
                        } else if (
                          localStorage.getItem("promo")?.split("-").length === 1
                        ) {
                          summaryTotalSummaDiscount.innerHTML = "";
                          summaryTotalSumma.style.textDecoration = "none";
                        }
                      }
                    }
                  }
                  toBack();
                  state.allItems = Array.from(productsCartWrap.children);
                  productsCartWrap.innerHTML = "";
                  renderItems(state.curPage);
                }
              }else{
                if (amountStock[i].innerHTML === allSignCount[i].innerHTML) {
                  return;
                }else{
                  allSignCount[i].innerHTML = `${Number(allSignCount[i].innerHTML) + 1}`;
                  for (let o = 0; o < dataProducts.length; o++) {
                    if (allCardsToCart[i].id === String(dataProducts[o].id)) {
                      allCountSumma[i].innerHTML = `${dataProducts[o].price * Number(allSignCount[i].innerHTML)}`;
                      localStorage.setItem(`${allCardsToCart[i].id}`,`${allSignCount[i].innerHTML}-${allCountSumma[i].innerHTML}`);
                      localStorage.setItem("count",`${Number(localStorage.getItem("count")) + 1}`);
                      countProduct.innerHTML = `${localStorage.getItem("count")}`;
                      localStorage.setItem("totalCard",`${Number(localStorage.getItem("totalCard")) + dataProducts[o].price}`);
                      totalCardSumma.innerHTML = `${localStorage.getItem("totalCard")}`;
                      summaryCount.innerHTML = `${localStorage.getItem("count")}`;
                      summaryTotalSumma.innerHTML = `${localStorage.getItem("totalCard")}`;
                      if (localStorage.getItem("promo") != undefined) {
                        if (localStorage.getItem("promo")?.split("-").length === 3) {
                          summaryTotalSummaDiscount.innerHTML = `${
                            Number(localStorage.getItem("totalCard")) -
                            Number(localStorage.getItem("totalCard")) * 0.2
                          }`;
                          summaryTotalSumma.style.textDecoration = "line-through";
                        } else if (
                          localStorage.getItem("promo")?.split("-").length === 2
                        ) {
                          summaryTotalSummaDiscount.innerHTML = `${
                            Number(localStorage.getItem("totalCard")) -
                            Number(localStorage.getItem("totalCard")) * 0.1
                          }`;
                          summaryTotalSumma.style.textDecoration = "line-through";
                        } else if (
                          localStorage.getItem("promo")?.split("-").length === 1
                        ) {
                          summaryTotalSummaDiscount.innerHTML = "";
                          summaryTotalSumma.style.textDecoration = "none";
                        }
                      }
                    }
                  }
                  toBack();
                  state.allItems = Array.from(productsCartWrap.children);
                  productsCartWrap.innerHTML = "";
                  renderItems(state.curPage);
                }
              }
          
            }else if (event.classList.contains("sign-remove")) {
              if (allSignCount[i].innerHTML === "1") {
                if (productsCartWrap?.children.length === 1) {
                  if(state.totalPages()==1){
                    main.innerHTML = cartPageLayoutEmpty;
                    localStorage.removeItem(`${allCardsToCart[i].id}`);
                    localStorage.setItem("count", `${Number(localStorage.getItem("count")) - 1}`);
                    countProduct.innerHTML = `${localStorage.getItem("count")}`;
                    for (let o = 0; o < dataProducts.length; o++) {
                      if (allCardsToCart[i].id === String(dataProducts[o].id)) {
                        localStorage.setItem("totalCard",`${Number(localStorage.getItem("totalCard")) - dataProducts[o].price}`);
                        totalCardSumma.innerHTML = `${localStorage.getItem("totalCard")}`;
                      }
                    }
                    let idArrCartLocal = localStorage.getItem("idArrayCart");
                    if (idArrCartLocal != null) {
                      let str = `-${allCardsToCart[i].id}`;
                      idArrCartLocal = idArrCartLocal.replace(str, "");
                      localStorage.setItem("idArrayCart", `${idArrCartLocal}`);
                    }
                    summaryCount.innerHTML = `${localStorage.getItem("count")}`;
                    summaryTotalSumma.innerHTML = `${localStorage.getItem("totalCard")}`;
                  }else{
                    allCardsToCart[i].remove();
                    localStorage.removeItem(`${allCardsToCart[i].id}`);
                  for (let o = 0; o < dataProducts.length; o++) {
                    if (allCardsToCart[i].id === String(dataProducts[o].id)) {
                      localStorage.setItem("totalCard",`${Number(localStorage.getItem("totalCard")) - dataProducts[o].price}`);
                      totalCardSumma.innerHTML = `${localStorage.getItem("totalCard")}`;
                    }
                  }
                  let idArrCartLocal = localStorage.getItem("idArrayCart");
                  if (idArrCartLocal != null) {
                    let str = `-${allCardsToCart[i].id}`;
                    idArrCartLocal = idArrCartLocal.replace(str, "");
                    localStorage.setItem("idArrayCart", `${idArrCartLocal}`);
                    localStorage.setItem(
                      "count",
                      `${Number(localStorage.getItem("count")) - 1}`
                    );
                    countProduct.innerHTML = `${localStorage.getItem("count")}`;
                  }
                  summaryCount.innerHTML = `${localStorage.getItem("count")}`;
                  summaryTotalSumma.innerHTML = `${localStorage.getItem(
                    "totalCard"
                  )}`;
                  if (localStorage.getItem("promo") != undefined) {
                    if (localStorage.getItem("promo")?.split("-").length === 3) {
                      summaryTotalSummaDiscount.innerHTML = `${
                        Number(localStorage.getItem("totalCard")) -
                        Number(localStorage.getItem("totalCard")) * 0.2
                      }`;
                      summaryTotalSumma.style.textDecoration = "line-through";
                    } else if (
                      localStorage.getItem("promo")?.split("-").length === 2
                    ) {
                      summaryTotalSummaDiscount.innerHTML = `${
                        Number(localStorage.getItem("totalCard")) -
                        Number(localStorage.getItem("totalCard")) * 0.1
                      }`;
                      summaryTotalSumma.style.textDecoration = "line-through";
                    } else if (
                      localStorage.getItem("promo")?.split("-").length === 1
                    ) {
                      summaryTotalSummaDiscount.innerHTML = "";
                      summaryTotalSumma.style.textDecoration = "none";
                    }
                  }
                  toBack();
                  state.allItems = Array.from(productsCartWrap.children);
                  productsCartWrap.innerHTML = "";
                  if(state.curPage!=1){
                    state.curPage -=1; 
                  }
                  renderItems(state.curPage);
                  displayBtns(state.curPage);
                  }
                 
                } else {
                  allCardsToCart[i].remove();
                  localStorage.removeItem(`${allCardsToCart[i].id}`);
                  for (let o = 0; o < dataProducts.length; o++) {
                    if (allCardsToCart[i].id === String(dataProducts[o].id)) {
                      localStorage.setItem("totalCard",`${Number(localStorage.getItem("totalCard")) - dataProducts[o].price}`);
                      totalCardSumma.innerHTML = `${localStorage.getItem("totalCard")}`;
                    }
                  }
                  let idArrCartLocal = localStorage.getItem("idArrayCart");
                  if (idArrCartLocal != null) {
                    let str = `-${allCardsToCart[i].id}`;
                    idArrCartLocal = idArrCartLocal.replace(str, "");
                    localStorage.setItem("idArrayCart", `${idArrCartLocal}`);
                    localStorage.setItem(
                      "count",
                      `${Number(localStorage.getItem("count")) - 1}`
                    );
                    countProduct.innerHTML = `${localStorage.getItem("count")}`;
                  }
                  summaryCount.innerHTML = `${localStorage.getItem("count")}`;
                  summaryTotalSumma.innerHTML = `${localStorage.getItem(
                    "totalCard"
                  )}`;
                  if (localStorage.getItem("promo") != undefined) {
                    if (localStorage.getItem("promo")?.split("-").length === 3) {
                      summaryTotalSummaDiscount.innerHTML = `${
                        Number(localStorage.getItem("totalCard")) -
                        Number(localStorage.getItem("totalCard")) * 0.2
                      }`;
                      summaryTotalSumma.style.textDecoration = "line-through";
                    } else if (
                      localStorage.getItem("promo")?.split("-").length === 2
                    ) {
                      summaryTotalSummaDiscount.innerHTML = `${
                        Number(localStorage.getItem("totalCard")) -
                        Number(localStorage.getItem("totalCard")) * 0.1
                      }`;
                      summaryTotalSumma.style.textDecoration = "line-through";
                    } else if (
                      localStorage.getItem("promo")?.split("-").length === 1
                    ) {
                      summaryTotalSummaDiscount.innerHTML = "";
                      summaryTotalSumma.style.textDecoration = "none";
                    }
                  }
                  toBack();
                  state.allItems = Array.from(productsCartWrap.children);
                  productsCartWrap.innerHTML = "";
                  renderItems(state.curPage);
                  displayBtns(state.curPage);
                }
              } else {
                allSignCount[i].innerHTML = `${
                  Number(allSignCount[i].innerHTML) - 1
                }`;
                localStorage.setItem(
                  "count",
                  `${Number(localStorage.getItem("count")) - 1}`
                );
                countProduct.innerHTML = `${localStorage.getItem("count")}`;
                for (let o = 0; o < dataProducts.length; o++) {
                  if (allCardsToCart[i].id === String(dataProducts[o].id)) {
                    allCountSumma[i].innerHTML = `${
                      Number(allCountSumma[i].innerHTML) - dataProducts[o].price
                    }`;
                    localStorage.setItem(
                      `${allCardsToCart[i].id}`,
                      `${allSignCount[i].innerHTML}-${allCountSumma[i].innerHTML}`
                    );
                    localStorage.setItem(
                      "totalCard",
                      `${
                        Number(localStorage.getItem("totalCard")) -
                        dataProducts[o].price
                      }`
                    );
                    totalCardSumma.innerHTML = `${localStorage.getItem(
                      "totalCard"
                    )}`;
                  }
                }
                summaryCount.innerHTML = `${localStorage.getItem("count")}`;
                summaryTotalSumma.innerHTML = `${localStorage.getItem(
                  "totalCard"
                )}`;
                if (localStorage.getItem("promo") != undefined) {
                  if (localStorage.getItem("promo")?.split("-").length === 3) {
                    summaryTotalSummaDiscount.innerHTML = `${
                      Number(localStorage.getItem("totalCard")) -
                      Number(localStorage.getItem("totalCard")) * 0.2
                    }`;
                    summaryTotalSumma.style.textDecoration = "line-through";
                  } else if (
                    localStorage.getItem("promo")?.split("-").length === 2
                  ) {
                    summaryTotalSummaDiscount.innerHTML = `${
                      Number(localStorage.getItem("totalCard")) -
                      Number(localStorage.getItem("totalCard")) * 0.1
                    }`;
                    summaryTotalSumma.style.textDecoration = "line-through";
                  } else if (
                    localStorage.getItem("promo")?.split("-").length === 1
                  ) {
                    summaryTotalSummaDiscount.innerHTML = "";
                    summaryTotalSumma.style.textDecoration = "none";
                  }
                }
                toBack();
                state.allItems = Array.from(productsCartWrap.children);
                productsCartWrap.innerHTML = "";
                renderItems(state.curPage);
                displayBtns(state.curPage);
              }
            } 
          });
        }
        currentPage.innerText = `${state.curPage}`;
      };

      renderItems(state.initialPage);

      let displayBtns = (page: number) => {
        if (state.totalPages() === state.initialPage) {
          prevPageButton.style.display = "none";
          nextPageButton.style.display = "none";
        }

        if (page === state.totalPages() && page !== state.initialPage) {
          nextPageButton.style.display = "none";
          prevPageButton.style.display = "inline";
        }

        if (
          page === state.initialPage &&
          state.totalPages() > state.initialPage
        ) {
          nextPageButton.style.display = "inline";
          prevPageButton.style.display = "none";
        }

        if (page !== state.initialPage && page < state.totalPages()) {
          nextPageButton.style.display = "inline";
          prevPageButton.style.display = "inline";
        }
      };
      displayBtns(state.initialPage);

      prevPageButton.addEventListener("click", () => {
        productsCartWrap.innerHTML = "";
        state.curPage--;
        renderItems(state.curPage);
        displayBtns(state.curPage);
      });

      nextPageButton.addEventListener("click", () => {
        productsCartWrap.innerHTML = "";
        state.curPage++;
        renderItems(state.curPage);
        displayBtns(state.curPage);
      });
    });

    function toBack() {
      point = 0;
      productsCartWrap.innerHTML = "";
      let idArrayCartLocSor = localStorage.getItem("idArrayCart")?.split("-");
      for (let i = 0; i < dataProducts.length; i++) {
        if (
          idArrayCartLocSor != undefined &&
          idArrayCartLocSor.includes(String(dataProducts[i].id))
        ) {
          if (localStorage.getItem(`${dataProducts[i].id}`) != null) {
            let idArrAmountCountAndSum = localStorage
              .getItem(`${dataProducts[i].id}`)
              ?.split("-");
            if (idArrAmountCountAndSum != undefined) {
              let cardCart = <HTMLElement>document.createElement("div");
              cardCart.className = "card-cart wrap";
              cardCart.id = `${dataProducts[i].id}`;
              cardCart.innerHTML = `<p class="font currentNumber">${++point}</p>
                    <img class="card-cart-photo" src="${
                      dataProducts[i].thumbnail
                    }" alt="">
                    <div class="card-cart-info wrap">
                      <p class="header-text font">${dataProducts[i].title}</p>
                      <div class="cart-info-description-and-count wrap">
                        <p class="cart-info-desc font">${
                          dataProducts[i].description
                        }</p>
                        <div class="cart-info-count">
                          <p class="font">STOCK: <a class='stock-amount'>${
                            dataProducts[i].stock
                          }</a></p>
                          <div class="cart-info-current-count wrap">
                            <div class="round-sign sign-add wrap">+</div>
                            <p class="font sign-count">${
                              idArrAmountCountAndSum[0]
                            }</p>
                            <div class="round-sign sign-remove wrap">-</div>
                          </div>
                        </div>
                      </div>
                      <div class="cart-info-rating-discount-cost wrap">
                        <div class="cart-info-rating-discount wrap">
                          <ul class="font">
                            <li>Rating: </li>
                            <li>Discount: </li>
                          </ul>
                          <ul class="font">
                            <li>${dataProducts[i].rating}</li>
                            <li>${dataProducts[i].discountPercentage}</li>
                          </ul>
                        </div>
                        <p class='count-summa'>${idArrAmountCountAndSum[1]}</p>
                      </div>
                    </div>`;
              productsCartWrap?.append(cardCart);
            }
          } else {
            let cardCart = <HTMLElement>document.createElement("div");
            cardCart.className = "card-cart wrap";
            cardCart.id = `${dataProducts[i].id}`;
            cardCart.innerHTML = `<p class="font currentNumber">${++point}</p>
                  <img class="card-cart-photo" src="${
                    dataProducts[i].thumbnail
                  }" alt="">
                  <div class="card-cart-info wrap">
                    <p class="header-text font">${dataProducts[i].title}</p>
                    <div class="cart-info-description-and-count wrap">
                      <p class="cart-info-desc font">${
                        dataProducts[i].description
                      }</p>
                      <div class="cart-info-count">
                        <p class="font">STOCK: <a class='stock-amount'>${
                          dataProducts[i].stock
                        }</a></p>
                        <div class="cart-info-current-count wrap">
                          <div class="round-sign sign-add wrap">+</div>
                          <p class="font sign-count">1</p>
                          <div class="round-sign sign-remove wrap">-</div>
                        </div>
                      </div>
                    </div>
                    <div class="cart-info-rating-discount-cost wrap">
                      <div class="cart-info-rating-discount wrap">
                        <ul class="font">
                          <li>Rating: </li>
                          <li>Discount: </li>
                        </ul>
                        <ul class="font">
                          <li>${dataProducts[i].rating}</li>
                          <li>${dataProducts[i].discountPercentage}</li>
                        </ul>
                      </div>
                      <p class='count-summa'>${dataProducts[i].price}</p>
                    </div>
                  </div>`;
            productsCartWrap?.append(cardCart);
          }
        }
      }
    }

    let allCardsToCart: HTMLElement[] = Array.from(document.querySelectorAll(".card-cart"));
    let allSignCount: HTMLElement[] = Array.from(document.querySelectorAll(".sign-count"));
    let allCountSumma: HTMLElement[] = Array.from(document.querySelectorAll(".count-summa"));
    let amountStock: HTMLElement[] = Array.from(document.querySelectorAll(".stock-amount"));

    for (let i = 0; i < allCardsToCart.length; i++) {
      allCardsToCart[i].addEventListener("click", (e) => {
        let event = <HTMLElement>e.target;
        if (event.classList.contains("sign-add")) {
          if (amountStock[i].innerHTML === allSignCount[i].innerHTML) {
            return;
          } else {
            allSignCount[i].innerHTML = `${Number(allSignCount[i].innerHTML) + 1}`;
            for (let o = 0; o < dataProducts.length; o++) {
              if (allCardsToCart[i].id === String(dataProducts[o].id)) {
                allCountSumma[i].innerHTML = `${dataProducts[o].price * Number(allSignCount[i].innerHTML)}`;
                localStorage.setItem(`${allCardsToCart[i].id}`,`${allSignCount[i].innerHTML}-${allCountSumma[i].innerHTML}`);
                localStorage.setItem("count",`${Number(localStorage.getItem("count")) + 1}`);
                countProduct.innerHTML = `${localStorage.getItem("count")}`;
                localStorage.setItem("totalCard",`${Number(localStorage.getItem("totalCard")) + dataProducts[o].price}`);
                totalCardSumma.innerHTML = `${localStorage.getItem("totalCard")}`;
                summaryCount.innerHTML = `${localStorage.getItem("count")}`;
                summaryTotalSumma.innerHTML = `${localStorage.getItem("totalCard")}`;
                if (localStorage.getItem("promo") != undefined) {
                  if (localStorage.getItem("promo")?.split("-").length === 3) {
                    summaryTotalSummaDiscount.innerHTML = `${
                      Number(localStorage.getItem("totalCard")) -
                      Number(localStorage.getItem("totalCard")) * 0.2
                    }`;
                    summaryTotalSumma.style.textDecoration = "line-through";
                  } else if (
                    localStorage.getItem("promo")?.split("-").length === 2
                  ) {
                    summaryTotalSummaDiscount.innerHTML = `${
                      Number(localStorage.getItem("totalCard")) -
                      Number(localStorage.getItem("totalCard")) * 0.1
                    }`;
                    summaryTotalSumma.style.textDecoration = "line-through";
                  } else if (
                    localStorage.getItem("promo")?.split("-").length === 1
                  ) {
                    summaryTotalSummaDiscount.innerHTML = "";
                    summaryTotalSumma.style.textDecoration = "none";
                  }
                }
              }
            }
          }
        } else if (event.classList.contains("sign-remove")) {
          if (allSignCount[i].innerHTML === "1") {
            if (productsCartWrap?.children.length === 1) {
              main.innerHTML = cartPageLayoutEmpty;
              localStorage.removeItem(`${allCardsToCart[i].id}`);
              localStorage.setItem("count", `${Number(localStorage.getItem("count")) - 1}`);
              countProduct.innerHTML = `${localStorage.getItem("count")}`;
              for (let o = 0; o < dataProducts.length; o++) {
                if (allCardsToCart[i].id === String(dataProducts[o].id)) {
                  localStorage.setItem(
                    "totalCard",
                    `${
                      Number(localStorage.getItem("totalCard")) -
                      dataProducts[o].price
                    }`
                  );
                  totalCardSumma.innerHTML = `${localStorage.getItem(
                    "totalCard"
                  )}`;
                }
              }
              let idArrCartLocal = localStorage.getItem("idArrayCart");
              if (idArrCartLocal != null) {
                let str = `-${allCardsToCart[i].id}`;
                idArrCartLocal = idArrCartLocal.replace(str, "");
                localStorage.setItem("idArrayCart", `${idArrCartLocal}`);
              }
              summaryCount.innerHTML = `${localStorage.getItem("count")}`;
              summaryTotalSumma.innerHTML = `${localStorage.getItem(
                "totalCard"
              )}`;
            } else {
              allCardsToCart[i].remove();
              localStorage.removeItem(`${allCardsToCart[i].id}`);
              for (let o = 0; o < dataProducts.length; o++) {
                if (allCardsToCart[i].id === String(dataProducts[o].id)) {
                  localStorage.setItem(
                    "totalCard",
                    `${
                      Number(localStorage.getItem("totalCard")) -
                      dataProducts[o].price
                    }`
                  );
                  totalCardSumma.innerHTML = `${localStorage.getItem(
                    "totalCard"
                  )}`;
                }
              }
              let idArrCartLocal = localStorage.getItem("idArrayCart");
              if (idArrCartLocal != null) {
                let str = `-${allCardsToCart[i].id}`;
                idArrCartLocal = idArrCartLocal.replace(str, "");
                localStorage.setItem("idArrayCart", `${idArrCartLocal}`);
                localStorage.setItem(
                  "count",
                  `${Number(localStorage.getItem("count")) - 1}`
                );
                countProduct.innerHTML = `${localStorage.getItem("count")}`;
              }
              summaryCount.innerHTML = `${localStorage.getItem("count")}`;
              summaryTotalSumma.innerHTML = `${localStorage.getItem(
                "totalCard"
              )}`;
              if (localStorage.getItem("promo") != undefined) {
                if (localStorage.getItem("promo")?.split("-").length === 3) {
                  summaryTotalSummaDiscount.innerHTML = `${
                    Number(localStorage.getItem("totalCard")) -
                    Number(localStorage.getItem("totalCard")) * 0.2
                  }`;
                  summaryTotalSumma.style.textDecoration = "line-through";
                } else if (
                  localStorage.getItem("promo")?.split("-").length === 2
                ) {
                  summaryTotalSummaDiscount.innerHTML = `${
                    Number(localStorage.getItem("totalCard")) -
                    Number(localStorage.getItem("totalCard")) * 0.1
                  }`;
                  summaryTotalSumma.style.textDecoration = "line-through";
                } else if (
                  localStorage.getItem("promo")?.split("-").length === 1
                ) {
                  summaryTotalSummaDiscount.innerHTML = "";
                  summaryTotalSumma.style.textDecoration = "none";
                }
              }
            }
          } else {
            allSignCount[i].innerHTML = `${
              Number(allSignCount[i].innerHTML) - 1
            }`;
            localStorage.setItem(
              "count",
              `${Number(localStorage.getItem("count")) - 1}`
            );
            countProduct.innerHTML = `${localStorage.getItem("count")}`;
            for (let o = 0; o < dataProducts.length; o++) {
              if (allCardsToCart[i].id === String(dataProducts[o].id)) {
                allCountSumma[i].innerHTML = `${
                  Number(allCountSumma[i].innerHTML) - dataProducts[o].price
                }`;
                localStorage.setItem(
                  `${allCardsToCart[i].id}`,
                  `${allSignCount[i].innerHTML}-${allCountSumma[i].innerHTML}`
                );
                localStorage.setItem(
                  "totalCard",
                  `${
                    Number(localStorage.getItem("totalCard")) -
                    dataProducts[o].price
                  }`
                );
                totalCardSumma.innerHTML = `${localStorage.getItem(
                  "totalCard"
                )}`;
              }
            }
            summaryCount.innerHTML = `${localStorage.getItem("count")}`;
            summaryTotalSumma.innerHTML = `${localStorage.getItem(
              "totalCard"
            )}`;
            if (localStorage.getItem("promo") != undefined) {
              if (localStorage.getItem("promo")?.split("-").length === 3) {
                summaryTotalSummaDiscount.innerHTML = `${
                  Number(localStorage.getItem("totalCard")) -
                  Number(localStorage.getItem("totalCard")) * 0.2
                }`;
                summaryTotalSumma.style.textDecoration = "line-through";
              } else if (
                localStorage.getItem("promo")?.split("-").length === 2
              ) {
                summaryTotalSummaDiscount.innerHTML = `${
                  Number(localStorage.getItem("totalCard")) -
                  Number(localStorage.getItem("totalCard")) * 0.1
                }`;
                summaryTotalSumma.style.textDecoration = "line-through";
              } else if (
                localStorage.getItem("promo")?.split("-").length === 1
              ) {
                summaryTotalSummaDiscount.innerHTML = "";
                summaryTotalSumma.style.textDecoration = "none";
              }
            }
          }
        }
      });
    }

    let inputSearchPromo = <HTMLInputElement>(document.querySelector(".search-promo"));
    let summaryTotalSummaDiscount = <HTMLElement>(document.querySelector(".summary-total-summa-discount"));

    const rsPromo: HTMLElement = document.createElement("div");
    rsPromo.className = "rs-promo";
    rsPromo.innerHTML = `Rolling Scopes School - 10% <span>ADD</span>`;

    const epmPromo: HTMLElement = document.createElement("div");
    epmPromo.className = "epm-promo";
    epmPromo.innerHTML = `EPAM Systems - 10% <span>ADD</span>`;

    const rsPromoAdded: HTMLElement = document.createElement("div");
    rsPromoAdded.className = "rs-promo-added";
    rsPromoAdded.innerHTML = `Rolling Scopes School - 10% <span>DROP</span>`;

    const epmPromoAdded: HTMLElement = document.createElement("div");
    epmPromoAdded.className = "epm-promo-added";
    epmPromoAdded.innerHTML = `EPAM Systems - 10% <span>DROP</span>`;

    const summaryBlock = <HTMLElement>document.querySelector(".summary-cart");
    let allSummaryElement: HTMLCollection = summaryBlock.children;

    rsPromo.addEventListener("click", (e) => {
      let eventElem = <HTMLElement>e.target;
      addBlockPromocod(eventElem);
    });
    epmPromo.addEventListener("click", (e) => {
      let eventElem = <HTMLElement>e.target;
      addBlockPromocod(eventElem);
    });

    epmPromoAdded.addEventListener("click", (e) => {
      let eventElem = <HTMLElement>e.target;
      addBlockPromocod(eventElem);
    });
    rsPromoAdded.addEventListener("click", (e) => {
      let eventElem = <HTMLElement>e.target;
      addBlockPromocod(eventElem);
    });

    inputSearchPromo.addEventListener("input", () => {
      if (
        inputSearchPromo.value.toLocaleLowerCase() === "rs" ||
        inputSearchPromo.value.toLocaleLowerCase() === "epm"
      ) {
        if (inputSearchPromo.value.toLocaleLowerCase() === "rs") {
          inputSearchPromo.after(rsPromo);
        }
        if (inputSearchPromo.value.toLocaleLowerCase() === "epm") {
          inputSearchPromo.after(epmPromo);
        }
      } else {
        rsPromo.remove();
        epmPromo.remove();
      }
    });

    let promoLocal: string = "";
    if (localStorage.getItem("promo") != undefined) {
      promoLocal = String(localStorage.getItem("promo"));
    }

    function addBlockPromocod(promo: HTMLElement) {
      if (promo.innerHTML === "ADD") {
        if (promo.parentElement != null) {
          if (promo.parentElement.classList.contains("rs-promo")) {
            inputSearchPromo.before(rsPromoAdded);
            promoLocal += "-rs";
          } else {
            inputSearchPromo.before(epmPromoAdded);
            promoLocal += "-epm";
          }
          if (allSummaryElement.length === 7) {
            summaryTotalSummaDiscount.innerHTML = `${
              Number(localStorage.getItem("totalCard")) -
              Number(localStorage.getItem("totalCard")) * 0.1
            }`;
            summaryTotalSumma.style.textDecoration = "line-through";
          }
          if (allSummaryElement.length === 8) {
            summaryTotalSummaDiscount.innerHTML = `${
              Number(localStorage.getItem("totalCard")) -
              Number(localStorage.getItem("totalCard")) * 0.2
            }`;
            summaryTotalSumma.style.textDecoration = "line-through";
          }
        }
        promoLocal = [...new Set(promoLocal.split("-"))].join("-");
        localStorage.setItem("promo", `${promoLocal}`);
      } else if (promo.innerHTML === "DROP") {
        if (promo.parentElement != null) {
          if (promo.parentElement.classList.contains("rs-promo-added")) {
            promo.parentElement.remove();
            let str = "-rs";
            promoLocal = promoLocal.replace(str, "");
          } else {
            promo.parentElement.remove();
            let str = "-epm";
            promoLocal = promoLocal.replace(str, "");
          }
          summaryTotalSummaDiscount.innerHTML = `${Math.round(
            Number(summaryTotalSummaDiscount.innerHTML) +
              Number(localStorage.getItem("totalCard")) * 0.1
          )}`;
        }
        if (
          summaryTotalSummaDiscount.innerHTML === summaryTotalSumma.innerHTML
        ) {
          summaryTotalSummaDiscount.innerHTML = '0';
          summaryTotalSumma.style.textDecoration = "none";
        }
        localStorage.setItem("promo", `${promoLocal}`);
      }
    }

    if (localStorage.getItem("promo") != undefined) {
      if (localStorage.getItem("promo")?.split("-").length === 3) {
        inputSearchPromo.before(epmPromoAdded);
        inputSearchPromo.before(rsPromoAdded);
        summaryTotalSummaDiscount.innerHTML = `${
          Number(localStorage.getItem("totalCard")) -
          Number(localStorage.getItem("totalCard")) * 0.2
        }`;
        summaryTotalSumma.style.textDecoration = "line-through";
      } else if (localStorage.getItem("promo") === "-rs") {
        inputSearchPromo.before(rsPromoAdded);
        summaryTotalSummaDiscount.innerHTML = `${
          Number(localStorage.getItem("totalCard")) -
          Number(localStorage.getItem("totalCard")) * 0.1
        }`;
        summaryTotalSumma.style.textDecoration = "line-through";
      } else if (localStorage.getItem("promo") === "-epm") {
        inputSearchPromo.before(epmPromoAdded);
        summaryTotalSummaDiscount.innerHTML = `${
          Number(localStorage.getItem("totalCard")) -
          Number(localStorage.getItem("totalCard")) * 0.1
        }`;
        summaryTotalSumma.style.textDecoration = "line-through";
      }
    }

    const toModal = <HTMLElement>document.querySelector(".toModal");
    const modalBg = <HTMLElement>document.querySelector(".modal-background");
    const modalWindow = <HTMLElement>document.querySelector(".modal-window");
    const closeModal = <HTMLElement>document.querySelector(".modal-close");

    toModal.addEventListener("click", () => {
      buyNow();
    });

    closeModal.addEventListener("click", () => {
      modalBg.style.display = "none";
      modalWindow.style.display = "none";
      window.history.replaceState( {}, 'Cart', '/cart');
    });

    let cardNumber = <HTMLInputElement>document.querySelector(".cardNumber");
    cardNumber.addEventListener("input", () => {
      let reg = /^\d{16}$/;
      let valid = reg.test(cardNumber.value);
      valid
        ? (cardNumber.style.border = "3px solid green")
        : (cardNumber.style.border = "3px solid red");
      if (cardNumber.style.border == "3px solid green") {
        let err_p = <HTMLElement>cardNumber.previousElementSibling;
        err_p.style.display = "none";
      }
      let creditCardPage = <HTMLElement>(
        document.querySelector(".credit-card-bg")
      );
      if (cardNumber.value[0] == "4" && cardNumber.value.length == 16) {
        creditCardPage.innerHTML = "";
        creditCardPage.innerHTML = `<img src="https://i.ibb.co/KN4gFv9/visa-card.png" />`;
      } else if (cardNumber.value[0] == "5" && cardNumber.value.length == 16) {
        creditCardPage.innerHTML = "";
        creditCardPage.innerHTML = `<img src="https://i.ibb.co/KN6WwGT/master-card.png" />`;
      } else if (cardNumber.value[0] == "2" && cardNumber.value.length == 16) {
        creditCardPage.innerHTML = "";
        creditCardPage.innerHTML = `<img src="https://i.ibb.co/9gbqm6W/mir-card.png" />`;
      } else {
        creditCardPage.innerHTML = `<img src="https://i.ibb.co/TLqbk79/default-card.png" />`;
      }
    });
    let cardDate = <HTMLInputElement>document.querySelector(".cardDate");
    cardDate.addEventListener("input", () => {
      let reg = /^(0[1-9]|1[0-2])[/](2[3-9]|3[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])$/;
      let valid = reg.test(cardDate.value);
      valid
        ? (cardDate.style.border = "3px solid green")
        : (cardDate.style.border = "3px solid red");
      if (cardDate.style.border == "3px solid green") {
        let err_p = <HTMLElement>cardDate.previousElementSibling;
        err_p.style.color = "black";
      }
      if (cardDate.value.length == 3 && !cardDate.value.includes("/")) {
        cardDate.value =
          cardDate.value.slice(0, 2) + "/" + cardDate.value.slice(2);
      }
    });

    let cardCVV = <HTMLInputElement>document.querySelector(".cardCVV");
    cardCVV.addEventListener("input", () => {
      let reg = /^\d{3}$/;
      let valid = reg.test(cardCVV.value);
      valid
        ? (cardCVV.style.border = "3px solid green")
        : (cardCVV.style.border = "3px solid red");
      if (cardCVV.style.border == "3px solid green") {
        let err_p = <HTMLElement>cardCVV.previousElementSibling;
        err_p.style.color = "black";
      }
    });

    let cardName = <HTMLInputElement>document.querySelector(".cardName");
    cardName.addEventListener("input", () => {
      let strName = cardName.value.split(" ");
      let validCount = strName.length >= 2 ? true : false;
      let validLength = true;
      for (let i = 0; i < strName.length; i++) {
        if (strName[i].length < 3) {
          validLength = false;
          break;
        }
      }
      validCount &&
      validLength &&
      /^[A-Za-zА-Яа-яё ]+$/.test(cardName.value) == true
        ? (cardName.style.border = "3px solid green")
        : (cardName.style.border = "3px solid red");
      if (cardName.style.border == "3px solid green") {
        let err_p = <HTMLElement>cardName.previousElementSibling;
        err_p.style.display = "none";
      }
    });

    let cardAddress = <HTMLInputElement>document.querySelector(".cardAddress");
    cardAddress.addEventListener("input", () => {
      let strAdress = cardAddress.value.split(" ");
      let validCount = strAdress.length >= 3 ? true : false;
      let validLength = true;
      for (let i = 0; i < strAdress.length; i++) {
        if (strAdress[i].length < 5) {
          validLength = false;
          break;
        }
      }
      validCount &&
      validLength &&
      /^[A-Za-zА-Яа-яё ]+$/.test(cardAddress.value) == true
        ? (cardAddress.style.border = "3px solid green")
        : (cardAddress.style.border = "3px solid red");
      if (cardAddress.style.border == "3px solid green") {
        let err_p = <HTMLElement>cardAddress.previousElementSibling;
        err_p.style.display = "none";
      }
    });

    let cardPhone = <HTMLInputElement>document.querySelector(".cardPhone");
    cardPhone.addEventListener("input", () => {
      let reg = /^[\+][\d]{9,}\d$/;
      let valid = reg.test(cardPhone.value);
      valid
        ? (cardPhone.style.border = "3px solid green")
        : (cardPhone.style.border = "3px solid red");
      if (cardPhone.style.border == "3px solid green") {
        let err_p = <HTMLElement>cardPhone.previousElementSibling;
        err_p.style.display = "none";
      }
    });

    let cardEmail = <HTMLInputElement>document.querySelector(".cardEmail");
    cardEmail.addEventListener("input", () => {
      let reg = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
      let valid = reg.test(cardEmail.value);
      valid
        ? (cardEmail.style.border = "3px solid green")
        : (cardEmail.style.border = "3px solid red");
      if (cardEmail.style.border == "3px solid green") {
        let err_p = <HTMLElement>cardEmail.previousElementSibling;
        err_p.style.display = "none";
      }
    });

    let inputModalPersonal: Array<HTMLInputElement> = Array.from(
      document.querySelectorAll(".validCheck")
    );
    let inputModalCard: Array<HTMLInputElement> = Array.from(
      document.querySelectorAll(".validCheckCard")
    );
    let confirmButton = <HTMLButtonElement>(
      document.querySelector(".confirmButton")
    );
    let allInputModal: Array<HTMLInputElement> = [inputModalCard, inputModalPersonal].flat();
    confirmButton.addEventListener("click", () => {
      for (let i = 0; i < inputModalPersonal.length; i++) {
        if (inputModalPersonal[i].style.border != "3px solid green") {
          let err_p = <HTMLElement>inputModalPersonal[i].previousElementSibling;
          err_p.style.display = "block";
          inputModalPersonal[i].style.border = "3px solid red";
        }
      }
      for (let i = 0; i < inputModalCard.length; i++) {
        if (inputModalCard[i].style.border != "3px solid green") {
          if (inputModalCard[i].classList.contains("cardNumber")) {
            let err_p = <HTMLElement>inputModalCard[i].previousElementSibling;
            err_p.style.display = "block";
            inputModalCard[i].style.border = "3px solid red";
          } else {
            let err_p = <HTMLElement>inputModalCard[i].previousElementSibling;
            err_p.style.color = "red";
            inputModalCard[i].style.border = "3px solid red";
          }
        }
      }
      let inputValidCheck = allInputModal.every((elem) => {
        if (elem.style.border === "3px solid green"){
          return true;
        } else {
          return false;
        } 
      })
      if (inputValidCheck === true){
        modalWindow.innerHTML = `<h2 style='padding:20%'>Thanks for your order. Redirect to the store after <span class="time-before"></span> sec</h2>`;
        const timer = <HTMLElement>document.querySelector('.time-before');
        let sec:number = 3;
        for (let i = 0; i < sec; i++) {
          setTimeout(() => timer.textContent = `${sec--}`, i * 1000);
        }
        setTimeout(() =>{localStorage.clear();location.href = "/";} , sec * 1000);
      }
    });
  }
}
export function buyNow() {
  const modalBg = <HTMLElement>document.querySelector(".modal-background");
  const modalWindow = <HTMLElement>document.querySelector(".modal-window");
  modalBg.style.display = "block";
  modalWindow.style.display = "flex";
}
