        // 建立一個空陣列存點擊過的內容
        let cart = [];
        //查詢按鈕：
        const addCartBtns = document.querySelectorAll('.addCart');

        //查詢商品
        addCartBtns.forEach(addCartBtn =>{
            addCartBtn.addEventListener('click',()=>{
                // 獲取a層：
                const productDOMContainer = addCartBtn.previousElementSibling;

                // 獲取a層下的圖片子層：
                const productDOMFisrt = productDOMContainer.children;
                
                //獲取圖片層：
                const productImage = productDOMFisrt.item(0).querySelector('.product-image');
               
                // 建立物件存商品資訊
                const product = {
                    image:productImage.src,
                    name:productDOMContainer.querySelector('.item-title').innerText,
                    price:productDOMContainer.querySelector('.price')
                }
                
                //  判定是否已存在購物車
                const isInCart = (cart.filter(cartItem=>(cartItem.name === product.name)).length > 0);
                if(!isInCart){
                    cart.push(product);
                    addCartBtn.innerText = 'In Cart';
                    localStorage.setItem('mainItems',JSON.stringify(cart)) 
                    addCartBtn.classList.add('inputInCart');
                    console.log(addCartBtn.classList);            
                }
            });
        })







