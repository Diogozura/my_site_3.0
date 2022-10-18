import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from "@fortawesome/free-solid-svg-icons"

import LinkPage from "../../../components/Link"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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


export default function Projetos() {
    return (
        <BlocoProjetos id="Projetos">
   
            <h2 >Missions <FontAwesomeIcon icon={faRocket} className="fa-1x fa-inverse" /></h2>
            <aside>
                <img />
                <h3>teste</h3>
                <LinkPage href={""} name={"link"} color={""} />
            </aside>
            <Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;
                
        </BlocoProjetos>
    )
}


const BlocoProjetos = styled.section`
    padding: 20px;
    background-color: blue;
    width: 100%;
    height: 700px;
    margin-top: 3em;
`