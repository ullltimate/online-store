import './index.css';
import dataProducts from './components/dataProducts';
import home from './components/startPage';
import cartProduct from "./components/cartPage";
import productPage from "./components/productPage";
import page404 from "./components/page404";

const getRoute = () => {
    const routes = [
        {
            path: '/',
            data: home,
        },
        {
            path: '/cart',
            data: cartProduct,
        },
        {
            path: '/404',
            data: page404,
        },
    ];

    for (let i=0; i<dataProducts.length; i++){
        routes.unshift(
            {
                path: `/product-${dataProducts[i].id}`,
                data: productPage,
            }
        )
    }
    
    let handleLocation = () => {
        const html = routes.find((route) => route.path === location.pathname) || routes.at(-1);
        console.log(html)
        const main = <HTMLElement | null> document.querySelector('.main');

        if (main !== null) {
            const getPageContent: any = html?.data
            getPageContent(main);
        }

        window.addEventListener('popstate', handleLocation);
        window.addEventListener('DOMContentLoaded', handleLocation);
    }; 
    handleLocation();
}

getRoute()

//home();

//let logo = <HTMLElement>document.querySelector('.logo');
//
//logo.addEventListener('click', () => {
//  home();
//});

//let cart = <HTMLElement>document.querySelector(".basket-img");
//
//cart.addEventListener("click", () => {
//  cartProduct();
//});

