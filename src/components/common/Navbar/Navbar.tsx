import './navbar.scss'

import { List as UIList } from '@faststore/ui'
import { graphql, Link as LinkGatsby, useStaticQuery } from 'gatsby'
import React, { useRef, useState } from 'react'
import CartToggle from 'src/components/cart/CartToggle'
import SearchInput from 'src/components/common/SearchInput'
import Icon from 'src/components/ui/Icon'
import IconButton from 'src/components/ui/IconButton'
import Link from 'src/components/ui/Link'
import Logo from 'src/components/ui/Logo'
import SignInLink from 'src/components/ui/SignInLink'
import SlideOver from 'src/components/ui/SlideOver'
import { mark } from 'src/sdk/tests/mark'
import type { AnchorHTMLAttributes } from 'react'
import type { SearchInputRef } from '@faststore/ui'
import type { StoreCollectionQuery } from '@generated/graphql'
import Button_Nav1 from 'src/components/ui/Button_Nav/Button_Nav1'
import Button_Nav2 from 'src/components/ui/Button_Nav/Button_Nav2'
import ButtonFavoriteNav from 'src/components/ui/ButtonFavorite/ButtonFavoriteNav'

type Callback = () => unknown

interface NavLinksProps {
  onClickLink?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
}
function NavLinks({ onClickLink }: NavLinksProps) {
  const {
    allStoreCollection: { edges: links },
  } = useStaticQuery<StoreCollectionQuery>(graphql`
    query StoreCollection {
      allStoreCollection(filter: { type: { eq: Department } }) {
        edges {
          node {
            slug
            seo {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <nav className="navlinks__list">
      <UIList>
        {links.map(({ node: link }) => (
          <li key={link.seo.title}>
            <Link variant="display" to={`/${link.slug}`} onClick={onClickLink}>
              {link.seo.title}
            </Link>
          </li>
        ))}
      </UIList>
    </nav>
  )
}

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [searchExpanded, setSearchExpanded] = useState(false)
  const searchMobileRef = useRef<SearchInputRef>(null)
  const dismissTransition = useRef<Callback | undefined>()
  const handleCloseSlideOver = () => setShowMenu(false)

  const handlerExpandSearch = () => {
    setSearchExpanded(true)
    searchMobileRef.current?.inputRef?.focus()
  }

  return (

    <div className="block h-27 w-full">
      <header className='media_container'>
        {!searchExpanded && (
          <>
            <IconButton
              classes="navbar__menu"
              aria-label="Open Menu"
              icon={<Icon name="List" width={32} height={32} />}
              onClick={() => setShowMenu(true)}
            />
            <LinkGatsby
              to="/"
              aria-label="Go to Faststore home"
              title="Go to Faststore home"
              className="navbar__logo"
            >
              <section className='media_logo_navbar'>
                <div className="w-16 absolute top-12 left-8">
                  <Logo />
                </div>
              </section>
            </LinkGatsby>
          </>
        )}
        <div className="flex justify-end">
          <NavLinks />
        </div>
        <div className='flex justify-around relative pl-10 pr-10 top-1'>
          <section className="media_buttons_navbar">
            <div className='flex justify-center relative left-56 top-2 '>
              <Button_Nav1>HOMEM</Button_Nav1>
              <Button_Nav1>MULHER</Button_Nav1>
              <Button_Nav1>KIDS</Button_Nav1>
              <Button_Nav2>ESPORTES</Button_Nav2>
              <Button_Nav2>MARCAS</Button_Nav2>
              <Button_Nav2>COLEÇÕES</Button_Nav2>
            </div>
          </section>
          <div className="relative flex bottom-1 left-28">
            {searchExpanded && (
              <IconButton
                classes="navbar__collapse"
                aria-label="Collapse search bar"
                icon={<Icon name="CaretLeft" width={32} height={32} />}
                onClick={() => setSearchExpanded(false)}
              />
            )}
            <section className="media_input_search">
              <SearchInput
                placeholder="Procurar"
                ref={searchMobileRef}
                testId="store-input-mobile"
                buttonTestId="store-input-mobile-button"
                onSearchClick={handlerExpandSearch}
              />
            </section>
            <SignInLink />
            <section className="media_favorite_btn">
              <ButtonFavoriteNav />
            </section>
            <CartToggle />
          </div>
        </div>
      </header>
      <SlideOver
        isOpen={showMenu}
        onDismiss={handleCloseSlideOver}
        onDismissTransition={(callback) => {
          dismissTransition.current = callback
        }}
        size="full"
        direction="leftSide"
        className="navbar__modal-content"
      >
        <div className="navbar__modal-body">
          <LinkGatsby
            to="/"
            aria-label="Go to Faststore home"
            title="Go to Faststore home"
            className='flex justify-between'
            onClick={() => dismissTransition.current?.()}
          >
            <div className="w-16">
              <Logo />
            </div>
            <IconButton
              classes="navbar__button"
              aria-label="Close Menu"
              icon={<Icon name="X" width={32} height={32} />}
              onClick={() => dismissTransition.current?.()}
            />
          </LinkGatsby>
        </div>
      </SlideOver>
    </div >
  )
}

Navbar.displayName = 'Navbar'

export default mark(Navbar)
