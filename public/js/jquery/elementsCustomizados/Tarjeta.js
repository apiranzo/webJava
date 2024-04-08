// EJEMPLO DE ELEMENTO CUSTOMIZADO

class Tarjeta extends HTMLElement {

    connectedCallback(){

        const foto = this.getAttribute('foto');
        const nombre = this.getAttribute('name');
        const precio = this.getAttribute('precio');
    
        this.innerHTML = `
        <div class="col">
        <div class="card">
          <img src="${foto}" class="card-img-top" alt="${nombre}">
          <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="card-footer">
                <small class="text-body-secondary">${precio}</small>
            </div>
            </div>
        </div>
        
        `;
    }

}

customElements.define('jl-tarjeta', Tarjeta)
