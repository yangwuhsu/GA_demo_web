        // 建立一個空陣列存點擊過的商品
        let cart = [];
        //查詢按鈕：
        const addCartBtns = document.querySelectorAll('.addCart');
        //查詢購物車數量
        const cartCount = document.querySelector('.cart_count');
        // 購物車數量預設為零
        var count = 0;
        
        //加到購物車按鈕建立監聽事件
        addCartBtns.forEach(addCartBtn =>{
            addCartBtn.addEventListener('click',()=>{
                // 購物車數量加ㄧ
                count = count+1;
                cartCount.innerText = count; 

                // 獲取a層：
                const productDOMContainer = addCartBtn.previousElementSibling;

                // 獲取a層下的圖片子層：
                const productDOMFisrt = productDOMContainer.children;
                
                //獲取圖片層：
                const productImage = productDOMFisrt.item(0).querySelector('.product-image');
               
                // 建立商品資訊物件
                const product = {
                    image:productImage.src,
                    name:productDOMContainer.querySelector('.item-title').innerText,
                    price:productDOMContainer.querySelector('.price').innerText
                }
                //  判定是否已存在購物車
                const isInCart = (cart.filter(cartItem=>(cartItem.name === product.name)).length > 0);
                if(!isInCart){
                    cart.push(product);
                    addCartBtn.value = 'In Cart';
                    localStorage.setItem('mainItems',JSON.stringify(cart)) 
                    addCartBtn.classList.add('inputInCart');  
                    console.log(JSON.parse(localStorage.getItem('mainItems')));
                         
                }
            });
        })







