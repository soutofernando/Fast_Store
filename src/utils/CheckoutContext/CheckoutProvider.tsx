import React, { createContext, FC, useEffect, useState } from "react";
import * as Yup from "yup"
import { navigate } from 'gatsby'

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
}

export const CheckoutContext = createContext<Props>({
    validadeSchemaDelivery: {},
    onSubmitDelivery: () => { },
    validadeSchemaPayment: {},
    delivery: [],

})

const CheckoutProvider: FC = ({ children }) => {

    const [delivery, setDelivery] = useState<Delivery[]>([])

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
            cpf: values.cpf,
        }
        ]
        )

        if (delivery) {
            navigate("/payment")
        }
        console.log(delivery)
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
    });

    const validadeSchemaPayment = Yup.object().shape({
        parcel: Yup.string().required(),
        numberCard: Yup.string().required("Por favor, insira um número de cartão válido"),
        nameCard: Yup.string().required("Por favor, insira o nome no cartão"),
        validity: Yup.string().required("Por favor, insira a validade do seu cartão"),
        securityCode: Yup.string().required().max(3),
    });

    useEffect(() => {
        console.log(delivery.map((item: any) => { item }))
    }, [])

    return (
        <CheckoutContext.Provider value={{
            validadeSchemaDelivery,
            onSubmitDelivery,
            validadeSchemaPayment,
            delivery,
        }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutProvider