const startPage: string = 
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
                    <option value="sort-title">Sort options:</option>
                    <option value="price-ASC">Sort by price ASC</option>
                    <option value="price-DESC">Sort by price DESC</option>
                    <option value="rating-ASC">Sort by rating ASC</option>
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
                <div class="size-elem wrap">
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
                <div class="size-elem wrap active-size">
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
                    <div class="stock-values">
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
                    <div class="stock-values">    
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

export default startPage;