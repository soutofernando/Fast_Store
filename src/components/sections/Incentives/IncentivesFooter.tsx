import React from 'react'
import Icon from 'src/components/ui/Icon'

import Incentives from './Incentives'

function IncentivesFooter() {
  const incentives = [
    {
      icon: <Icon name="ShieldCheck" width={32} height={32} />,
      firstLineText: 'Confiável',
      secondLineText: 'por SafeCon',
    },
    {
      icon: <Icon name="Medal" width={32} height={32} />,
      firstLineText: 'Produtos',
      secondLineText: 'de Qualidade',
    },
    {
      icon: <Icon name="CircleWavyCheck" width={32} height={32} />,
      firstLineText: '30 dias',
      secondLineText: 'de garantia',
    },
    {
      icon: <Icon name="Storefront" width={32} height={32} />,
      firstLineText: 'Opções de',
      secondLineText: 'Retirada',
    },
    {
      icon: <Icon name="Truck" width={32} height={32} />,
      firstLineText: 'Frete',
      secondLineText: 'Grátis',
    },
  ]

  return <Incentives incentives={incentives} />
}

export default IncentivesFooter
