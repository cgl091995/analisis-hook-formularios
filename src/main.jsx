import { StrictMode } from 'react'                //importamos StrictMode desde react
import { createRoot } from 'react-dom/client'    //importamos createRoot desde react. createRoot nos permitirá crear una raiz donde ejecturamos los componentes de react en el dom
import './index.css'                            //importamos el index.css
import 'bootstrap/dist/css/bootstrap.min.css';  //importamos bootstrap
import App from './App.jsx'                     //importamos la función App del archijo App.jsx

createRoot(document.getElementById('root')).render( //accedemos al dom (html). concretamente al div id root. donde renderizaremos nuestra página     
  <StrictMode>
    <App />       
  </StrictMode>,
)

//StrictMode. componente que nos permite activar algunas comprobaciones de desarrollo en React. Por ejemplo, detecta componentes que se renderizan de forma innecesaria o funcionalidades obsoletas que se están usando. La App, donde instanciaremos los componentes estará restringida por este componente