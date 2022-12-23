import dataProducts from "./dataProducts";
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
              <li>${localStorage.getItem('count')}</li>
              <li>€${localStorage.getItem('totalCard')}</li>
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
  if (localStorage.getItem('count') === undefined || localStorage.getItem('count') === '0'){
    main.innerHTML = cartPageLayoutEmpty;
  } else {
    main.innerHTML = cartPageLayout;
    let point:number = 0;
    console.log(localStorage.getItem('idArrayCart'));
    let idArrayCartLocSor = localStorage.getItem('idArrayCart')?.split('-');
    console.log(idArrayCartLocSor);
    let productsCartWrap = document.querySelector('.products-cart-wrapper');
    for (let i=0; i<dataProducts.length; i++){
      if(idArrayCartLocSor != undefined){
        for( let j=0; j<idArrayCartLocSor.length; j++){
          if(dataProducts[i].id === Number(idArrayCartLocSor[j])){
            let cardCart = <HTMLElement>document.createElement('div');
            cardCart.className = 'card-cart wrap';
            cardCart.innerHTML = 
            `<p class="font">${++point}</p>
            <img class="card-cart-photo" src="${dataProducts[i].thumbnail}" alt="">
            <div class="card-cart-info wrap">
              <p class="header-text font">${dataProducts[i].title}</p>
              <div class="cart-info-description-and-count wrap">
                <p class="cart-info-desc font">${dataProducts[i].description}</p>
                <div class="cart-info-count">
                  <p class="font">STOCK: ${dataProducts[i].stock}</p>
                  <div class="cart-info-current-count wrap">
                    <div class="round-sign wrap">+</div>
                    <p class="font">1</p>
                    <div class="round-sign wrap">-</div>
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
                <p>€${dataProducts[i].price}</p>
              </div>
            </div>`
              productsCartWrap?.append(cardCart);
          }
        }
      }

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