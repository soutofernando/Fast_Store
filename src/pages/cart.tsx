import React, { useContext } from "react"
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
import Navbar from "src/components/common/Navbar";
import { FireContext } from "src/utils/FireContext/FireProvider";

const Cart = () => {

    const btnProps = useCheckoutButton()
    const cart = useCart()
    const { totalItems, isValidating, subTotal, total, items } = cart
    const { user } = useContext(FireContext)

    return (
        <Section>
            <Navbar />
            <div className="ml-6 mr-6 lg:flex lg:justify-center mt-4 lg:mr-48 lg:ml-48">
                <div className=" block">
                    <div>
                        <CartHeader subTotal={subTotal} totalItems={totalItems} />
                    </div>
                    <div className="mt-8">
                        {items.map((item) => (<div><CartItem item={item} /></div>))}
                    </div>
                </div>
                <div className="lg:ml-14 mt-16 ">
                    {user ? <div>
                        <Button
                            className='bg-black text-white flex p-4 justify-between text-center mt-10 w-full'
                            icon={
                                !isValidating && (
                                    <Icon className='mt-1' name="ArrowRight" width={18} height={18} />
                                )
                            }
                            iconPosition="right"
                            onClick={() => window.location.href = "/delivery"}
                        >
                            {isValidating ? 'Carregando...' : 'FINALIZAR'}
                        </Button>
                    </div> :
                        <div>
                            <Button
                                className='bg-black text-white flex p-4 justify-between text-center mt-10 w-full'
                                icon={
                                    !isValidating && (
                                        <Icon className='mt-1' name="ArrowRight" width={18} height={18} />
                                    )
                                }
                                iconPosition="right"
                                onClick={() => window.location.href = "/login"}
                            >
                                {isValidating ? 'Carregando...' : 'FINALIZAR'}
                            </Button>
                        </div>
                    }
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