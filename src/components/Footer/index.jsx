import styled from "styled-components"

const PieEstilizado=styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-top: 100px;
background-color: #04244F;
padding: 22px;
box-sizing: border-box;
`

const IconoContenedor=styled.ul`
margin: 0;
padding: 0;
list-style: none;
li {
    display: inline-block;
    margin-right: 32px;
}
`

const PieTexto = styled.p`
font-size: 16px;
color: white;
margin: 0;
`
const Footer = () =>{
    return(
    <PieEstilizado>
        <IconoContenedor>
            <li>
            <a href="">
                <img src="img/redes/facebook.svg" alt="Icono facebook" />
            </a>
            </li>
            <li>
            <a href="">
            <img src="img/redes/twitter.svg" alt="Icono X" />
            </a>
            </li>
            <li>
            <a href="">
            <img src="img/redes/instagram.svg" alt="Icono instagram" />
            </a>
            </li>
        </IconoContenedor>
        <PieTexto>Desarrollado por Jorge Ramírez</PieTexto>
    </PieEstilizado>
)
}

export default Footer