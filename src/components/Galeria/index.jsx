import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "../Populares";
import Tag from "./Tags";
import Imagen from "./Imagen";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SeccionFluida = styled.section`
  flex-grow: 1;
`;
const ImagenesContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({ fotos = [], alSeleccionarFoto, alAlternarFavorito, setTag, tag }) => {
  return (
    <>
      <Tag setTag={setTag} tag={tag} />
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo>Navegue por la galería</Titulo>
          
          <ImagenesContainer>
          {fotos.map((foto) => (
              <Imagen 
              alAlternarFavorito={alAlternarFavorito}
              alSolicitarZoom={alSeleccionarFoto} key={foto.id} foto={foto} />
            ))}
          </ImagenesContainer>
        </SeccionFluida>
        <Populares />

      </GaleriaContainer>
    </>
  );
};

export default Galeria;
