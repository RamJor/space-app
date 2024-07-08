import styled from "styled-components"
import tags from "./tags.json"


const TagsContainer=styled.div`
display: flex;
align-items: center;
gap: 64px;
margin-top: 65px;
`
const Titulotags=styled.h3`
font-size: 24px;
font-weight: 400;
line-height: 32px;
color: #D9D9D9;
`

const Tags=styled.button`
font-size: 24px;
color: #FFFFFF;
background:rgba(217, 217, 217, 0.3) ;
border-radius: 10px;
cursor: pointer;
transition: background-color 0.3s ease;
padding: 12px;
box-sizing: border-box;
border: 2px solid transparent;
&:hover{
    border-color:#C98CF1;
}

`

const Div =styled.div`
display: flex;
gap: 24px;
justify-content: end;
`

const Tag = ({setTag}) => {
    return <> 
    <TagsContainer>
    <Titulotags>Buscar por tags: </Titulotags>
    <Div>
    {tags.map(tag=>{
        return <Tags key={tag.id} onClick={()=> setTag(tag.id)}>{tag.titulo}</Tags>
    })}
    </Div>
</TagsContainer>
    </>
}

export default Tag