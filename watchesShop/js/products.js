class Column_Item {

    handleSetLocationStorage(element, id) {
        const {pushProduct, products} = localStorageUtil.putProduct(id);
       
        if (pushProduct) {
            element.innerHTML = '<img class="column-basic__photo-basket" src="img/bask_full.jpg"/>';
            
        } else {
           element.innerHTML = '<img class="column-basic__photo-basket" src="img/bask.jpg"/>';
        }
        
        headerPage.render(products.length);
    }

    render() {
        let src_img_backet = '';
        const productsStore = localStorageUtil.getProducts();
       
        CATALOG.forEach(({id}) => {
           

            if (productsStore.indexOf(id) === -1) {
                src_img_backet = 'img/bask.jpg'
            } else {
                src_img_backet = 'img/bask_full.jpg'
            }

        

            const html = `
                <div class="column-basic__basket">
                    <button onclick="itemPage1.handleSetLocationStorage(this, ${id})">
                        <img class="column-basic__photo-basket" src="${src_img_backet}"   />
                    </button>
                </div>
            `;

            arrRoot[id-1].innerHTML = html;
        });
       
    }

}

const itemPage1 = new Column_Item();

itemPage1.render();