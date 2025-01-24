addEventListener('DOMContentLoaded', () =>{
    const counts = document.querySelectorAll('.count_amount')
    const velocidad = 300;

    const animationCount = () =>{
        for(const count of counts){
            const countUpdate = () => {
                let cantidadMaxima = +count.dataset.cantidadTotal,
                valor_actual = +count.innerText,
                incremento = cantidadMaxima / velocidad

                if(valor_actual < cantidadMaxima){
                    count.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout(countUpdate, 3)
                }else{
                    count.innerText = cantidadMaxima
                }
            }
            countUpdate()
        }
    }
  
    const mostrarCount = elementos => {
        elementos.forEach(elemento => {
            if(elemento.isIntersecting){
                setTimeout(animationCount, 300)
            }
        });
    }

    const observer = new IntersectionObserver(mostrarCount, {
        threshold: 0.75
    })

    const elementosHMTL = document.querySelectorAll('.contador')
    elementosHMTL.forEach(elementoHMTL => {
        observer.observe(elementoHMTL)
    })

    
})

// boton cerrar
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.cerrar');
    const elementToClose = document.getElementById('index-count');

    closeButton.addEventListener('click', () => {
        elementToClose.style.display = 'none';
    });
});