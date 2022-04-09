import React, { useState } from 'react'
import { List as UIList } from '@faststore/ui'
import Link from 'src/components/ui/Link'
import Accordion, { AccordionItem } from 'src/components/ui/Accordion'

const links = [
  {
    title: 'PRODUTOS',
    items: [
      {
        href: '/',
        name: 'Calçados',
      },
      {
        href: '/',
        name: 'Tênis',
      },
      {
        href: '/',
        name: 'Roupas',
      },
      {
        href: '/',
        name: 'Acessórios',
      },
    ],
  },
  {
    title: 'ESPORTES',
    items: [
      {
        href: '/',
        name: 'Futebol',
      },
      {
        href: '/',
        name: 'Flamengo',
      },
      {
        href: '/',
        name: 'São Paulo',
      },
      {
        href: '/',
        name: 'Internacional',
      },
    ],
  },
  {
    title: 'SUPORTE',
    items: [
      {
        href: '/',
        name: 'Podemos ajudar?',
      },
      {
        href: '/',
        name: 'Atendimento ao Cliente',
      },
      {
        href: '/',
        name: 'Duvidas Frequentes',
      },
    ],
  },
  {
    title: 'COLEÇÕES',
    items: [
      {
        href: '/',
        name: 'Yeezy',
      },
      {
        href: '/',
        name: 'Ultraboost',
      },
      {
        href: '/',
        name: 'Originals',
      },
    ],
  },
]

type LinkItem = {
  href: string
  name: string
}

interface LinksListProps {
  items: LinkItem[]
}

function LinksList({ items }: LinksListProps) {
  return (
    <UIList>
      {items.map((item) => (
        <li key={item.name}>
          <Link variant="footer" to={item.href}>
            {item.name}
          </Link>
        </li>
      ))}
    </UIList>
  )
}

function FooterLinks() {
  const [indicesExpanded, setIndicesExpanded] = useState<Set<number>>(
    new Set([])
  )

  const onChange = (index: number) => {
    if (indicesExpanded.has(index)) {
      indicesExpanded.delete(index)
      setIndicesExpanded(new Set(indicesExpanded))
    } else {
      setIndicesExpanded(new Set(indicesExpanded.add(index)))
    }
  }

  return (
    <section className="footer__links">
      <div className="display-mobile">
        <Accordion expandedIndices={indicesExpanded} onChange={onChange}>
          {links.map((section, index) => (
            <AccordionItem
              key={section.title}
              isExpanded={indicesExpanded.has(index)}
              buttonLabel={section.title}
            >
              <LinksList items={section.items} />
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="hidden-mobile">
        <div className="footer__links-columns">
          {links.map((section) => (
            <nav key={section.title}>
              <p className="text-lg font-black">{section.title}</p>
              <LinksList items={section.items} />
            </nav>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FooterLinks
