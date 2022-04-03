import React from "react"

import Button from "src/components/ui/Button";
import CartHeader from "src/components/cart/CartHeader/CartHeader";
import OrderSummary from "../components/cart/OrderSummary"
import { useCheckoutButton } from "src/sdk/cart/useCheckoutButton";
import { useCart } from "src/sdk/cart/useCart";
import Icon from "src/components/ui/Icon";
import Section from "src/components/sections/Section";

const Cart = () => {

    const btnProps = useCheckoutButton()
    const cart = useCart()
    const { totalItems, isValidating, subTotal, total } = cart

    return (
        <Section>
            <div className="flex justify-center mt-4 mr-48 ml-48">
                <div className="flex-2">
                    <CartHeader subTotal={subTotal} totalItems={totalItems} />
                </div>
                <div className="ml-14 mt-16 flex-1">
                    <OrderSummary
                        subTotal={subTotal}
                        total={total}
                        numberOfItems={totalItems}
                        checkoutButton={
                            <Button
                                className="
                                bg-black
                                flex
                                w-full
                                text-white
                                justify-between
                                p-4 
                                font-mono
                                font-black
                                rounded-none"
                                icon={
                                    !isValidating && (
                                        <Icon name="ArrowRight" width={18} height={18} />
                                    )
                                }
                                iconPosition="right"
                                {...btnProps}
                            >
                                {isValidating ? 'Loading...' : 'FINALIZAR'}
                            </Button>
                        } />
                </div>
            </div>
        </Section>
    )
}


export default Cart;