function multiplicar(x){
    let elementoTextoTabla = document.getElementById('textoTabla');
    let textoNumeroTabla =  elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);

    //Obtener la tabla

    let elementoTableMultiplicar = document.getElementById('listaTabla');

    //Producir y mostrar resultados
    for (x=1; x<=10; x++){
        //Calcular el resultado
        let numeroResultado =   numeroTabla * x;


        //Armar sting con resultado
        let textoResultado = numeroTabla + ' por ' + x + ' es igual a ' + numeroResultado;


        // Crear un elemento de la lista
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTableMultiplicar.appendChild(itemLista)
    }
    
        
        
    }   
