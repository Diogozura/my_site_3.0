/* eslint-disable react/no-children-prop */

import styled from "styled-components";
import Header from "../../components/Header";
import { cmsService } from "../../infra/cms/cmsService";
import Banner from "./Banner";
import Projetos from "./Projetos";




const Conteudo = styled.main`
    width: 700px;
    margin: 1rem auto;
    text-align: center;
    display: grid;

    @media only screen and (max-width: 700px) {
        width: 80%;
    }
`




export default function HomeScreen({projetos}) {
    return (
        <>
            <Header />
           
            <Banner />
            <Projetos projetos={projetos}/>
            {/* <Conteudo>
            <h1>Bem vindo a home</h1>
              
                
            </Conteudo>
      */}
        </>
    )
}

export async function getStaticProps() {
    
    const contentQuery = `
    query{
        allProjetos{
        id
        nomeProjeto
        capaProjeto {
          id
          alt
          url
          format
        }
    }
    }
    `


    const { data } = await cmsService({
        query: contentQuery
    })
    console.log("dados CMS", data)

    return {
        props: {
            projetos: data
        }, // will be passed to the page component as props
      }
}

