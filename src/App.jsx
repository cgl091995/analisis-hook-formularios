import { Formulario } from "./components/formulario/Formulario"  //importamos función formulario desde...

function App() {  //creamos función App 


  return (                      //  en react utilizamos el return para pintar en el dom. dentro del return creamos un fragment en caso de que vayamos a pintar varios elemento de bloque
    <>
      <div className="container mt-5">
        <Formulario />      {/*dentro del div pintaremos el html creado en el componente Formulario */}
      </div>
    </>
  )
}

export default App      //exportamos por defecto la función App
