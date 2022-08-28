import './App.css';
import logo from './Imagenes/logo.png';
import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={logo}
          className= 'freecodecamp-logo'
          alt= 'logo'
        />
    
      </div>
      <div
        className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <Tarea />
      </div>
        

    </div>
  );
}

export default App;
