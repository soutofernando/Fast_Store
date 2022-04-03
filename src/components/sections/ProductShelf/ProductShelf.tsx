import React from 'react'
import type { ProductSummary_ProductFragment } from '@generated/graphql'
import ProductShelfSkeleton from 'src/components/skeletons/ProductShelfSkeleton'

import ProductCard from '../../product/ProductCard'
import Section from '../Section'

import './product-shelf.scss'

interface ProductShelfProps {
  products: ProductSummary_ProductFragment[]
  title: string | JSX.Element
  withDivisor?: boolean
}

function ProductShelf({
  products,
  title,
}: ProductShelfProps) {
  return (
    <Section className="pl-28 pr-28 pt-3 pb-3">
      <div className="border-y-2" >
        <div className='border-b-4 p-6 border-black w-36'>
          <span className="font-mono font-extrabold text-lg" >{title}</span>
        </div>
      </div>
      <div className="page__section-content">
        <ProductShelfSkeleton loading={products.length === 0}>
          <ul data-product-shelf className="grid-content">
            {products.map((product, idx) => (
              <li key={`${product.id}`}>
                <ProductCard product={product} index={idx + 1} />
              </li>
            ))}
          </ul>
        </ProductShelfSkeleton>
      </div>
    </Section>
  )
}

export default ProductShelf
