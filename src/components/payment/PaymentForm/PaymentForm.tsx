import { Form, Formik, Field } from 'formik'
import React, { useContext } from 'react'
import { CheckoutContext } from '../../../utils/CheckoutContext/CheckoutProvider'
import Icon from 'src/components/ui/Icon'
import PaymentWithTicket from '../PaymentWithTicket/PaymentWithTicket'
import Button from 'src/components/ui/Button'
import PaymentSelectInput from '../PaymentSelectInput/PaymentSelectInput'



const PaymentForm = () => {

    const { validadeSchemaPayment, onSubmitPayment } = useContext(CheckoutContext)


    return (
        <div className='mt-4'>
            <Formik
                onSubmit={onSubmitPayment}
                validationSchema={validadeSchemaPayment}
                initialValues={
                    {
                        parcel: "",
                        numberCard: "",
                        nameCard: "",
                        validity: "",
                        securityCode: "",
                    }
                }
            >
                {
                    ({ errors, touched }) => (
                        <Form>
                            <div className='mt-4'>
                                <div className="mt-4">
                                    <span className='font-black text-xl'>Cartão de crédito:</span>
                                </div>
                                <label className='font-mono text-base'>Parcelas</label>
                                <PaymentSelectInput errors={errors} touched={touched} />
                                {errors.parcel && touched.parcel &&
                                    <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.parcel}</span>}
                            </div>
                            <div className='mt-4'>
                                <label className='font-mono text-base'>Número do cartão</label>
                                <Field placeholder="Número do cartão *"  maxLength="16" className={
                                    !errors.numberCard && touched.numberCard ?
                                        "border border-b-4 border-green-600 p-4 w-full" :
                                        touched.numberCard ? "border border-red-600 border-b-4 p-4 w-full" :
                                            " border border-black p-4 w-full"} name="numberCard" type="text"
                                />
                                {errors.numberCard && touched.numberCard &&
                                    <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.numberCard}</span>}
                            </div>
                            <div className='mt-4'>
                                <label className='font-mono text-base'>Nome no cartão</label>
                                <Field placeholder="Nome no cartão *" className={
                                    !errors.nameCard && touched.nameCard ?
                                        "border border-b-4 border-green-600 p-4 w-full" :
                                        touched.nameCard ? "border border-red-600 border-b-4 p-4 w-full" :
                                            " border border-black p-4 w-full"} name="nameCard" type="text"
                                />
                                {errors.nameCard && touched.nameCard &&
                                    <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.nameCard}</span>}
                            </div>
                            <div className='flex'>
                                <div className='mt-4'>
                                    <label className='font-mono text-base'>Validade do cartão</label>
                                    <Field placeholder="MM/YYYY *" maxLength="7" className={
                                        !errors.validity && touched.validity ?
                                            "border border-b-4 border-green-600 p-4 w-full" :
                                            touched.validity ? "border border-red-600 border-b-4 p-4 w-full" :
                                                " border border-black p-4 w-full"} name="validity" type="text"
                                    />
                                    {errors.validity && touched.validity &&
                                        <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.validity}</span>}
                                </div>
                                <div className='mt-4 ml-6'>
                                    <label className='font-mono text-base'>Código do cartão</label>
                                    <Field placeholder="123 *" maxLength="3" className={
                                        !errors.securityCode && touched.securityCode ?
                                            "border border-b-4 border-green-600 p-4 w-full" :
                                            touched.securityCode ? "border border-red-600 border-b-4 p-4 w-full" :
                                                " border border-black p-4 w-full"} name="securityCode" type="text"
                                    />
                                    {errors.securityCode && touched.securityCode &&
                                        <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.securityCode}</span>}
                                </div>
                            </div>
                            <hr className='mt-6' />
                            <PaymentWithTicket />
                            <div className="mt-10">
                                <Button type="submit" className='bg-black text-white p-4 font-mono font-black hover:text-gray-600 '>
                                    <div className='flex'>FINALIZAR PEDIDO<div className='ml-4'>
                                        <Icon name='ArrowRight' width={25} height={25} />
                                    </div>
                                    </div>
                                </Button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default PaymentForm