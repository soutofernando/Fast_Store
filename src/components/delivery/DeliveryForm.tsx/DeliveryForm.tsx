import { Field, Form, Formik } from 'formik'
import React, { useContext } from 'react'
import { CheckoutContext } from 'src/utils/CheckoutContext/CheckoutProvider'
import Icon from 'src/components/ui/Icon'
import ContactInfo from '../ContactInfo/ContactInfo'
import DeliveryMethod from '../DeliveryMethod/DeliveryMethod'
import CheckBoxDelivery from '../CheckBoxDelivery/CheckBoxDelivery'
import Button from 'src/components/ui/Button'
import { Link } from 'gatsby'


const DeliveryForm = () => {

    const { validadeSchemaDelivery, onSubmitDelivery } = useContext(CheckoutContext)

    return (
        <div>
            <Formik
                onSubmit={onSubmitDelivery}
                validationSchema={validadeSchemaDelivery}
                initialValues={{
                    username: "",
                    secondName: "",
                    adress: "",
                    postalCode: "",
                    numberHouse: "",
                    additionalInfo: "",
                    district: "",
                    city: "",
                    state: "",
                    email: "",
                    phoneNumber: "",
                    cpf: "",
                }}
            >
                {
                    ({ errors, touched }) => (
                        <Form>
                            <div className='mt-4 lg:flex'>
                                <div>
                                    <label className='font-mono text-base'>Nome</label>
                                    <Field placeholder="Nome *" className={
                                        !errors.username && touched.username ?
                                            "border border-b-4 border-green-600 p-4 w-full" :
                                            touched.username ? "border border-red-600 border-b-4 p-4 w-full" :
                                                " border border-black p-4 w-full"} name="username" type="text"
                                    />
                                    {errors.username && touched.username &&
                                        <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.username}</span>}
                                </div>
                                <div className='lg:ml-6'>
                                    <label className='font-mono text-base'>Sobrenome</label>
                                    <Field placeholder="Sobrenome *" className={
                                        !errors.secondName && touched.secondName ?
                                            "border border-b-4 border-green-600 p-4 w-full" :
                                            touched.secondName ? "border border-red-600 border-b-4 p-4 w-full" :
                                                " border border-black p-4 w-full"} name="secondName" type="text"
                                    />
                                    {errors.secondName && touched.secondName &&
                                        <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.secondName}</span>}
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className='font-mono text-base'>Endereço</label>
                                <Field placeholder="Endereço *" className={
                                    !errors.adress && touched.adress ?
                                        "border border-b-4 border-green-600 p-4 w-full" :
                                        touched.adress ? "border border-red-600 border-b-4 p-4 w-full" :
                                            " border border-black p-4 w-full"} name="adress" type="text"
                                />
                                {errors.adress && touched.adress &&
                                    <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.adress}</span>}
                            </div>
                            <div className='lg:flex mt-4'>
                                <div>
                                    <label className='font-mono text-base'>CEP</label>
                                    <Field placeholder="CEP *" className={
                                        !errors.postalCode && touched.postalCode ?
                                            "border border-b-4 border-green-600 p-4 w-full" :
                                            touched.postalCode ? "border border-red-600 border-b-4 p-4 w-full" :
                                                " border border-black p-4 w-full"} name="postalCode" type="text"
                                    />
                                    {errors.postalCode && touched.postalCode &&
                                        <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.postalCode}</span>}
                                </div>
                                <div className='lg:ml-6'>
                                    <label className='font-mono text-base'>Numero</label>
                                    <Field placeholder="Numero *" className={
                                        !errors.numberHouse && touched.numberHouse ?
                                            "border border-b-4 border-green-600 p-4 w-full" :
                                            touched.numberHouse ? "border border-red-600 border-b-4 p-4 w-full" :
                                                " border border-black p-4 w-full"} name="numberHouse" type="text"
                                    />
                                    {errors.numberHouse && touched.numberHouse &&
                                        <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.numberHouse}</span>}
                                </div>
                            </div>
                            <div className='lg:flex mt-4'>
                                <div>
                                    <label className='font-mono text-base'>Informações adicionais</label>
                                    <Field placeholder="Informaçoes adicionais " className={
                                        !errors.additionalInfo && touched.additionalInfo ?
                                            "border border-b-4 border-green-600 p-4 w-full" :
                                            touched.additionalInfo ? "border border-red-600 border-b-4 p-4 w-full" :
                                                " border border-black p-4 w-full"} name="additionalInfo" type="text"
                                    />
                                    {errors.additionalInfo && touched.additionalInfo &&
                                        <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.additionalInfo}</span>}
                                </div>
                                <div className='lg:ml-6'>
                                    <label className='font-mono text-base'>Bairro</label>
                                    <Field placeholder="Bairro*" className={
                                        !errors.district && touched.district ?
                                            "border border-b-4 border-green-600 p-4 w-full" :
                                            touched.district ? "border border-red-600 border-b-4 p-4 w-full" :
                                                " border border-black p-4 w-full"} name="district" type="text"
                                    />
                                    {errors.district && touched.district &&
                                        <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.district}</span>}
                                </div>
                            </div>
                            <div className='lg:flex mt-4'>
                                <div>
                                    <label className='font-mono text-base'>Cidade</label>
                                    <Field placeholder="Cidade *" className={
                                        !errors.city && touched.city ?
                                            "border border-b-4 border-green-600 p-4 w-full" :
                                            touched.city ? "border border-red-600 border-b-4 p-4 w-full" :
                                                " border border-black p-4 w-full"} name="city" type="text"
                                    />
                                    {errors.city && touched.city &&
                                        <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.city}</span>}
                                </div>
                                <div className='lg:ml-6'>
                                    <label className='font-mono text-base'>Estado</label>
                                    <Field placeholder="Estado *" className={
                                        !errors.state && touched.state ?
                                            "border border-b-4 border-green-600 p-4 w-full" :
                                            touched.state ? "border border-red-600 border-b-4 p-4 w-full" :
                                                " border border-black p-4 w-full"} name="state" type="text"
                                    />
                                    {errors.state && touched.state &&
                                        <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.state}</span>}
                                </div>
                            </div>
                            <div className=' mt-10'>
                                <span className='flex'><div className='font-black'>País:&nbsp;</div> Brasil </span>
                            </div>

                            <DeliveryMethod />

                            <ContactInfo />

                            <div className='mt-4'>
                                <label className='font-mono text-base'>Email</label>
                                <Field placeholder="E-mail *" className={
                                    !errors.email && touched.email ?
                                        "border border-b-4 border-green-600 p-4 w-full" :
                                        touched.email ? "border border-red-600 border-b-4 p-4 w-full" :
                                            " border border-black p-4 w-full"} name="email" type="email"
                                />
                                {errors.email && touched.email &&
                                    <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.email}</span>}
                            </div>
                            <div className='mt-4'>
                                <label className='font-mono text-base'>Telefone</label>
                                <Field placeholder="Telefone *" className={
                                    !errors.phoneNumber && touched.phoneNumber ?
                                        "border border-b-4 border-green-600 p-4 w-full" :
                                        touched.phoneNumber ? "border border-red-600 border-b-4 p-4 w-full" :
                                            " border border-black p-4 w-full"} name="phoneNumber" type="text"
                                />
                                {errors.phoneNumber && touched.phoneNumber &&
                                    <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.phoneNumber}</span>}
                            </div>
                            <div className='mt-4'>
                                <label className='font-mono text-base'>CPF</label>
                                <Field placeholder="CPF *" className={
                                    !errors.cpf && touched.cpf ?
                                        "border border-b-4 border-green-600 p-4 w-full" :
                                        touched.cpf ? "border border-red-600 border-b-4 p-4 w-full" :
                                            " border border-black p-4 w-full"} name="cpf" type="text"
                                />
                                {errors.cpf && touched.cpf &&
                                    <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.cpf}</span>}
                            </div>
                            <CheckBoxDelivery />
                            <div className='mt-6 mb-4'>
                                <Button type="submit" className='bg-black text-white p-4 font-mono font-black hover:text-gray-600 '>
                                    <div className='flex'>CONTINUAR PAGAMENTO<div className='ml-4'>
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

export default DeliveryForm