import React from 'react'
import {
  List as UIList,
  Icon as UIIcon,
  PaymentMethods as UIPaymentMethods,
} from '@faststore/ui'
import { mark } from 'src/sdk/tests/mark'
import IncentivesFooter from 'src/components/sections/Incentives/IncentivesFooter'
import SROnly from 'src/components/ui/SROnly'
import Link from 'src/components/ui/Link'
import Icon from 'src/components/ui/Icon'

import FooterLinks from './FooterLinks'

import './footer.scss'

function Footer() {
  return (
    <footer className="footer / grid-content-full">
      <IncentivesFooter />

      <div className="footer__section / grid-content">
        <FooterLinks />

        <section className="footer__social">
          <p className="title-sub-subsection">Siga-nos</p>
          <UIList variant="unordered">
            <li>
              <Link
                as="a"
                href="https://www.facebook.com/"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIIcon
                  component={
                    <Icon width="24px" height="24px" name="Facebook" />
                  }
                />
              </Link>
            </li>
            <li>
              <Link
                as="a"
                href="https://www.instagram.com/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIIcon
                  component={
                    <Icon width="24px" height="24px" name="Instagram" />
                  }
                />
              </Link>
            </li>
            <li>
              <Link
                as="a"
                href="https://www.pinterest.com/"
                title="Pinterest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIIcon
                  component={
                    <Icon width="24px" height="24px" name="Pinterest" />
                  }
                />
              </Link>
            </li>
            <li>
              <Link
                as="a"
                href="https://twitter.com/"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIIcon
                  component={<Icon width="24px" height="24px" name="Twitter" />}
                />
              </Link>
            </li>
          </UIList>
        </section>
      </div>

      <div className="footer__note / grid-content">
        <UIIcon
          component={
            <img
              src="https://logosmarcas.net/wp-content/uploads/2020/04/Adidas-Logo.png"
              alt="Adidas icon"
              width="110px"
              height="34px"
              loading="lazy"
            />
          }
        />

        <UIPaymentMethods>
          <p className="title-sub-subsection">Metodos de pagamento</p>
          <UIList>
            <li>
              <Icon width="34px" height="24px" name="Visa" />
              <SROnly text="Visa" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="Diners" />
              <SROnly text="Diners Club" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="Mastercard" />
              <SROnly text="Mastercard" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="EloCard" />
              <SROnly text="Elo Card" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="PayPal" />
              <SROnly text="PayPal" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="Stripe" />
              <SROnly text="Stripe" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="GooglePay" />
              <SROnly text="Google Pay" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="ApplePay" />
              <SROnly text="Apple Pay" />
            </li>
          </UIList>
        </UIPaymentMethods>

        <div className="footer__copyright / text-body-small">
          <p>adidas do Brasil LTDA</p>
          <p>
            CNPJ/MF nº 42.274.696/0025-61 – Inscrição Estadual  298.144.017.112 Atendimento
            ao cliente: atendimentoadidas@adidas.com  / 08008 234 327 ou 11 5546 3700
          </p>
          <address>Endereço:
            Rua Pataxós nº 241, Galpão 1, Bairro Jardim Magali, Município de Embú - SP, CEP 06833-073</address>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'

export default mark(Footer)
