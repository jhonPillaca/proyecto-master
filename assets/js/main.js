
// variables header

   let links=document.querySelector('.items');


 function   Open_close(){
     
    links.classList.toggle('is_active');
}


// header scroll 

function mostrarborder() {
   let scroll = document.documentElement.scrollTop,
       nav = document.querySelector('nav'),
       content=document.querySelector('.contenedor');
      
if(scroll >0){
   nav.classList.add('nav-bg');
   content.classList.add('sin-borde');
   links.classList.add('bg-scroll');
}else{
   nav.classList.remove('nav-bg');
   content.classList.remove('sin-borde');
   links.classList.remove('bg-scroll');
}

}
window.addEventListener('scroll', mostrarborder);
