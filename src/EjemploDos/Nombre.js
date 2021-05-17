import React from "react";
import PropTypes from "prop-types";

class Nombre extends React.Component {
  componentDidMount() {
    alert("Tedamos la binevenidad " + this.props.nombre);
  }

  componentWillUnmount(){
      alert('adios')
  }

  render() {
    return (
      <div>
        {this.props.nombre}

        <button onClick={ this.props.borrarNombreDeLista}>X</button>
      </div>
    );
  }
}

Nombre.propTypes = {
  nombre: PropTypes.string.isRequired,
  borrarNombreDeLista: PropTypes.func.isRequired
};

export default Nombre;
