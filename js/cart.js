const Init = () =>{

    // 抓購物車數量的dom
    const cartCount = document.querySelector('.cart_count');
    // 抓購物車按鈕
    const addCartBtns = document.querySelectorAll('.addCart');
    var localGetCart = [];
    var CartArr = [];

    localGetCart = JSON.parse(localStorage.getItem('cartItems'));
    ReloadCart()
    
        function ReloadCart(){
            if(localGetCart){
                CartArr = localGetCart;
                cartCount.textContent = CartArr.length;
                if(addCartBtns.length !== 0){
                    // 改變已加到購物車的div樣式 用id判斷
                    CartId = CartArr.map(item =>item.id);
                    for(let i = 0;i<CartId.length; i++){
                        addCartBtns[i].value='In Cart';
                        addCartBtns[i].classList.add('inputInCart');  
                    }
                }               
            }
        }

    // 查詢CheckOut按鈕
    const checkOut = document.querySelector('.cart_check_out_container');
    // 顯示畫面的容器
    const cartDOM = document.querySelector('.cart_container');
    // 查詢顯示結帳處
    const tatalBtn = document.querySelector('.cart_total_price');

    var  totalPrice = 0;
    CartArr.forEach(productItem => {
            // 去掉錢符號取出價錢
            const subCartPrice = productItem.price.substring(1);
            // 把字串數字化並加回總金額
            totalPrice += parseInt(subCartPrice);
            // 替換總價格
            tatalBtn.textContent = `$${totalPrice}`;
            // 插入商品內容
            cartDOM.insertAdjacentHTML('beforeend',
            ` <div class="cart_item">
                <div class="cart-pic">
                <img src="${productItem.image}" alt="" class="cart_item_image">
            </div>
            <h3 class="cart_item_name">${productItem.name}</h3>
            <h3 class="cart_item_price">${productItem.price}</h3>
            <h3 class="cart_item_amount">1</h3>
            <h3 class="cart_item_subtotal">${productItem.price}</h3>
            </div>`
        );
    });
    checkOut.addEventListener('click',()=>{
        if(CartArr.length<1){
            alert('Please Choose Products.');   
            window.location.replace('../index.html'); 
            
        }else{
            localStorage.clear();
            window.location.replace('thank.html');
        }
        ReloadCart();
    });
}

window.addEventListener('load',Init);

    
   
        
    

   



    
  


 


 
 