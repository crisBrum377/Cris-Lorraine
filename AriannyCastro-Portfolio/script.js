function botao(num){
    valor = document.calc.visor.value += num;
}
function reseta(){
    limpar= " ";
    document.calc.visor.value= limpar;
    
}
function calcula(){
    resultado = eval(valor);
    document.calc.visor.value = resultado;
}