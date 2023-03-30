const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const form = document.querySelector('#form');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumaValues);

function sumaValues(event){
    console.log(event);
    event.preventDefault()
    if(Number(input1.value) && Number(input2.value) > 0){
        const sumaInput = Number(input1.value) +  Number(input2.value);
        pResult.innerText =  'El resultado es ' + sumaInput;
    }else{
        pResult.innerText = 'Los datos ingresados no son validos';
    }
}






