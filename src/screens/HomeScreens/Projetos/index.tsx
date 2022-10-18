import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from "@fortawesome/free-solid-svg-icons"

import LinkPage from "../../../components/Link"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function Projetos({ projetos }) {
  console.log('Projetos', projetos)
    return (
        <BlocoProjetos id="Projetos">
   
            <h2 >Missions <FontAwesomeIcon icon={faRocket} className="fa-1x fa-inverse" /></h2>
        <aside>
          {projetos.allProjetos.map((titulos) => (
            <h2 key={ titulos.id}>{titulos.nomeProjeto }</h2>
          )
            
          )}
        
                <img />
                <h3>teste</h3>
                <LinkPage href={""} name={"link"} color={""} />
            </aside>
        <Carousel responsive={responsive}>
          {projetos.allProjetos.map((titulos) => (
            <CardProjetos key={titulos.id}>
               <Image src="./src/img/astronauta.gif" alt="Astronauta" width="500" height="500" />
               <h2 >{titulos.nomeProjeto}</h2>
          </CardProjetos>
           
          )
            
          )}
  <CardProjetos>Item 1</CardProjetos>
  <CardProjetos>Item 2</CardProjetos>
  <CardProjetos>Item 3</CardProjetos>
  <CardProjetos>Item 4</CardProjetos>
</Carousel>;
<pre>{ JSON.stringify(projetos, null, 4)}</pre>
        </BlocoProjetos>
    )
}

const CardProjetos = styled.article`
  background-color: antiquewhite;
  padding: 10px;
  margin: 0 10px;
  border-radius: 10px;
  width: 400px;
  height: 500px;
`

const BlocoProjetos = styled.section`
    padding: 20px;
    background-color: blue;
    width: 100%;
    height: 700px;
    margin-top: 3em;
`