import styled from "styled-components";

export const Landing = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .centro {
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    //border: 2px solid red;
    justify-content: center;
  }

  .bloquedebanderas1 {
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 100%;
    display: flex;
    filter: grayscale(60%);
  }

  .lineas1 {
    height: 30px;
    padding-top: 1%;
    display: flex;
    animation: scroll 40s linear infinite;
    -webkit-animation: scroll 40s linear infinite;
    width: calc(200px * 50);
  }

  .bloquedebanderas2 {
    display: flex;
    position: absolute;
    bottom: 0;
    overflow: hidden;
    width: 100%;
  }

  .lineas2 {
    display: flex;
    animation: scroll 40s linear infinite;
    -webkit-animation: scroll 40s linear infinite;
    width: fit-content;
  }

  .labelNombres {
    display: block;
    width: max-content;
    height: 50px;
    justify-content: center;
  }

  @keyframes scroll {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(calc(-200px * 5));
      transform: translateX(-200px * 5);
    }
  }
  .centro img {
    object-fit: cover;
  }

  .legenda {
    position: absolute;
    top: 0;
    left: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-wrap: break-word;
    height: 90%;
  }

  .nombre {
    position: relative;
    top: 0;
    border-radius: 10px;
    border: none;
    width: 700px;
    height: 200px;
    color: blanchedalmond;
    font-size: 150px;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .btnEntrar {
    //border: 3px solid #b8b7a4;
    border: none;
    background-color: #10cc2f;
    border-radius: 5px;
    padding: 10px 2em;
    font-weight: bold;
    color: #fff;
    width: 120px;
  }

  .btnEntrar:hover {
    background-color: #fcff39;
    color: #000000;
  }
`;

/*
 .class{
    position:relative;
    background: #b8b7a4;
    padding-inline-start: 0%;
    display: inline-flex;
    width: 99%;
    height: 99%;
    display: flex;
    flex-direction: column;
}

.image{
    height: 100%;
    width: 100%;
    object-fit: cover;  
    display: flex;
    flex-direction: column;
}

.div{
    position: absolute;
    background-color: rgb(70, 29, 29);
    top: 35%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 500px;
    border: 2px solid blanchedalmond;
    color: whitesmoke
}



.Button{
    border: 3px solid #b8b7a4;
    background-color: #10cc2f;
    border-radius: 5px;
    padding: 10px 2em;
    font-weight: bold;
    color: #fff;
}

.Button:hover, input[type="submit"]:focus {
        background-color: #fcff39;
        color: #000000;

} 
*/
