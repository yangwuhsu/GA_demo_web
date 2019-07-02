function Init(){
   
    const camp = document.querySelector('.camp-title');
    const circle = document.querySelector('.camp-flex-circle');
    circleHeight = circle.offsetHeight;
   
    window.addEventListener('scroll',()=>{ 
        if(window.scrollY>(circle.offsetTop-window.innerHeight)+circleHeight && window.scrollY< circle.offsetTop+circleHeight){
            circle.classList.add('circleActive');
        }
        else{
            circle.classList.remove('circleActive');
        }
    });
}
window.addEventListener('load',Init);