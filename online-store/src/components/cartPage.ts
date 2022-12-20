const cartPage: string = 
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
            <div class="card-cart">
              <p class="font">1</p>
              <div class="card-cart-photo"></div>
              <div class="card-cart-info">
                <p class="font">IPHONE 9</p>
                <div class="cart-info-description-and-count">
                  <p class="font">An apple mobile which is nothing like apple</p>
                  <div class="cart-info-count">
                    <p class="font">STOCK: 94</p>
                    <div class="cart-info-current-count">
                      <div class="round-sign">+</div>
                      <p class="font">1</p>
                      <div class="round-sign">-</div>
                    </div>
                  </div>
                </div>
                <div class="cart-info-rating-discount-cost">
                  <div class="cart-info-rating-discount">
                    <ul class="font">
                      <li>Rating:</li>
                      <li>Discount:</li>
                    </ul>
                    <ul class="font">
                      <li>4.69</li>
                      <li>12.96%</li>
                    </ul>
                  </div>
                  <p>€549.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="summary-cart font">
          <h3>Summary</h3>
          <div class="summary-total">
            <ul>
              <li>Products:</li>
              <li>Total:</li>
            </ul>
            <ul>
              <li>1</li>
              <li>€549.00</li>
            </ul>
          </div>
          <input type="text" placeholder="Enter promo code" />
          <p class="promo font">Promo for Test: 'RS', 'EPM'</p>
          <button class="toModal">Buy now</button>
        </div>
      </div> 
</div>`

export default cartPage;