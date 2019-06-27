 //  讀取localStorage資料
 const mainCarts = JSON.parse(localStorage.getItem('mainItems'));
        
 // 查詢加到購物車按鈕
 const productAddtoCartBtn = document.querySelector('[data-action = "proAddCartBtn"]');
 
 // 查詢購物車數量
 const productCartCount = document.querySelector('.cart_count');
 if(mainCarts !== null){
     productCartCount.textContent = mainCarts.length;
 }else{
     productCartCount.textContent = 0;
 }
 // 查詢商品介紹dom
 const productContainer = document.querySelector('.pro-content');
 
 // 抓圖片層dom
 const productImage = document.querySelector('.pro-pic');
 
 // 建立按鈕監聽事件
 productAddtoCartBtn.addEventListener('click',productAddtoCart);

 // 存放本頁商品資訊
 const productIntro = {
         image: productImage.querySelector('img').src,
         name: productContainer.querySelector('.pro-title').textContent,
         price: productContainer.querySelector('.pro-price').textContent
     }

 //  比對已在購物車商品是否和本頁商品重複
 if(mainCarts !== null){
         mainCarts.forEach(mainCart => {
         if(mainCart.name === productIntro.name){
             productAddtoCartBtn.value = 'In Cart';
             productAddtoCartBtn.classList.add('inputInCart');
         }
     });   
 }
 function productAddtoCart(){
     if( productAddtoCartBtn.value !== 'In Cart'){
         localStorage.setItem('productItems',JSON.stringify(productIntro));
         productAddtoCartBtn.value = 'In Cart';
         productAddtoCartBtn.classList.add('inputInCart');
     }
 }