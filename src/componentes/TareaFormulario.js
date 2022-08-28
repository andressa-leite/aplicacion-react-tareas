import React, {useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
        console.log("enviando");
    }

    const manejarEnvio = e => {
        e.preventDefault();
        
       const tareaNueva = {
            id: uuidv4(), //npm install uuid
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    } 


  

    return(
        <form className='tarea-formularo'
              onSubmit={manejarEnvio}>
            <input 
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    )
}

export default TareaFormulario;