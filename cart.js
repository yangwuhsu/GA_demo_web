 
    // 顯示畫面的容器
    const cartDOM = document.querySelector('.cart_container');
    // 查詢顯示結帳處
    const tatalBtn = document.querySelector('.cart_total_price');

    // localstorage 被點擊的商品
    const cartContents = JSON.parse(localStorage.getItem('mainItems'));
    console.log(cartContents);
    
    // 購物車數量
    const cartCount = document.querySelector('.cart_count');

    if(cartContents !== null){
        cartCount.textContent = cartContents.length;
    }
    
    
    totalPrice = 0;
    if(cartContents !== null){
        cartContents.forEach(cartContent => {
            // 去掉錢符號取出價錢
            const subCartPrice = cartContent.price.substring(1);
            // 把字串數字化並加回總金額
            totalPrice += parseInt(subCartPrice);
            // 替換總價格
            tatalBtn.textContent = `$${totalPrice}`;
            // 插入商品內容
            cartDOM.insertAdjacentHTML('beforeend',
            ` <div class="cart_item">
                <div class="cart-pic">
                <img src="${cartContent.image}" alt="" class="cart_item_image">
            </div>
            <h3 class="cart_item_name">${cartContent.name}</h3>
            <h3 class="cart_item_price">${cartContent.price}</h3>
            <h3 class="cart_item_amount">1</h3>
            <h3 class="cart_item_subtotal">${cartContent.price}</h3>
            </div>`
            );
        });
    }

 


 
 