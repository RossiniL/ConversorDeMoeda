const button =  document.querySelector('button')

const convertValues = async() =>{
    const valorConversao = parseFloat(document.getElementById('valorDigitado').value) ;
    const resultadoConversao = document.getElementById('resultadoConversao');

    const moeda1 = document.getElementById('moeda1');
    const moeda2 = document.getElementById('moeda2');
    
    const dolar = 5.77;

    const valorConvertido = valorConversao / dolar;
    
    resultadoConversao.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
        ).format(valorConvertido);

}


button.addEventListener('click', convertValues )


