import styled from "styled-components";
import GlobalStyles from "./components/Globalstyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria";
import fotos from "./fotos.json"
import ModalZoom from "./components/ModalZoom";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

const FondoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );

  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
width: 1440px;
max-width:100%;
margin: 0 auto;
`
const Maincontainer = styled.main`
  display: flex;
  gap: 24px;
`

const ContenidoGaleria = styled.section`
display: flex;
flex-direction:column ;
flex-grow: 1;
`

const App= ()=> {

  const [fotosDeGaleria, setFotosDeGaleria]= useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  //Utilizaremos useEffect y useState para crear el cambio dinamico a las tags y al filtrado

  //definimos useState
  const[tag, setTag]=useState(0)
  const [filtro,setFiltro]=useState('')
  //Utilizamos useEffect para ejecutar código en cada renderización
   useEffect(()=>{
    const fotosFiltradas = fotos.filter(foto=>{
      const filtroPorTag =!tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDeGaleria(fotosFiltradas)

   }, [filtro,tag])
  const alAlternarFavorito= (foto) => {
    
    if (foto.id=== fotoSelecionada?.id){
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !foto.favorita
      })
    }


    setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria=>{
      return{
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita: fotoDeGaleria.favorita
      }
    }))
  }

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera filtro={filtro}
          setFiltro={setFiltro}/>
          <Maincontainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner
                texto={"La galería más completa de fotos"}
                backgroundImage={banner}
              />
              <Galeria alSeleccionarFoto={foto=>setFotoSelecionada(foto)} 
              alAlternarFavorito={alAlternarFavorito}
              fotos={fotosDeGaleria}
              setTag={setTag}/>
            </ContenidoGaleria>
          </Maincontainer>
        </AppContainer>
        <ModalZoom foto={fotoSelecionada} 
        alCerrar={()=> setFotoSelecionada(null)} 
        alAlternarFavorito={alAlternarFavorito} />
        <Footer/>
      </FondoGradiente>
    </>
  );
}

export default App;
