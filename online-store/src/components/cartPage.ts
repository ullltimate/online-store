import dataProducts from "./dataProducts";
import productPage from "./productPage";
const cartPageLayout: string = 
`<div class="wrapper">
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
                  <input type="text" placeholder="Card number" />
                </div>
                <div class="credit-card-private-info">
                  <ul>
                    <li>
                      <p>Valid:</p>
                      <input type="text" placeholder="Valid thru" />
                    </li>
                    <li>
                      <p>CVV:</p>
                      <input type="text" placeholder="Code" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="modal-personal">
              <p>Personal details</p>
              <input type="text" placeholder="Name" />
              <input type="tel" placeholder="Phone number" />
              <input type="text" placeholder="Delivery address" />
              <input type="email" placeholder="E-mail" />
            </div>
          </div>
          <button>Confirm</button>
        </div>
      </div>
      <div class="cart-wrapper wrap">
        <div class="products-cart">
          <div class="products-header wrap font">
            <h2>Products in cart</h2>
            <p>ITEMS: 1</p>
            <p>PAGE: &lt 1 &gt</p>
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
            </ul>
            <ul>
              <li class="summary-count">0</li>
              <li class="summary-total-summa">€0</li>
            </ul>
          </div>
          <input type="text" placeholder="Enter promo code" />
          <p class="promo font">Promo for Test: 'RS', 'EPM'</p>
          <button class="toModal">Buy now</button>
        </div>
      </div> 
</div>`
const cartPageLayoutEmpty: string = 
`<div class="wrapper">
  <h2 class='empty-cart header-text font'>Cart is Empty &#129402</h2>
</div>`

export default function cartProduct(): void{
  let main = <HTMLElement>document.querySelector('.main');
  if (localStorage.getItem('count') === null || localStorage.getItem('count') === '0'){
    main.innerHTML = cartPageLayoutEmpty;
  } else {
    main.innerHTML = cartPageLayout;
    let point:number = 0;
    let summaryCount = <HTMLElement>document.querySelector('.summary-count');
    let summaryTotalSumma = <HTMLElement>document.querySelector('.summary-total-summa');
    summaryCount.innerHTML = `${localStorage.getItem('count')}`;
    summaryTotalSumma.innerHTML = `€${localStorage.getItem('totalCard')}`;

    let idArrayCartLocSor = localStorage.getItem('idArrayCart')?.split('-');
    let productsCartWrap = document.querySelector('.products-cart-wrapper');
    for (let i=0; i<dataProducts.length; i++){
      if(idArrayCartLocSor != undefined){
        for( let j=0; j<idArrayCartLocSor.length; j++){
          if(dataProducts[i].id === Number(idArrayCartLocSor[j])){
            if(localStorage.getItem(`${dataProducts[i].id}`) != null){
              console.log(localStorage.getItem(`${dataProducts[i].id}`))
              let idArrAmountCountAndSum = localStorage.getItem(`${dataProducts[i].id}`)?.split('-');
              if (idArrAmountCountAndSum != undefined){
                console.log(idArrAmountCountAndSum);
                let cardCart = <HTMLElement>document.createElement('div');
                cardCart.className = 'card-cart wrap';
                cardCart.id = `${dataProducts[i].id}`;
                cardCart.innerHTML = 
                `<p class="font">${++point}</p>
                <img class="card-cart-photo" src="${dataProducts[i].thumbnail}" alt="">
                <div class="card-cart-info wrap">
                  <p class="header-text font">${dataProducts[i].title}</p>
                  <div class="cart-info-description-and-count wrap">
                    <p class="cart-info-desc font">${dataProducts[i].description}</p>
                    <div class="cart-info-count">
                      <p class="font">STOCK: <a class='stock-amount'>${dataProducts[i].stock}</a></p>
                      <div class="cart-info-current-count wrap">
                        <div class="round-sign sign-add wrap">+</div>
                        <p class="font sign-count">${idArrAmountCountAndSum[0]}</p>
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
                </div>`
                productsCartWrap?.append(cardCart);
              }
            } else {
              let cardCart = <HTMLElement>document.createElement('div');
              cardCart.className = 'card-cart wrap';
              cardCart.id = `${dataProducts[i].id}`;
              cardCart.innerHTML = 
              `<p class="font">${++point}</p>
              <img class="card-cart-photo" src="${dataProducts[i].thumbnail}" alt="">
              <div class="card-cart-info wrap">
                <p class="header-text font">${dataProducts[i].title}</p>
                <div class="cart-info-description-and-count wrap">
                  <p class="cart-info-desc font">${dataProducts[i].description}</p>
                  <div class="cart-info-count">
                    <p class="font">STOCK: <a class='stock-amount'>${dataProducts[i].stock}</a></p>
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
              </div>`
                productsCartWrap?.append(cardCart);
            }
          }
        }
      }
    }
    let allCardsToCart: HTMLElement[] = Array.from(document.querySelectorAll('.card-cart'));
    let allSignCount: HTMLElement[] = Array.from(document.querySelectorAll('.sign-count'));
    let allCountSumma: HTMLElement[] = Array.from(document.querySelectorAll('.count-summa'));
    let countProduct = <HTMLElement>document.querySelector('.count');
    let totalCardSumma = <HTMLElement>document.querySelector('.summa');
    let amountStock: HTMLElement[] = Array.from(document.querySelectorAll('.stock-amount'));

    for(let i=0; i<allCardsToCart.length; i++){
      allCardsToCart[i].addEventListener('click', (e) => {
          let event = <HTMLElement>e.target;
          if(event.classList.contains('sign-add')){
            if (amountStock[i].innerHTML === allSignCount[i].innerHTML){
              return;
            } else {
              allSignCount[i].innerHTML = `${Number(allSignCount[i].innerHTML)+1}`;
              for (let o=0; o<dataProducts.length; o++){
                if(allCardsToCart[i].id === String(dataProducts[o].id)){
                  allCountSumma[i].innerHTML = `${dataProducts[o].price * Number(allSignCount[i].innerHTML)}`;
                  localStorage.setItem(`${allCardsToCart[i].id}`, `${allSignCount[i].innerHTML}-${allCountSumma[i].innerHTML }`);
                  localStorage.setItem('count', `${Number(localStorage.getItem('count'))+1}`);
                  countProduct.innerHTML = `${localStorage.getItem('count')}`;
                  localStorage.setItem('totalCard', `${Number(localStorage.getItem('totalCard'))+dataProducts[o].price}`);
                  totalCardSumma.innerHTML = `${localStorage.getItem('totalCard')}`;
                  summaryCount.innerHTML = `${localStorage.getItem('count')}`;
                  summaryTotalSumma.innerHTML = `€${localStorage.getItem('totalCard')}`;
                }
              }
            }
          } else if(event.classList.contains('sign-remove')){
            if(allSignCount[i].innerHTML === '1'){
              if(productsCartWrap?.children.length === 1){
                main.innerHTML = cartPageLayoutEmpty;
                localStorage.removeItem(`${allCardsToCart[i].id}`);
                localStorage.setItem('count', `${Number(localStorage.getItem('count'))-1}`);
                countProduct.innerHTML = `${localStorage.getItem('count')}`;
                for (let o=0; o<dataProducts.length; o++){
                  if(allCardsToCart[i].id === String(dataProducts[o].id)){
                    localStorage.setItem('totalCard', `${Number(localStorage.getItem('totalCard'))-dataProducts[o].price}`);
                    totalCardSumma.innerHTML = `${localStorage.getItem('totalCard')}`;
                  }
                }
                let idArrCartLocal = localStorage.getItem('idArrayCart');
                if (idArrCartLocal != null){
                  let str = `-${allCardsToCart[i].id}`;
                  idArrCartLocal = idArrCartLocal.replace(str, '');
                  localStorage.setItem('idArrayCart', `${idArrCartLocal}`)
                }
                summaryCount.innerHTML = `${localStorage.getItem('count')}`;
                summaryTotalSumma.innerHTML = `€${localStorage.getItem('totalCard')}`;
              } else{
                allCardsToCart[i].remove();
                localStorage.removeItem(`${allCardsToCart[i].id}`);
                for (let o=0; o<dataProducts.length; o++){
                  if(allCardsToCart[i].id === String(dataProducts[o].id)){
                    localStorage.setItem('totalCard', `${Number(localStorage.getItem('totalCard'))-dataProducts[o].price}`);
                    totalCardSumma.innerHTML = `${localStorage.getItem('totalCard')}`;
                  }
                }
                let idArrCartLocal = localStorage.getItem('idArrayCart');
                if (idArrCartLocal != null){
                  let str = `-${allCardsToCart[i].id}`;
                  idArrCartLocal = idArrCartLocal.replace(str, '');
                  localStorage.setItem('idArrayCart', `${idArrCartLocal}`);
                  localStorage.setItem('count', `${Number(localStorage.getItem('count'))-1}`);
                  countProduct.innerHTML = `${localStorage.getItem('count')}`;
                }
                summaryCount.innerHTML = `${localStorage.getItem('count')}`;
                summaryTotalSumma.innerHTML = `€${localStorage.getItem('totalCard')}`;
              }
            } else {
              allSignCount[i].innerHTML = `${Number(allSignCount[i].innerHTML)-1}`;
              localStorage.setItem('count', `${Number(localStorage.getItem('count'))-1}`);
              countProduct.innerHTML = `${localStorage.getItem('count')}`;
              for (let o=0; o<dataProducts.length; o++){
                if(allCardsToCart[i].id === String(dataProducts[o].id)){
                  allCountSumma[i].innerHTML = `${Number(allCountSumma[i].innerHTML) - dataProducts[o].price}`;
                  localStorage.setItem(`${allCardsToCart[i].id}`, `${allSignCount[i].innerHTML}-${allCountSumma[i].innerHTML }`);
                  localStorage.setItem('totalCard', `${Number(localStorage.getItem('totalCard'))-dataProducts[o].price}`);
                  totalCardSumma.innerHTML = `${localStorage.getItem('totalCard')}`;
                }
              }
              summaryCount.innerHTML = `${localStorage.getItem('count')}`;
              summaryTotalSumma.innerHTML = `€${localStorage.getItem('totalCard')}`;
            }
          }
      })
    }


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
  }
}