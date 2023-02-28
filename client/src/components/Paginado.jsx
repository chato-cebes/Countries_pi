import React from "react";

const Paginado = ({ cardPerPage, countryState, paginado }) => {
  
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(countryState.length / cardPerPage); i++) {
    pageNumber.push(i)
}

  return (
      <nav>
      <ul>
          {pageNumber &&
          pageNumber.map((numero)=> <a key={numero} onClick={()=>paginado(numero)}> {numero} </a>)
          }
      </ul>
      </nav>
  );
};

export default Paginado;
