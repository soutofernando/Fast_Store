import React from 'react'
import Icon from 'src/components/ui/Icon'

import Incentives from './Incentives'
import Section from '../Section'

const incentives = [
  {
    icon: <Icon name="Truck" width={32} height={32} />,
    title: 'Compre online',
    firstLineText: 'Ganhe Frete Grátis',
  },
  {
    icon: <Icon name="Calendar" width={32} height={32} />,
    title: 'Devolução gratuita',
    firstLineText: '30 dias após a compra',
  },
  {
    icon: <Icon name="Gift" width={32} height={32} />,
    title: 'Gift cards',
    firstLineText: '$20 / $30 / $50',
  },
  {
    icon: <Icon name="Storefront" width={32} height={32} />,
    title: 'Lojas físicas',
    firstLineText: '+40 lojas no Brasil',
  },
  {
    icon: <Icon name="ShieldCheck" width={32} height={32} />,
    title: 'Compra',
    firstLineText: 'Totalmente segura',
  },
]

function IncentivesHeader() {
  return (
    <Section>
      <Incentives incentives={incentives} classes="incentives--colored" />
    </Section>
  )
}

export default IncentivesHeader
