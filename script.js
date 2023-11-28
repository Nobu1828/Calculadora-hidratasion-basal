holliday()

let peso = 32


function holliday(peso) {
    
    let resultado = peso

    if (peso <= 10 && peso > 0) {
        resultado = (peso * 10)
    }

    else if (peso > 10 && peso <= 20) {
        resultado = (peso - 10) * 50 + 1000;
    } 
    
    else if (peso > 20 && peso <= 30) {
        resultado = (peso - 20) * 20 + 1500
    }
    var resultado
    else if (peso > 30){
        resultado = (( (peso * 4) + 7) / (peso + 90)) * 1500 , (( (peso * 4) + 7) / (peso + 90)) * 2000
        
    }

    return resultado

}
    console.log (holliday(peso))

