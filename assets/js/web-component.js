
let storage_User = [],
    storage_Curso = [],
    storage_categori=[],
    storage_service=[];
 



// cargamos los dotos desde localStorage 
function CargarDatos() {
    if (localStorage.getItem("users")) {
        storage_User = JSON.parse(localStorage.getItem("users"));
        storage_Curso = JSON.parse(localStorage.getItem("cursos"));
        storage_categori = JSON.parse(localStorage.getItem("categorias"));
        storage_service = JSON.parse(localStorage.getItem("servicios"));


    } else {
        console.log('No hay datos en localStorage');
    }


}

CargarDatos();


// --- en desarrollo la implementación del componente de usuarios--
class User extends HTMLElement {

    // creamos el constructor para las variables locales y inicializar algunos valores 
    constructor() {
        super();


        // let shadow = this.attachShadow({mode: 'open'});

        this.divCard = document.createElement("div"); // creamos el elemento 
        this.divCard.className = "card item"; // agregando la clase css

        this.appendChild(this.divCard);
    }

    connectedCallback() {

    }
}


customElements.define("app-userslider", User);




// certificate 


class Certifica extends HTMLElement {

    constructor() {
        super();


        // elemento que englobará los otros elementos 
        this.Section = document.createElement("section");
        this.Section.className = "certificate"; // agregamos una classe al elemento creado.

        this.appendChild(this.Section);

    }

    connectedCallback() {
        this.Section.innerHTML = `
        <div class="header">
        <h2>Certefícate al finalizar</h2>
    </div>

    <div class="card">
        <header>
            <div class="logo">
                <h3>Sirius</h3>
                <span>aprender,</span>
                <span>mejora</span>
            </div>
            <figure><img src="./assets/imgs/user.png" alt="student"></figure>

        </header>

        <div class="description">
            <p>Certificado a:</p>
            <b>juan josé tovar a.</b>
            <p class="separator"></p>
            <p class="valid">Por haber completado el curso de 2 hora(s) y 30 minutos</p>
            <h5>Excel avanzado de cero a master</h5>
            <p>Dictado por:</p>
            <b>juan josé guillermo s.</b>
            <p class="valid">Tras haber realizado y aprobado el proyecto final del curso</p>

            <footer>
                <div class="firma">
                    <figure><img src="./assets/imgs/firma-docente.png" alt="firma"></figure>
                    <p class="separator"></p>

                    <b>ismael f.</b>
                    <p class="cargo">Fundador</p>
                </div>
                <div class="firma">
                    <figure><img src="./assets/imgs/firma-director.png" alt="firma"></figure>
                    <p class="separator"></p>

                    <b>carlos g.</b>
                    <p class="cargo">Docente</p>
                </div>
            </footer>
        </div>
    </div>
        `
    }


}
// (app-certificado) => será el nombre con la que llamaremos este componente en donde nosotros queramos.
customElements.define("app-certificado", Certifica); // siempre tenemos que anteponer algo antes del nombre, si no, no funciona




class Cursos extends HTMLElement {

    constructor() {
        super();

        // elemento que englobará los otros elementos 
        this.wrapper = document.createElement("div");
        this.wrapper.className="wrapper";

        this.appendChild(this.wrapper);
    }

    connectedCallback() {

        storage_Curso.slice(0,28).map(curso => {
            this.wrapper.innerHTML += `
                    <div class="card">
                        <figure>
                            <img src=" ${curso.img}"
                                alt="${curso.nombre}">
                        </figure>
                        <div class="description">
                            <span>${curso.categoria}</span>
                            <h4>${curso.nombre}</h4>
                            <div class="detalle">
                                <p><i class="fa-solid fa-user-group"></i>${curso.estudiantes} <span><i class="fa-solid fa-clock"></i>${curso.hora}hrs ${curso.minuto}mints</span></p>
                                <div class="group_button">
                                    <button>Empezar curso</button>
                                    <span><i class="fa-solid fa-heart"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
            `
        })

    }
}

customElements.define("app-cursos", Cursos); 


class Categoria extends HTMLElement{

    constructor(){
        super();

        this.article = document.createElement("article");

        this.appendChild(this.article);
    }

    connectedCallback(){
        storage_categori.forEach(cate=>{
            this.article.innerHTML += `
            <div class="card">
                <figure>
                    <img src=" ${cate.cat_img} " alt="${cate.cat_name}">
                </figure>
                <h4>${cate.cat_name}</h4>
            </div>
            `
        });
    }
}

customElements.define("app-categoria",Categoria);