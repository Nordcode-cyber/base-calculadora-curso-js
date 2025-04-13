//agrega a la pantalla el valor del boton de la calculadora
function agregar(valor){
    document.getElementById('pantalla').value +=valor
}
//esta funcion vacia la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}
function calcular(){
    //ejecuta los calculos con el valor de pantalla
    //function eval(x: string): any Evaluates JavaScript code and executes it.

    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado

}