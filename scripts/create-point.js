/*let UF = document.querySelector("select[name=uf]")
    .addEventListener("change", ()=> {console.log("mudança")})
    */
   function populateUFs(){
       const uf = document.querySelector("select[name=uf]");
       fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
       
       //Deu Certo Usa Them
       .then((resposta) => { return resposta.json()}) // Completo
       //.then( res => res.json() ) // Simplificado
       .then( states => {

        console.log("____"+states)
     
    for( const state of states ){
        uf.innerHTML += `<option value="${state.id}">${state.nome}</option>`
    }
       })
   }

    populateUFs();

   function getCities(event){
    const cityeSelect = document.querySelector("select[name=city]")
    
    const ufValue = event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    
    console.log(fetch(url))

   }

document
.querySelector("select[name=uf")
.addEventListener("change", getCities)


