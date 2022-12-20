const productPage: string = 
`
<div class="wrapper">
  <p class="path-product font">STORE ></p>
  <div class="wrapper-product wrap">
    <div class="photos-product wrap">
      <div class="photos-main"></div>
      <div class="photos-other">
        <div class="photo-other"></div>
        <div class="photo-other"></div>
        <div class="photo-other"></div>
      </div>
    </div>
    <div class="info-product wrap">
      <div class="info-main font">
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
      <button class="button-product font">DROP FORM CART</button>
      <button class="button-product font">BUY NOW</button>
    </div>
    <p class="cost-product font">€549.00</p>
  </div>
</div>`

export default productPage;