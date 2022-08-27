import './App.css';
import logo from './Imagenes/logo.png';

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

      </div>
        

    </div>
  );
}

export default App;
