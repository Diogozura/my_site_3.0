import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from "@fortawesome/free-solid-svg-icons"
import LinkPage from "../../../components/Link"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { Title2 } from "../../../components/Title";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1210 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1210, min: 820 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 802, min: 0 },
    items: 1
  }
};


export default function Projetos({ projetos }) {
  
    return (
        <BlocoProjetos id="missoes">
   
        <Title2>Missions
          <FontAwesomeIcon icon={faRocket} className="fa-1x" />
        </Title2>
  
        <Carousel responsive={responsive}>
          {projetos.map((titulos) => (
            <CardProjetos key={titulos.id}>

              <Image src={titulos?.capaProjeto?.url.substr(31)} alt={titulos?.alt} width="350" height="170" />
              
              <h2 >{titulos.nomeProjeto}</h2>
              <br/>
              <DescricaoProjeto>{titulos?.descricao}</DescricaoProjeto>
              <br/>
              <LinkPage href={titulos?.linkProjeto} name={"Saiba mais"} color={"#000000"} border={"solid"} margin={"10px"} hoverBg={"#3434346c"} />
          </CardProjetos>
           
          )
            
          )}
</Carousel>
        </BlocoProjetos>
    )
}

const CardProjetos = styled.article`
  background-color: #EBEBEB;
  padding: 10px;
  border-radius: 10px;
  max-width: 380px;
  height: 430px;
  color:#000000;
  text-align: center;
`
const DescricaoProjeto = styled.p`
  text-align: justify;
  padding: 10px;
  margin-bottom: 1em;

`

const BlocoProjetos = styled.section`
    padding: 20px;
    background-color: #02020293;
    width: 100%;
    height: 100%;
    margin-bottom: 3em;
`
