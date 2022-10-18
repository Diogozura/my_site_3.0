import Link from 'next/link'
import styled from 'styled-components'

interface Props extends Style{
    href: string,
    name: string,
   
    onClick?: ()=> void
}
interface Style{
    bg?: string,
    hoverBg?: string,
    color: string,
    padding?: string,
    margin?: string
}


const A = styled.a<Style>`
    color: #FFFF;
    background-color: ${props => props.bg};
    padding: 10px;
    border-radius: 10px;
    margin: ${props=> props.margin};
    cursor: pointer;
    text-decoration: none;
    animation-delay: 2s;
    :hover{
        background-color: ${props => props.hoverBg || null};
        text-decoration: underline;
    }
`


export default function LinkPage({ name , href , bg, hoverBg,padding, margin, onClick, ...props}:Props) {
    return (
        <>
            <Link href={href} prefetch={false} passHref >
                <A {...props}
                    bg={bg}
                    hoverBg={hoverBg}
                   
                    padding={padding}
                    margin={margin}
                    onClick={onClick}
                >
            {name}
        </A>
            </Link>   
    </>
       
       
    )
}


