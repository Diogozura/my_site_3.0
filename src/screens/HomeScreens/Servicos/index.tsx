import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faFeatherPointed, faGauge, faGaugeHigh, faLaptopCode, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import LinkPage from "../../../components/Link";
import { Title2 } from "../../../components/Title";

export default function Servicos() {
    return (
        <BlocoServico>
            <Title2>Precisa de um site? </Title2>
            <GrupSolucoes>

                <BlocoSolucoes>
                    <FontAwesomeIcon icon={faFeatherPointed} color="#000000" className="fa-4x" />
                    <Titulo>Leve</Titulo>
                </BlocoSolucoes>

                <BlocoSolucoes>
                    <FontAwesomeIcon icon={faLaptopCode} color="#000000" className="fa-4x" />
                    <Titulo>SEO</Titulo>
                </BlocoSolucoes>

                <BlocoSolucoes>
                    <FontAwesomeIcon icon={faGaugeHigh} color="#000000" className="fa-4x" />
                    <Titulo>Rápido</Titulo>
                </BlocoSolucoes>

            </GrupSolucoes>
           
            <LinkPage href={"https://t.me/Diogozura"} name={"Bora conversar sobre "} color={"#ffffff"} border={"solid"} margin={"20px"} hoverBg={"#9af6f46c"} />
            

        </BlocoServico>
    )
}


const BlocoServico = styled.section`
    background-color: #2f2f2f;
    width: 80%;
    margin: 2em auto;
    border-radius: 10px;
    text-align: center;
    padding: 20px;
`
const GrupSolucoes = styled.aside`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 2em;
`
const Titulo = styled.h4`
    color: #000000;
    font-size: 2em;
    margin-top: 1em;
`
const BlocoSolucoes = styled.article`
    width: 250px;
    height: 180px;
    padding: 20px;
    margin: 5px;
    border-radius: 10px;
    background-color: azure;
`