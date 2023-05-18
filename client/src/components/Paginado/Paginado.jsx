import React from "react";
import style from "./Paginado.module.css";

const Paginado = ({ cardPerPage, countryState, paginado }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(countryState.length / cardPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <ul className={style.ul}>
      {pageNumber &&
        pageNumber.map((numero) => (
          <a
            className={style.numero}
            key={numero}
            onClick={() => paginado(numero)}
          >
            {numero}
          </a>
        ))}
    </ul>
  );
};

export default Paginado;
