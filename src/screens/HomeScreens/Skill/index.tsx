import { faScrewdriverWrench, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Key } from "react";
import styled from 'styled-components'
import { Title2 } from "../../../components/Title";

export default function Skill({ ferramentas }) {
    console.log(ferramentas)
    return (
        <MySkill>
            <Title2>Ferramentas <FontAwesomeIcon icon={faScrewdriverWrench} className="fa-1x fa-inverse" /></Title2>
            <MySkillpicture >
            {ferramentas.map((dados: { imgFerramenta: { id: Key | null | undefined; url: string; alt: string | undefined; }; }) => (         
                    <Image key={dados.imgFerramenta?.id} src={dados.imgFerramenta?.url.substr(31)} alt={dados.imgFerramenta?.alt} width="150" height="100" />
                    
            ))}
                
            </MySkillpicture>

        </MySkill>
    )
}


const MySkillpicture = styled.picture`
   
    height: 100px;
    min-width: 1000px;
    overflow-x: auto;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
`
const MySkill = styled.section`
background-color: lightblue;
text-align: center;
margin: auto;
padding: 10px;
/* height: 130px; */
width: 100%;
  overflow-x: auto;
`