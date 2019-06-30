function Init(){
    var localGetCart = [];
    var CartArr = [];
    // 抓購物車數量的dom
    const cartCount = document.querySelector('.cart_count');
    // 抓購物車按鈕
    const addCartBtns = document.querySelectorAll('.addCart');
    
    ReloadCart()

    function ReloadCart(){
        var localGetCart = JSON.parse(localStorage.getItem('cartItems'));
        console.log(localGetCart);
        // console.log(CartArr);
        if(localGetCart){
            console.log(localGetCart);
            // console.log(localGetCart)
            CartArr = localGetCart;
            // console.log(CartArr);
            cartCount.textContent = CartArr.length;
          
            if(addCartBtns.length >0){
                CartId = CartArr.map(item =>item.id);
                CartId.forEach(element=>{
                    // console.log(addCartBtns[element])
                    addCartBtns[element].value='In Cart';
                    addCartBtns[element].classList.add('inputInCart'); 
                })
               
            }
                
        }
    }
 

    // 存商品資訊
    productArr = [];
    addCartBtns.forEach((addCartBtn,index,arrays) =>{
        const productDOMContainer = addCartBtn.previousElementSibling;
        const productDOMFisrt = productDOMContainer.children;
        const productImage = productDOMFisrt.item(0).querySelector('.product-image');
        productParam = 
            {   
                id:index ,
                image: productImage.src,
                name:productDOMContainer.querySelector('.item-title').innerText,
                price:productDOMContainer.querySelector('.price').innerText,
                amount:1
            }
        productArr.push(productParam);
        
    });



//加到購物車按鈕建立監聽事件
    addCartBtns.forEach((addCartBtn,index,arrays) =>{
        addCartBtn.addEventListener('click',()=>{
            
            if(addCartBtns[index].value !== 'In Cart'){
                // addCartBtns[index].value='In Cart';
                CartArr.push(productArr[index]);
                localStorage.setItem('cartItems',JSON.stringify(CartArr));
              
                ReloadCart();
                console.log(JSON.parse(localStorage.getItem('cartItems')));

            }else{
                alert('已加到購物車');
            }
        });
    });

}

    
window.addEventListener('load',Init);
       
         
       

       

 
