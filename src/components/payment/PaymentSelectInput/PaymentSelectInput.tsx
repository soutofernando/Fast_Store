import { Field } from 'formik'
import React, { FC } from 'react'
import { useCart } from 'src/sdk/cart/useCart'

const OPTIONS = [
    { key: "Número de parcelas", value: 1 },
    { key: "1 x", value: 1 },
    { key: "2 x", value: 2 },
    { key: "3 x", value: 3 },
    { key: "4 x", value: 4 },
    { key: "5 x", value: 5 },
    { key: "6 x", value: 6 },
]

interface Props {
    errors: any
    touched: any
}

const PaymentSelectInput: FC<Props> = ({ errors, touched }) => {

    const { total } = useCart()


    return (
        <div>
            <Field as="select" className={
                !errors.parcel && touched.parcel ?
                    "border border-b-4 border-green-600 p-4 w-full" :
                    touched.parcel ? "border border-red-600 border-b-4 p-4 w-full" :
                        " border border-black p-4 w-full"} name="parcel" type="text"
            >
                {
                    OPTIONS.map(option => (

                        <option key={option.key} value={option.value}>{option.key} ${(total /option.value).toFixed(2)}</option>
                    ))
                }
            </Field>
        </div>
    )
}

export default PaymentSelectInput