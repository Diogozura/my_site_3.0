import styled from "styled-components";
import Image from "next/image";
import { Animated } from "react-animated-css";
import Lottie from 'react-lottie';
import animationData from '../../../lotties/spaceman.json';
import React from "react";

export default function Banner() {
 

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <BlocoBanner>
             <Animated Animated animationIn="fadeInLeft" animationInDuration={3000} isVisible={true}>
            <Titulo>
                Seja bem vindo
            </Titulo>
            </Animated>
            
            <Animated Animated animationIn="fadeInRight" animationInDuration={3000} isVisible={true}>
                <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
            
            </Animated>
        </BlocoBanner>
     
    )
}

const BlocoBanner = styled.section`
    
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
margin-bottom: 10em;
`
const Titulo = styled.h2`
    font-size: 3em;
`
