// despliegue de respuestas
const accordion = document.getElementsByClassName("contentbx");
   //la constante no permite nombres con -.
    for(i=0; i<accordion.length; i++){
        accordion[i].addEventListener('click' , function(){
            this.classList.toggle('active')
        })
    }
 
 //  menu-scroll
let ubicacionPrincipal=window.pageYOffset;
window.onscroll=function() {
    let Desplazamiento_Actual=window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('article-header__main-principal').style.top='0';
    }
    else{
        document.getElementById('article-header__main-principal').style.top='-103px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;

}


// para que formulario no muestre el mensaje de la API "formspre" y tambien buelva solo a la pagina web.

const $form=document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)
async function handleSubmit(event){
    event.preventDefault()
     const form = new FormData(this)
     const response = await fetch(this.action,{
         method: this.method,
         body: form,
         headers:{
             'Accept': 'application/json'
         }
     })
     if (response.ok) {
         this.reset()
         alert('Gracias por contactarnos, le enviare su cotizacion pronto.')
     }
}