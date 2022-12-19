/* eslint-disable react/no-children-prop */

import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { cmsService } from "../../infra/cms/cmsService";
import Banner from "./Banner";
import Projetos from "./Projetos";
import Servicos from "./Servicos";
import Skill from "./Skill";


interface Props{
  header: string,
  projetos: string,
  ferramentas: string,
}




export default function HomeScreen({ header, projetos, ferramentas }: Props) {
  console.log(header, projetos, ferramentas)
    return (
      <>
        <Head>
          <title>
            Diogo Zura - Desenvolvedor Front-end
          </title>
        </Head>
            <Header header={header} />
            <Banner />
            <Projetos projetos={projetos} />
            <Skill ferramentas={ferramentas} />
            <Servicos/>
          <Footer/>
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
         descricao
         linkProjeto
        }
       
       allSkills{
         id
         imgFerramenta{
           id
           url
           alt
         }
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
    const projetos = data?.allProjetos
    const ferramentas = data?.allSkills

    return {
        props: {
            header: header,
            projetos: projetos,
            ferramentas: ferramentas
      }, // will be passed to the page component as props
      revalidate: 60,
      }
}

