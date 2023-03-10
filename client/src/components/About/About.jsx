import style from "./About.module.css"


const About = () => {
  return (
    <div className={style.legend}>
      
      <h2>Bienvenidoa a este Proyecto individual.</h2>
      
      <p>
        La app se creo usando React, Redux, Node y Postgres, el fin de este proyecto 
        es practicar las habiliadades aprendidas durante el bootcamp de Henry en el desarrollo
        de una SAP, al final del proceso se espera no solo que sea una pagina funcional, si no que
        la visita a la misma sea agradable y deje buena impresion.
      </p>
      <p>
        Por otro lado la SAP usa un tematica de paises trayendo la informacion de una Api Rest la cual 
        con la ayuda de Postgres se guarda en el una db para acudir a ella se manera interna para luego
         usarla en los componentes redenderizados. La vista es sencilla ya que mediante tarjetas muestra 
         informacion relacionada a paises, tales como nombre, bandera, poblacion idioma, ademas de permitir 
         ingresar actividades turisticas relacionadas los paises, de esta maner a permite crear, modificar y eliminar
         actividades asociada a cada paises
      </p>

      <p>
        Por ultimo, este es un escalon de la la inmensa carrera que queda.
        Es la primera SAP, no la ultima.
      </p>

      <p>"Chato"</p>
    </div>
  );
};

export default About;
