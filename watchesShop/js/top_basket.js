class MenuBasket {

    handlerOpenShoppingPage() {
        shoppingPage.render();
    } 

    render(count) {
        if(count < 1) {
            ROOT_MENU_BASKET.innerHTML = `<span onclick="">Кошик</span>`;
            //ROOT_MENU_BASKET.innerHTML = ``;
        }else {
            ROOT_MENU_BASKET.innerHTML = `Кошик <span class="header__id">${count}</span>`;
            //ROOT_MENU_BASKET.innerHTML = `${count}`;
        }
       // ROOT_MENU_BASKET.innerHTML = `Кошик ${count}`;
    }
}

const headerPage = new MenuBasket();

const storageCount = localStorageUtil.getProducts();

headerPage.render(storageCount.length);