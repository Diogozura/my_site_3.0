import type { AppProps } from 'next/app'
import Head from 'next/head';
import Script from 'next/script';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import GlobalStyle from "../styles"; 


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J7ER2ELKJE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-J7ER2ELKJE');
        `}
      </Script>

      <NextSeo nofollow={true}
        description="Easy Bank, um novo jeito de Jogar Banco imobiliário, confira agora nosso game e compartilhe com seus amigos - desenvolvido por 2eSes"

        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: - 1,
          maxImagePreview: 'none',
          maxVideoPreview: - 1,
        }}

        openGraph={{
          type: 'website',
          url: 'https://diogozura.com',
          title: 'Diogo Zura - Desenvolvedor Front-end',
          description: 'Diogo zura , desenvolvedor front-end apaixonado por drift, descubra todos os projetos que já participei e entre em contato para algum tipo de serviço',
          images: [
            {
              url: 'https://diogozura/image/Logo.webp',
              alt: 'logo Diogo zura',
            },
          ],
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Diogo zura"
        url="https://diogozura.com"
        sameAs={[
          'https://www.instagram.com/diogo__zura/',
          'https://www.linkedin.com/in/diogo-silva-santos-251bb5192/',
        ]}
      />
      <Head>
      


      </Head>
     
      <Component {...pageProps} />

<GlobalStyle />
       
    </>
  )
}
export default MyApp
