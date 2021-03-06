import React, { createContext, FC, useEffect, useState } from "react";
import * as Yup from "yup"
import { navigate } from 'gatsby'
/*import { useCart } from "src/sdk/cart/useCart";*/

export interface Payment {
    parcel: string
    numberCard: string
    nameCard: string
    validityCard: string
    securityCode: string
}

export interface Delivery {
    username: string
    secondName: string
    adress: string
    postalCode: string
    numberHouse: string
    additionalInfo: string
    district: string
    city: string
    state: string
    email: string
    phoneNumber: string
    cpf: string
}

interface Props {
    validadeSchemaDelivery: any
    onSubmitDelivery(e: any): void
    validadeSchemaPayment: any
    delivery: Delivery[]
    deliveryphase: boolean
    setDeliveryPhase(e: boolean): void
    paymentphase: boolean
    setPaymentPhase(e: boolean): void
    payment: Payment[]
    setPayment(e: any): void
    onSubmitPayment(e: any): void
    paymentWithTicket: boolean
    setPaymentWithTicket(e: boolean): void
    onClickpaymentWith(e: any): void
    onFinishCheckout(e: any): void


}

export const CheckoutContext = createContext<Props>({
    validadeSchemaDelivery: {},
    onSubmitDelivery: () => { },
    validadeSchemaPayment: {},
    delivery: [],
    deliveryphase: false,
    setDeliveryPhase: () => false,
    paymentphase: false,
    setPaymentPhase: () => false,
    payment: [],
    setPayment: () => { },
    onSubmitPayment: () => { },
    paymentWithTicket: false,
    setPaymentWithTicket: () => false,
    onClickpaymentWith: () => { },
    onFinishCheckout: () => { },

})

const CheckoutProvider: FC = ({ children }) => {

    const [delivery, setDelivery] = useState<Delivery[]>([])
    const [payment, setPayment] = useState<Payment[]>([])
    const [deliveryphase, setDeliveryPhase] = useState(false)
    const [paymentphase, setPaymentPhase] = useState(false)
    const [paymentWithTicket, setPaymentWithTicket] = useState(false)
    /*const { setCart } = useCart()*/

    const onFinishCheckout = () => {
        navigate("/")
    }

    const onClickpaymentWith = () => {
        setPaymentWithTicket(!paymentWithTicket)
    }

    const onSubmitPayment = (values: any) => {
        setPayment([...payment,
        {
            parcel: values.parcel,
            numberCard: values.numberCard,
            nameCard: values.nameCard,
            validityCard: values.validityCard,
            securityCode: values.securityCode

        }
        ])

        if (payment) {
            navigate("/checkout")
            setPaymentPhase(true)
        }

    }

    const onSubmitDelivery = (values: any) => {
        setDelivery([...delivery,
        {
            username: values.username,
            secondName: values.secondName,
            adress: values.adress,
            postalCode: values.postalCode,
            numberHouse: values.numberHouse,
            additionalInfo: values.additionalInfo,
            district: values.district,
            city: values.city,
            state: values.state,
            email: values.email,
            phoneNumber: values.phoneNumber,
            cpf: values.cpf
        }
        ]
        )

        if (delivery) {
            navigate("/payment")
            setDeliveryPhase(true)
        }
    }
    const validadeSchemaDelivery = Yup.object().shape({
        username: Yup.string().required("Por favor, informe seu nome"),
        secondName: Yup.string().required("Por favor, informe seu sobrenome"),
        adress: Yup.string().required("Por favor, informe seu endere??o"),
        postalCode: Yup.string().required("Por favor, informe seu CEP").min(8),
        numberHouse: Yup.string().required("Por favor, informe o n??mero da sua casa"),
        additionalInfo: Yup.string(),
        district: Yup.string().required("Por favorm, digite seu bairro"),
        city: Yup.string().required("Por favor, digite sua cidade"),
        state: Yup.string().required("Por favor, digite um Estado"),
        email: Yup.string().email().required("Por favor, informe um e-mail v??lido"),
        phoneNumber: Yup.string().required("Por favor, informe seu telefone"),
        cpf: Yup.string().required("Por favor, informe um cpf v??lido"),
        verifiedBox: Yup.boolean().isTrue("A op????o acima precisa ser preenchida"),
        ageofBox: Yup.boolean().isTrue("Voc?? precisa ter mais de 18 anos"),
    });

    const validadeSchemaPayment = Yup.object().shape({
        parcel: Yup.string().required("Por favor, insira um n??mero v??lido de parcelas"),
        numberCard: Yup.string().min(16, "Por Favor, insira um n??mero de cart??o v??lido").required("Por favor, insira um n??mero de cart??o v??lido"),
        nameCard: Yup.string().required("Por favor, insira o nome no cart??o"),
        validity: Yup.string().required("Por favor, insira a validade do seu cart??o").min(7, "Por favor, digite a validade do cart??o"),
        securityCode: Yup.string().required("Por favor, insira um c??digo do cart??o v??lido").min(3, "O c??digo precisa ter 3 d??gitos"),
    });

    useEffect(() => {
        console.log(delivery.map((item: any) => { item }))
        console.log(delivery)

    }, [])

    return (
        <CheckoutContext.Provider value={{
            validadeSchemaDelivery,
            onSubmitDelivery,
            validadeSchemaPayment,
            delivery,
            deliveryphase,
            setDeliveryPhase,
            paymentphase,
            setPaymentPhase,
            payment,
            setPayment,
            onSubmitPayment,
            paymentWithTicket,
            setPaymentWithTicket,
            onClickpaymentWith,
            onFinishCheckout,
        }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutProvider