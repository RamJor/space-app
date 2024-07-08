import styled from "styled-components";
import Imagen from "../Galeria/Imagen";
import BotonIcono from "../Boton";


const Overlay=styled.div`
background-color: rgba(0, 0, 0, .7);
position:fixed;
top:0;
left: 0;
right: 0;
bottom: 0;
`
const DialogEstilizado=styled.dialog`
position: absolute;
top: 294px;
background-color: transparent;
border: none;
padding: 0;
border: 0;
width: 1156px;
display: flex;
justify-content: center;
box-sizing: border-box;
form {
  button {
    position: relative;
    top: 20px;
    right: 60px;
  }
}



`

const ModalZoom = ({foto, alCerrar,alAlternarFavorito})=>{

    return (
      <>
       {foto && <> 
       <Overlay/>
       <DialogEstilizado open={!!foto} onClose={alCerrar}>
          <Imagen foto={foto} expandida={true} alAlternarFavorito={alAlternarFavorito}/>
          <form method="dialog">
            <BotonIcono formMethod="dialog">
            <img src="img/iconos/cerrar.png" alt="Icono cerrar"/>
            </BotonIcono>
          </form>
        </DialogEstilizado></>}
      </>
    );

}

export default ModalZoom