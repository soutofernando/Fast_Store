import React, { createContext, FC, useEffect, useState } from "react";
import * as Yup from "yup"
import { navigate } from 'gatsby'

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

})

const CheckoutProvider: FC = ({ children }) => {

    const [delivery, setDelivery] = useState<Delivery[]>([])
    const [payment, setPayment] = useState<Payment[]>([])
    const [deliveryphase, setDeliveryPhase] = useState(false)
    const [paymentphase, setPaymentPhase] = useState(false)

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
        adress: Yup.string().required("Por favor, informe seu endereço"),
        postalCode: Yup.string().required("Por favor, informe seu CEP").min(8),
        numberHouse: Yup.string().required("Por favor, informe o número da sua casa"),
        additionalInfo: Yup.string(),
        district: Yup.string().required("Por favorm, digite seu bairro"),
        city: Yup.string().required("Por favor, digite sua cidade"),
        state: Yup.string().required("Por favor, digite um Estado"),
        email: Yup.string().email().required("Por favor, informe um e-mail válido"),
        phoneNumber: Yup.string().required("Por favor, informe seu telefone"),
        cpf: Yup.string().required("Por favor, informe um cpf válido"),
        verifiedBox: Yup.boolean().isTrue("A opção acima precisa ser preenchida"),
        ageofBox: Yup.boolean().isTrue("Você precisa ter mais dde 18 anos"),
    });

    const validadeSchemaPayment = Yup.object().shape({
        parcel: Yup.string().required("Por favor, insira um número válido de parcelas"),
        numberCard: Yup.string().min(16, "Por Favor, insira um número de cartão válido").required("Por favor, insira um número de cartão válido"),
        nameCard: Yup.string().required("Por favor, insira o nome no cartão"),
        validity: Yup.string().required("Por favor, insira a validade do seu cartão").min(7, "Por favor, digite a validade do cartão"),
        securityCode: Yup.string().required("Por favor, insira um código do cartão válido").min(3, "O código precisa ter 3 dígitos"),
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
        }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutProvider