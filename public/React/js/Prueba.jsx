/**
 *  Cada componente se inicializa con la función nombreComponente()
 */
import React from 'react';
import registros from '../json/registros.json';


const MisRegistros = () => {
    return (
        <div>
          <ul>
            {registros.map((registro, index) => (
              <li key={index}>
                Nombre: {registro.nombre}, Precio: {registro.precio}, Stock: {registro.stock}
              </li>
            ))}
          </ul>
        </div>
      );
};

export default MisRegistros;
