/* eslint-disable react/no-children-prop */

import styled from "styled-components";
import Header from "../../components/Header";
import { cmsService } from "../../infra/cms/cmsService";
import Banner from "./Banner";
import Projetos from "./Projetos";
import Servicos from "./Servicos";
import Skill from "./Skill";




const Conteudo = styled.main`
    width: 700px;
    margin: 1rem auto;
    text-align: center;
    display: grid;

    @media only screen and (max-width: 700px) {
        width: 80%;
    }
`




export default function HomeScreen({header, projetos, ferramentas }) {
    return (
        <>
            <Header header={header } />
           
            <Banner />
            <Projetos projetos={projetos} />
            <Skill ferramentas={ferramentas} />
            <Servicos/>
            {/* <Conteudo>
            <h1>Bem vindo a home</h1>
              
                
            </Conteudo>
      */}
            {/* <pre>{ JSON.stringify(ferramentas, null, 4)}</pre> */}

        </>
    )
}

export async function getStaticProps() {
    
    const contentQuery = `
    query{
        allProjetos {
          id
             capaProjeto{
           id
                 alt 
           url
           }
         nomeProjeto
         linkProjeto
        }
       
       allSkills{
         id
         imgFerramenta{
           id
           url
           alt
         }
       linkFerramenta
       }
       
       header{
       logo {
         id
         url
       }
       }
     }
    `


    const { data } = await cmsService({
        query: contentQuery
    })

    const header = data.header
    const projetos = data.allProjetos
    const ferramentas = data.allSkills

    return {
        props: {
            header: header,
            projetos: projetos,
            ferramentas: ferramentas
        }, // will be passed to the page component as props
      }
}

