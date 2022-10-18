import styled from "styled-components";
import Image from "next/image";
import { Animated } from "react-animated-css";

export default function Banner() {
    return (
        <BlocoBanner>
             <Animated Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={3000} animationOutDuration={3000} isVisible={true}>
            <Titulo>
                Seja bem vindo
            </Titulo>
            </Animated>
            
            <Image  src="/astronauta.gif" width="500" height="500" />
        </BlocoBanner>
     
    )
}

const BlocoBanner = styled.section`
    
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
`
const Titulo = styled.h2`
    font-size: 3em;
`
