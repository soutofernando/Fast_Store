import React, { FC, useMemo } from 'react'
import { Field } from 'formik'
import Icon from 'src/components/ui/Icon'
import { validarCPF } from '../../../utils/ValidatorOfCpf/ValidatorOfCpf'
interface Props {
    errors: any
    touched: any
    values: any
}

const ContactInfo: FC<Props> = ({ errors, touched, values }) => {

    const isCpfValido = useMemo(() => {
        return validarCPF(values.cpf)
    }, [values.cpf])

    return (
        <div className='mt-6'>

            <div>
                <span className='text-4xl font-black'>INFORMAÇÕES DE CONTATO</span>
            </div>
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
                    !errors.cpf && touched.cpf && isCpfValido ?
                        "border border-b-4 border-green-600 p-4 w-full" :
                        touched.cpf ? "border border-red-600 border-b-4 p-4 w-full" :
                            " border border-black p-4 w-full"} name="cpf" type="text"
                />
                {errors.cpf && touched.cpf &&
                    <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.cpf}</span>}
            </div>
        </div>
    )
}

export default ContactInfo