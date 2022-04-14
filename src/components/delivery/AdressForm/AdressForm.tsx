import React, { FC } from 'react'
import Icon from 'src/components/ui/Icon'
import { Field } from "formik"
import DeliverySelectState from '../DeliverySelectState/DeliverySelectState'

interface Props {
    errors: any
    touched: any
    values: any
}

const AdressForm: FC<Props> = ({ errors, touched, values}) => {
    return (
        <div>
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
            <div className='lg:flex mt-4 w-full'>
                <div className='lg:w-1/2'>
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
                <div className='lg:ml-6 lg:w-1/2'>
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
            <div className='lg:flex mt-4 w-full'>
                <div className='lg:w-1/2'>
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
                <div className='lg:ml-6 lg:w-1/2'>
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

            <div className='lg:flex mt-4 w-full'>
                <div className='lg:w-1/2'>
                    <label className='font-mono text-base'>Cidade</label>
                    <Field placeholder="Cidade *" className={
                        !errors.city && touched.city ?
                            "border border-b-4  border-green-600 p-4 w-full" :
                            touched.city ? "border border-red-600 border-b-4 p-4 w-full" :
                                " border border-black p-4 w-full"} name="city" type="text"
                    />
                    {errors.city && touched.city &&
                        <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.city}</span>}
                </div>
                <div className='lg:ml-6 lg:w-1/2'>
                    <label className='font-mono'>Estado</label>
                    <DeliverySelectState name="state" state={values.state} errors={errors} touched={touched} />
                    {errors.state && touched.state &&
                        <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.state}</span>}
                </div>
            </div>
        </div>
    )
}

export default AdressForm