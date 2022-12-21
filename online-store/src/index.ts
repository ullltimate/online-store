import './index.css';
import dataProducts from './components/dataProducts';
import home from './components/startPage';
import cartProduct from "./components/cartPage";


let main = <HTMLElement>document.querySelector('.main');
home();

let logo = <HTMLElement>document.querySelector('.logo');

logo.addEventListener('click', () => {
  home();
});

let cart = <HTMLElement>document.querySelector(".basket-img");

cart.addEventListener("click", () => {
  cartProduct();
});

