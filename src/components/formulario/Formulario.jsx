import { useForm } from "../../hooks/useForm" //importamos función desectruturada useForm desde carpeta hooks archivo useForm 



export const Formulario = () => {          //exportamos y creamos función Formulario

    const { formulario, handlerChange, handlerSubmit } = useForm()  //creamos constante donde desestructuramos las funciones y el formulario recibido del hook useForm



    return (  //pintamos el formulario
        <>
            <h1>Formulario</h1>

            {formulario != "" && <code><pre>{JSON.stringify(formulario, null, " ")}</pre></code>} 
            {/* si formulario es distinto a valor(string) vacio entonces escribir en formato json los valores en el dom */}
            { /* formulario con con id=formulario, name=formulario y evento onSubmit que ejecutamos en la función handlerSubmit */ }
            <form
                id="formulario"
                name="formulario"
                onSubmit={handlerSubmit} 
            >
                <div className="mb-3">
                    {/*etiqueta para nombre. sirve de identificar labels */}
                    <label
                        htmlFor="nombre"        
                        className="form-label"> 
                        {/* para especificar clase de css. en html utilizamos class */}
                        Nombre
                    </label>
                    {/*el input es el espacio donde escribiremos en el formulario.*/}
                    {/*el type indica el fórmato que aceptará el espacio. en este caso texto*/}
                    {/* para especificar clase de css. en html utilizamos class*/}
                    {/* atributo name que servirá al backend para identificar el input */}
                    {/* atributo id para identificar el input */}
                    {/* valor que recibiremos en el espacio del nombre una vez rellenado el formulario */}
                    {/* evento onChangue, que permitirá modificar el valor del formulario. */}
                    <input                              
                        type="text"                     
                        className="form-control"        
                        id="nombre"                     
                        name='nombre'                   
                        value={formulario.nombre}       
                        onChange={handlerChange}        
                    />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="curso"
                        className="form-label">
                        Curso
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="curso"
                        name="curso"
                        value={formulario.curso}
                        onChange={handlerChange}
                    />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="comentario"
                        className="form-label">
                        Comentario</label>
                    <textarea
                        className="form-control"
                        id="comentario"
                        name="comentario"
                        value={formulario.comentario}
                        onChange={handlerChange}
                    />
                </div>

                 {/*atributo botón tipo submit */}
                 {/*clase boostrap */}
                 {/*event submit que permitirá enviar el formulario */}

                <button
                    type="submit"          
                    className="btn btn-dark" 
                    onSubmit={handlerSubmit}    
                >Enviar
                </button>

            </form>

        </>
    )
}
