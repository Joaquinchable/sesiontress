import React from "react";
import Nombre from "./Nombre";

class EjemploDos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: " ",
      mensaje: " ",
      listaNombres: ["Bedu"], // inicio mi estado
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.listaNombres !== prevState.listaNombres) {
      this.setState({
        mensaje: `longitud de la lista es : ${this.state.listaNombres.length}`,
      });
    }
  }

  handleInputChange = (event) => {
    // creo una funcion para el registro que va contener los cambios en mi input
    this.setState({
      nombre: event.target.value, // ve todos los cambios de todo lo que escriba en mi input
    });
  };

  handleClick = () => {
    const nombreEnEstado = this.state.nombre;
    // Validar si el nombre existe (que no este Vacio)
    if (!nombreEnEstado) return;
    // agregar el nombre a la lista de nombres
    const listaActualizada = [...this.state.listaNombres, nombreEnEstado];
    //Actualizar el estado (añadir nombre a la lista y va limpiar nombre)
    this.setState({
      nombre: " ",
      listaNombres: listaActualizada,
    });
  };

  borrarNombreDeLista = (key) => {
    const copiaLista = [...this.state.listaNombres];
    // borro los elemento de la lista que indique mi click
    copiaLista.splice(key, 1);
    this.setState({
      listaNombres: copiaLista,
    });
  };

  render() {
    return (
      <div>
          {this.state.mensaje}
        <input value={this.state.nombre} onChange={this.handleInputChange} />
        <button onClick={this.handleClick}>Agregar Nombre</button>
        <ul>
          {this.state.listaNombres.map((nmbr, key) => (
            <li key={key}>
              <Nombre
                nombre={nmbr}
                borrarNombreDeLista={() => this.borrarNombreDeLista(key)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EjemploDos;

//linea 22 le paso el valor de mi estado nombre el cual va recibir cada nombre que escriba en el input y tambien le paso mi funcion ve todos lo cambios en el input
//linea 24 Genero mi lista donde se alojaran mis nombres a forma de lista , y uso el metodo map
