import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import React from 'react'
import BannerText from 'src/components/sections/BannerText'
import Hero from 'src/components/sections/Hero'
import IncentivesHeader from 'src/components/sections/Incentives/IncentivesHeader'
import ProductShelf from 'src/components/sections/ProductShelf'
import ProductTiles from 'src/components/sections/ProductTiles'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type { HomePageQueryQuery } from '@generated/graphql'
import Alert from 'src/components/common/Alert'
import TeamSection from 'src/components/sections/TeamSection/TeamSection'
import Section from 'src/components/sections/Section'

export type Props = PageProps<HomePageQueryQuery>

function Page(props: Props) {
  const {
    data: { site, allStoreProduct },
    location: { pathname, host },
  } = props

  const { locale } = useSession()

  const title = site?.siteMetadata?.title ?? ''
  const siteUrl = `https://${host}${pathname}`
  const products = allStoreProduct?.nodes

  return (
    <>
      {/* SEO */}
      <GatsbySeo
        title={title}
        description={site?.siteMetadata?.description ?? ''}
        titleTemplate={site?.siteMetadata?.titleTemplate ?? ''}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: 'website',
          url: siteUrl,
          title: title ?? '',
          description: site?.siteMetadata?.description ?? '',
        }}
      />
    <JsonLd
        json={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/s/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      {/*
        WARNING: Do not import or render components from any
        other folder than '../components/sections' in here.

        This is necessary to keep the integration with the CMS
        easy and consistent, enabling the change and reorder
        of elements on this page.

        If needed, wrap your component in a <Section /> component
        (not the HTML tag) before rendering it here.
      */}
      <Section>
        <Alert>
          Entre gratuitamente para o adiClub e ganhe 15% de desconto.&nbsp;<span>Entre para o clube</span>
        </Alert>
      </Section>
      <Hero
        title="Nova Coleção de Verão já Disponível"
        subtitle="Coleção 22/23 do Flamengo já se encontra disponível com 10% de desconto."
        linkText="COMPRAR"
        link="/"
        imageSrc="https://1.bp.blogspot.com/-m36gu_IDuz8/Xpc7cVeeLwI/AAAAAAABhqM/Lc2_0bT4pycT6CXvaBRKAnnZbWbAuzIggCLcBGAsYHQ/s1600/capaPatrocinio-2.png"
        imageAlt="Imagem do patrocinio do Flamengo"
      />

      <TeamSection />

      <ProductShelf products={products?.slice(0, 5)} title="NOVIDADES" />

      <IncentivesHeader />

      <ProductTiles products={products?.slice(5, 8)} title="Just Arrived" />

      <BannerText
        title="ADICLUB TEM DESCONTO ESPECIAL"
        caption="Se você é parte do Clube, vem aproveitar 20% de desconto em um catálogo especial que preparamos para você."
        actionPath="/register"
        actionLabel="CADASTRA-SE AGORA"
      />

      <ProductShelf
        products={products?.slice(9, 14)}
        title="Deals & Promotions"
      />
    </>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }

    allStoreProduct(limit: 14) {
      nodes {
        ...ProductSummary_product
      }
    }
  }
`

Page.displayName = 'Page'

export default mark(Page)
