const productPage: string = 
`<p class="path-product">STORE ></p>
<div class="wrapper-product">
  <div class="photos-product">
    <div class="photos-main"></div>
    <div class="photos-other">
      <div class="photo-other"></div>
      <div class="photo-other"></div>
      <div class="photo-other"></div>
    </div>
  </div>
  <div class="info-product">
    <div class="info-main">
      <h2 class = "product-title">iPhone 9</h2>
      <p class = "product-description">An apple mobile which is nothing like apple</p>
    </div>
    <div class="info-other">
      <ul>
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
    <button class="button-product">DROP FORM CART</button>
    <button class="button-product">BUY NOW</button>
  </div>
  <p class="cost-product">€549.00</p>
</div>`

export default productPage;