import styled from "styled-components";
// import Image from "next/image";
// import { Animated } from "react-animated-css";
import Lottie from 'react-lottie';
import animationData from '../../../lotties/rocket-launch-animation-for-website.json';
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
            
            <Titulo>
                Seja bem vindo
            </Titulo>
            
            
            <div>
            <Lottie 
	    options={defaultOptions}
        height={350}
        width={350}
      />
            </div>
                
            
            
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
