import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link"
import styled from "styled-components"
import LinkPage from "../Link"

export default function Footer() {
    return (
        <BlocoFooter>
            <Text>Site desenvolvido por Diogo Zura</Text>
            <Contatos>Me Siga nas redes
                <Link href="https://t.me/Diogozura" prefetch={false} passHref>
                    <A>
                    <FontAwesomeIcon icon={faTelegram} color="#000000" className="fa-2x" />
                    </A>
                </Link>
                <Link href="https://instagram.com/diogo__zura" prefetch={false} passHref>
                    <A>
                    <FontAwesomeIcon icon={faInstagram} color="#000000" className="fa-2x" />
                    </A>
                </Link>
                <Link href="https://www.linkedin.com/in/diogo-silva-santos-251bb5192/" prefetch={false} passHref>
                    <A>
                    <FontAwesomeIcon icon={faLinkedinIn} color="#000000" className="fa-2x" />
                    </A>
                </Link>
                <Link href="https://github.com/diogozura" prefetch={false} passHref>
                    <A>
                    <FontAwesomeIcon icon={faGithub} color="#000000" className="fa-2x" />
                    </A>
                </Link>

            </Contatos>
        </BlocoFooter>
    )
}

const BlocoFooter = styled.footer`
    background-color: #FFFFFF;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`
const Text = styled.p`
    color: #000;
`
const A = styled.a`
    cursor: pointer;
    margin: 10px;
`
const Contatos = styled.aside`
   display: flex;
   flex-wrap: wrap;
`