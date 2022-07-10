
// variables header

let links = document.querySelector('.items');
let menu_bars = document.getElementById('bars');
let icon= document.querySelector('.bars')


function Open_close() {
    icon.classList.toggle('open');
    links.classList.toggle('is_active');
}

// funciona creada para ocultar el menu al dar click en los links 
document.addEventListener('click',function(e){
    let clic =e.target;
    if( clic !== menu_bars && links.classList.contains('is_active')){  // por alguna extraña razón no funciona esto.
        links.classList.remove('is_active');
        icon.classList.remove('open');
        console.log(links,' clikeado fuera del icon')
    }  
    
},false);

// header scroll 

function mostrarborder() {
    let scroll = document.documentElement.scrollTop,
        nav = document.querySelector('nav'),
        content = document.querySelector('.contenedor');

    if (scroll > 0) {
        nav.classList.add('nav-bg');
        content.classList.add('sin-borde');
        links.classList.add('bg-scroll');
    } else {
        nav.classList.remove('nav-bg');
        content.classList.remove('sin-borde');
        links.classList.remove('bg-scroll');
    }


    // scroll body top-section
    let sidebar_top = document.querySelectorAll('.sections');

    for (let i = 0; i < sidebar_top.length; i++) {
        let top = sidebar_top[i].offsetTop;
        let edu = document.getElementById('section_edu');
        let title_edu = document.getElementById('des_edu');

        if (top - 150 < scroll) {

            if (sidebar_top[i] == edu) {
                title_edu.classList.add('active');

            } else {
                title_edu.classList.remove('active');

            }
        }
    }

}
window.addEventListener('scroll', mostrarborder);



//  responsive footer 
let links_footer = document.getElementById('links');
let f_logo = document.getElementById('footer_logo');
let layout = document.querySelector('.layout');
let title = document.querySelector('h1');




// al reducir el tamaño de la pantalla 
window.addEventListener("resize", function () {
    let w = window.innerWidth;
    if (w < 600) {
        f_logo.classList.add('min-width');
    } else {
        f_logo.classList.remove('min-width');
    }

    if(w > 850){
        layout.classList.add('align-items');
    }else{
        layout.classList.remove('align-items');
    }

    if(w > 950){
        title.classList.add('title');
    }else if(w < 950){
        title.classList.remove('title');
    }
});


// funciones de consumo de api y localStorage 


const url = "https://jhonpillaca.github.io/index.json";

function ObtenerApi() {

    fetch(url).then(res => res.json())
        .then(data => {

            let categorias = data.categorias,
                educacion = data.edu_online,
                servicios = data.servicios,
                users = data.usuarios,
                cursos = data.cursos;


            if (typeof (Storage) !== "undefined") {
                //    almacenamos los datos de la api en localstorage
                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("cursos", JSON.stringify(cursos));
                localStorage.setItem("servicios", JSON.stringify(servicios));
                localStorage.setItem("edu_online", JSON.stringify(educacion));
                localStorage.setItem("categorias", JSON.stringify(categorias));
            } else {
                console.error('No ha sido posible almacenar datos en la memoria');
            }



            // categorías destacadas 

            let ult_categoria = document.getElementById('categoria');

            const catd = categorias.slice(2, 6).map(cate => `
       <div class="card">
                    <figure>
                        <img src=" ${cate.cat_img} " alt="${cate.cat_name}">
                    </figure>
                    <h4>${cate.cat_name}</h4>
                </div>
       `).join('');
            ult_categoria.innerHTML = catd;
            // comprobamos si el navegador es compatible 


            let edu = document.getElementById('section_edu');

            const card_edu = educacion.forEach(ed => {
                edu.innerHTML += `
            <div class="card">
            <figure>
                <img src=" ${ed.img}" alt="">
                <h4>${ed.name}</h4>
            </figure>
            <p>${ed.descrip}</p>
           </div>`
            });


        });


}

ObtenerApi();

