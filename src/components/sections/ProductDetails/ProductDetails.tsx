import { sendAnalyticsEvent, useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import React, { useEffect, useState } from 'react'
import Breadcrumb from 'src/components/ui/Breadcrumb'
import BuyButton from 'src/components/ui/BuyButton'
import { Image } from 'src/components/ui/Image'
import Price from 'src/components/ui/Price'
import ProductTitle from 'src/components/ui/ProductTitle'
import { useBuyButton } from 'src/sdk/cart/useBuyButton'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import { useProduct } from 'src/sdk/product/useProduct'
import type { ProductDetailsFragment_ProductFragment } from '@generated/graphql'
import type { CurrencyCode, ViewItemEvent } from '@faststore/sdk'
import type { AnalyticsItem } from 'src/sdk/analytics/types'
import './product-details.scss'
import Section from '../Section'
import ProductPortion from '../ProductPortion/ProductPortion'

interface Props {
  product: ProductDetailsFragment_ProductFragment
}

const imgOptions = {
  sourceWidth: 1024,
  backgroundColor: '#f0f0f0',
  layout: 'constrained' as const,
  loading: 'eager' as const,
  sizes: '(max-width: 768px) 25vw, 50vw',
  breakpoints: [360, 720, 1024],
  aspectRatio: 4 / 3,
}

function ProductDetails({ product: staleProduct }: Props) {
  const { currency } = useSession()
  const [addQuantity, setAddQuantity] = useState(1)

  // Stale while revalidate the product for fetching the new price etc
  const { data, isValidating } = useProduct(staleProduct.id, {
    product: staleProduct,
  })

  if (!data) {
    throw new Error('NotFound')
  }

  const {
    product: {
      id,
      sku,
      gtin,
      description,
      name: variantName,
      brand,
      isVariantOf,
      isVariantOf: { name, productGroupID: productId },
      image: productImages,
      offers: {
        offers: [{ availability, price, listPrice, seller }],
        lowPrice,
      },
      breadcrumbList: breadcrumbs,
    },
  } = data

  const buyDisabled = availability !== 'https://schema.org/InStock'

  const buyProps = useBuyButton({
    id,
    price,
    listPrice,
    seller,
    quantity: addQuantity,
    itemOffered: {
      sku,
      name: variantName,
      gtin,
      image: productImages,
      brand,
      isVariantOf,
    },
  })

  useEffect(() => {
    sendAnalyticsEvent<ViewItemEvent<AnalyticsItem>>({
      name: 'view_item',
      params: {
        currency: currency.code as CurrencyCode,
        value: price,
        items: [
          {
            item_id: isVariantOf.productGroupID,
            item_name: isVariantOf.name,
            item_brand: brand.name,
            item_variant: sku,
            price,
            discount: listPrice - price,
            currency: currency.code as CurrencyCode,
            item_variant_name: variantName,
            product_reference_id: gtin,
          },
        ],
      },
    })
  }, [
    isVariantOf.productGroupID,
    isVariantOf.name,
    brand.name,
    sku,
    price,
    listPrice,
    currency.code,
    variantName,
    gtin,
  ])

  return (
    <Section className="product-details">
      <section className="product-details__body">
        <header className="product-details__title">
          <ProductTitle
            title={<h1 className="title-product">{name.toUpperCase()}</h1>}
            refNumber={productId}
          />
          <div className='pl-6'>
            <Price
              value={lowPrice}
              formatter={useFormattedPrice}
              testId="price"
              data-value={lowPrice}
              variant="spot"
              classes="title-display"
              SRText="Sale Price:"
            />
          </div>
        </header>

        <section className="product-details__image">
          <Image
            width={1800}
            height={1050}
            baseUrl={productImages[0].url}
            alt={productImages[0].alternateName}
            {...imgOptions}
          />
          <Breadcrumb breadcrumbList={breadcrumbs.itemListElement} />
        </section>

        <section className="product-details__settings">

          <ProductPortion price={lowPrice} />

          {/* NOTE: A loading skeleton had to be used to avoid a Lighthouse's
              non-composited animation violation due to the button transitioning its
              background color when changing from its initial disabled to active state.
              See full explanation on commit https://git.io/JyXV5. */}
          <div className='block mt-6'>
            <div className='font-bold'>***UNISSEX, FORMATO GRANDE***</div>
            <div className='font-extralight'> Para p??s mais finos, recomendamos que compre um tamanho menor do que o de costume.</div>
          </div>
          <div className="mt-10">
            {isValidating ? (
              <AddToCartLoadingSkeleton />
            ) : (
              <BuyButton disabled={buyDisabled} {...buyProps}>
                ADICIONAR AO CARRINHO
              </BuyButton>
            )}
          </div>
        </section>

        <section className="product-details__content">
          <article className="product-details__description">
            <h2 className="title-subsection">Description</h2>
            <p className="text-body">{description}</p>
          </article>
        </section>
      </section>
    </Section>
  )
}

function AddToCartLoadingSkeleton() {
  // Generated via https://skeletonreact.com/.
  return (
    <svg
      role="img"
      width="100%"
      height="48"
      aria-labelledby="loading-aria"
      viewBox="0 0 112 48"
      preserveAspectRatio="none"
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#clip-path)"
        style={{ fill: 'url("#fill")' }}
      />
      <defs>
        <clipPath id="clip-path">
          <rect x="0" y="0" rx="2" ry="2" width="112" height="48" />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stopColor="#f3f3f3" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="1.59996" stopColor="#ecebeb" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="2.59996" stopColor="#f3f3f3" stopOpacity="1">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export const fragment = graphql`
  fragment ProductDetailsFragment_product on StoreProduct {
    id: productID
    sku
    name
    gtin
    description

    isVariantOf {
      productGroupID
      name
    }

    image {
      url
      alternateName
    }

    brand {
      name
    }

    offers {
      lowPrice
      offers {
        availability
        price
        listPrice
        seller {
          identifier
        }
      }
    }

    breadcrumbList {
      itemListElement {
        item
        name
        position
      }
    }
  }
`

export default ProductDetails
