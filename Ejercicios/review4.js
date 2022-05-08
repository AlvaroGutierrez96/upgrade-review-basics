/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array
cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos. */

const array=['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
const findArrayIndex = (array,text) => {
    for (const item of array) {
        if(text == item){
            console.log(array.indexOf(item))
        }
    }
}

