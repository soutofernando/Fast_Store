import React, { useContext } from 'react'
import { Field, Form, Formik } from "formik"
import Button from 'src/components/ui/Button'
import { FireContext } from 'src/utils/FireContext/FireProvider'
import Icon from 'src/components/ui/Icon'

const RegisterForm = () => {

    const { onSubmitRegister, validateSchemaRegister, inRegister } = useContext(FireContext)

    return (
        <div>
            <Formik
                validationSchema={validateSchemaRegister}
                onSubmit={onSubmitRegister}
                initialValues={
                    {
                        registerEmail: "",
                        registerPasswd: "",
                    }
                } >
                {({ errors, touched }) => (<Form>
                    <div className='mt-4'>
                        <label className='font-mono text-base'>Email</label>
                        <Field placeholder="E-mail *" className={
                            !errors.registerEmail && touched.registerEmail ?
                                "border border-b-4 border-green-600 p-4 w-full" :
                                touched.registerEmail ? "border border-red-600 border-b-4 p-4 w-full" :
                                    " border border-black p-4 w-full"} name="registerEmail" type="email"
                        />
                        {errors.registerEmail && touched.registerEmail &&
                            <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.registerEmail}</span>}
                    </div>
                    <div className='mt-4'>
                        <label className=' font-mono text-base'>Senha</label>
                        <Field placeholder="Senha *" className={
                            !errors.registerPasswd && touched.registerPasswd ?
                                "border border-b-4 border-green-600 p-4 w-full"
                                : touched.registerPasswd ? "border border-red-600 border-b-4 p-4 w-full" :
                                    "border border-black  p-4 w-full"
                        } name="registerPasswd" type="password"
                        />
                        {errors.registerPasswd && touched.registerPasswd &&
                            <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="mt-1 mr-2" />{errors.registerPasswd}</span>}
                    </div>
                    <div className='mt-4'>
                        {inRegister ? <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="mt-1 mr-2" />Email e senha já registrados.</span> : '' }
                    </div>
                    <div className='mt-4 mb-4'>
                        <Button type="submit" className='bg-black text-white p-4 font-mono font-black hover:text-gray-600 '>
                            <div className='flex'>REGISTRAR<div className='ml-4'>
                                <Icon name='ArrowRight' width={25} height={25} />
                            </div>
                            </div>
                        </Button>
                    </div>
                </Form>)}
            </Formik>
        </div>
    )
}

export default RegisterForm