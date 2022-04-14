import { Field } from 'formik'
import React, { FC } from 'react'

const OPTIONS = [
    { key: "Selecione seu Estado", value: "" },
    { key: "AP", value: "AP" },
    { key: "AM", value: "AM" },
    { key: "BA", value: "BA" },
    { key: "CE", value: "CE" },
    { key: "ES", value: "ES" },
    { key: "GO", value: "GO" },
    { key: "MA", value: "MA" },
    { key: "MT", value: "MT" },
    { key: "MS", value: "MS" },
    { key: "MG", value: "MG" },
    { key: "PA", value: "PA" },
    { key: "PB", value: "PB" },
    { key: "PR", value: "PR" },
    { key: "PE", value: "PE" },
    { key: "PI", value: "PI" },
    { key: "RJ", value: "RJ" },
    { key: "RN", value: "RN" },
    { key: "RS", value: "RS" },
    { key: "RO", value: "RO" },
    { key: "RR", value: "RR" },
    { key: "SC", value: "SC" },
    { key: "SP", value: "SP" },
    { key: "SE", value: "SE" },
    { key: "TO", value: "TO" },
    { key: "DF", value: "DF" },
]


interface Props {
    name: string
    state: string
    errors: any
    touched: any
}

const DeliverySelectState: FC<Props> = ({ name, state, errors, touched }) => {
    return (
        <div>
            <Field as="select" id={state} name={name} className={!errors.state && touched.state ?
                "border border-b-4  border-green-600 p-4 w-full" :
                touched.state ? "border border-red-600 border-b-4 p-4 w-full" :
                    " border border-black p-4 w-full"} >
                {
                    OPTIONS.map(option => (<option key={option.key} value={option.value}>{option.key}</option>))
                }
            </Field>
        </div>
    )
}

export default DeliverySelectState