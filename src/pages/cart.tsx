import React from "react"
import Button from "src/components/ui/Button";
import CartHeader from "src/components/cart/CartHeader/CartHeader";
import OrderSummary from "../components/cart/OrderSummary"
import { useCheckoutButton } from "src/sdk/cart/useCheckoutButton";
import { useCart } from "src/sdk/cart/useCart";
import Icon from "src/components/ui/Icon";
import Section from "src/components/sections/Section";
import CartItem from "src/components/cart/CartItem";
import CouponInput from "src/components/cart/CouponInput/CouponInput";
import NeedHelp from "src/components/cart/NeedHelp/NeedHelp";
import PayWith from "src/components/cart/PayWith/PayWith";

const Cart = () => {

    const btnProps = useCheckoutButton()
    const cart = useCart()
    const { totalItems, isValidating, subTotal, total, items } = cart

    return (
        <Section>
            <div className="xl:flex justify-center mt-4 mr-48 ml-48">
                <div className=" block">
                    <div>
                        <CartHeader subTotal={subTotal} totalItems={totalItems} />
                    </div>
                    <div className="mt-8">
                        {items.map((item) => (<div><CartItem item={item} /></div>))}
                    </div>
                </div>
                <div className="ml-14 mt-16 ">
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
                    <div>
                        <CouponInput />
                    </div>
                    <div>
                        <NeedHelp />
                    </div>
                    <div>
                        <PayWith />
                    </div>
                </div>
            </div>
        </Section>
    )
}


export default Cart;