    function Init(){
        var localGetCart = [];
        var CartArr = [];
        // 抓購物車數量的dom
        const cartCount = document.querySelector('.cart_count');
        productBtns = document.querySelectorAll('.addCart');
        // const InitAddtoCart = document.querySelector('.addCart'); 
        var InitProductName = document.querySelector('.pro-title');
        reloadCart();
        function reloadCart(){
            var localGetCart = JSON.parse(localStorage.getItem('cartItems'));
            if(localGetCart){
                CartArr = localGetCart;
                cartCount.textContent = CartArr.length;
                CartArr.forEach(element=>{
                    if(element.name === InitProductName.innerText){
                        console.log(element.name);
                       productBtns[0].value = 'In Cart'
                        productBtns[0].classList.add('inputInCart');
                    }
                       
                   
               })
            }
            

        }
        // 抓所有加到購物車按鈕，並取得這頁點擊的商品資訊
        productBtns = document.querySelectorAll('.addCart');
        // console.log(productBtns);
        productBtns.forEach(productBtn => {
            productBtn.addEventListener('click',()=>{
                DomId = productBtn.id;
                // 找點擊的商品DOM
                const btnParent = productBtn.parentNode;
                const btnGrandpa = btnParent.parentNode;
                const ddd = btnGrandpa.parentNode.childNodes.item(1);
                const productImage = ddd.querySelector('img');
                const productPrice = btnGrandpa.querySelector('.pro-price');
                // console.log(productPrice.innerText);
                if(DomId === 'Beverage'){
                    productElement={
                        id:0,
                        image:productImage.src,
                        name:DomId,
                        price:productPrice.innerText,
                        amount:1
                    }
                }else if(DomId === 'Donut'){
                    productElement={
                        id:1,
                        image:productImage.src,
                        name:DomId,
                        price:productPrice.innerText,
                        amount:1
                    }
                }else if(DomId === 'Beer'){
                    productElement={
                        id:2,
                        image:productImage.src,
                        name:DomId,
                        price:productPrice.innerText,
                        amount:1
                    }
                }else if(DomId === 'Chips'){
                    productElement={
                        id:3,
                        image:productImage.src,
                        name:DomId,
                        price:productPrice.innerText,
                        amount:1
                    }
                }

                addToCart(DomId);
            });
        });

        function addToCart(DomId){
           if( productBtns.value !== 'In Cart'){
                CartArr.push(productElement);
                localStorage.setItem('cartItems',JSON.stringify(CartArr));
                reloadCart();
           }
            
        }
       
      
        
     }
    

    window.addEventListener('load',Init);


    // id:index ,
    // image: productImage.src,
    // name:productDOMContainer.querySelector('.item-title').innerText,
    // price:productDOMContainer.querySelector('.price').innerText,
    // amount:1

    
    
    
    // const alreadyInCart = JSON.parse(localStorage.getItem('productItems'));
    // console.log(alreadyInCart);
    
    // const productIntroArr = [];
    // const productNameContent = document.querySelector('pro-title');
    // if(alreadyInCart !== null ){
    // // 且不等於這頁的商品
    //     productIntroArr.push(alreadyInCart);
    // }
   
    // //  讀取localStorage資料
    // const mainCarts = JSON.parse(localStorage.getItem('mainItems'));
            
    // // 抓全部的加到購物車按鈕
    // const productAddtoCartBtn = document.querySelector('.addCart');

    // // 查詢購物車數量
    // const productCartCount = document.querySelector('.cart_count');
   
    // // 查詢商品介紹dom
    // const productContainer = document.querySelector('.pro-content');
    
    // // 抓圖片層dom
    // const productImage = document.querySelector('.pro-pic');
    
    // // 存放本頁商品資訊
    // const productIntro = {
    //         image: productImage.querySelector('img').src,
    //         name: productContainer.querySelector('.pro-title').textContent,
    //         price: productContainer.querySelector('.pro-price').textContent
    //     }

    // // 比對已在購物車商品是否和本頁商品重複
    // if(mainCarts !== null){
    //     productCartCount.textContent = mainCarts.length;
    //         mainCarts.forEach(mainCart => {
    //         if(mainCart.name === productIntro.name){
    //             productAddtoCartBtn.value = 'In Cart';
    //             productAddtoCartBtn.classList.add('inputInCart');
    //         }
    //     });   
    // }else{
    //     productCartCount.textContent = 0;
    // }

    // function productAddtoCart(){
    //     if( productAddtoCartBtn.value !== 'In Cart'){
    //         productIntroArr.push(productIntro);
    //         productCartCount.textContent = '1';
    //         localStorage.setItem('productItems',JSON.stringify(productIntroArr));
    //         productAddtoCartBtn.value = 'In Cart';
    //         productAddtoCartBtn.classList.add('inputInCart');
    //         if(mainCarts!== null ){
    //             productCartCount.textContent = mainCarts.length+1;
    //         }
    //     }
    // }