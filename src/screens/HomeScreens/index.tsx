/* eslint-disable react/no-children-prop */

import styled from "styled-components";
import Header from "../../components/Header";
import Banner from "./Banner";




const Conteudo = styled.main`
    width: 700px;
    margin: 1rem auto;
    text-align: center;
    display: grid;

    @media only screen and (max-width: 700px) {
        width: 80%;
    }
`


export default function HomeScreen() {
    return (
        <>
            <Header />
            <Banner/>
            {/* <Conteudo>
            <h1>Bem vindo a home</h1>
              
                
            </Conteudo>
      */}
        </>
    )
}