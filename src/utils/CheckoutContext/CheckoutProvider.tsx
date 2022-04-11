import React, { createContext, FC } from "react";
import * as Yup from "yup"
import { navigate } from 'gatsby'

interface Props {
    validadeSchemaDelivery: any
    onSubmitDelivery(e: any): void
    validadeSchemaPayment: any

}

export const CheckoutContext = createContext<Props>({
    validadeSchemaDelivery: {},
    onSubmitDelivery: () => { },
    validadeSchemaPayment: {},

})


const CheckoutProvider: FC = ({ children }) => {

    const onSubmitDelivery = (errors: any) => {
        if (!errors) {
            navigate("/payment")
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
    });

    const validadeSchemaPayment = Yup.object().shape({
        parcel: Yup.string().required(),
        numberCard: Yup.string().required("Por favor, insira um número de cartão válido"),
        nameCard: Yup.string().required("Por favor, insira o nome no cartão"),
        validity: Yup.string().required("Por favor, insira a validade do seu cartão"),
        securityCode: Yup.string().required().max(3),
    });

    return (
        <CheckoutContext.Provider value={{
            validadeSchemaDelivery,
            onSubmitDelivery,
            validadeSchemaPayment,
        }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutProvider