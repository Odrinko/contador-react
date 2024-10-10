//importacion de los estilos de sass
import './styles/contador.scss';


//aqui se importa react y el hook useState desde la libreria de React
import React, { useState } from 'react';

//Aqui se define el componente funcional 'Contador'
const Contador = () => {
    //usamos el hook state para la creacion de una variable de estado 'contador'
    //inciamos el contador en 0
    const [contador, setContador] = useState(0); //el use State es un hook que permite manejar los estados de los componentes funcionales.

    //funcion para aumentar el contafor en 1 cada vez que se llama
    const incrementar = () => {
        setContador(contador + 1);
    };


    //funcion para disminuir el contador en uno cada vez que se llama

    const disminuir = () => {
        setContador(contador - 1);
    };

    //el jsx que devulve el componente define la interfaz visual
    return (
        <div className='contador'>

            <div className='contador_contenido'>
                <h1 className='contador_titulo'>Contador simple</h1>

                <p className='contador_valor'>El valor del contador es: {contador}</p>

                <button className='contador_boton' onClick={incrementar}>Incrementar</button>

                <button className='contador_boton' onClick={disminuir}>Disminuir</button>

            </div>
        </div>
    );
};


//exportamos el componente para poder usarlo en otros archivos
export default Contador;

