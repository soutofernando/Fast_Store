import { Field, Form, Formik } from 'formik'
import React, { useContext } from 'react'
import Button from 'src/components/ui/Button'
import { FireContext } from 'src/utils/FireContext/FireProvider'
import Icon from 'src/components/ui/Icon'

const LoginForm = () => {

    const { onSubmitLogin, validateSchema } = useContext(FireContext)

    return (
        <div>
            <Formik
                validationSchema={validateSchema}
                initialValues={{
                    loginEmail: "",
                    loginPasswd: ""
                }}
                onSubmit={onSubmitLogin}
            >
                {({ errors, touched }) => (
                    <div>
                        <Form>
                            <div className='mt-4'>
                                <label className='font-mono text-base'>Email:</label>
                                <Field name="loginEmail" type="email" placeholder="E-mail *" className={
                                    !errors.loginEmail && touched.loginEmail ?
                                        "border border-b-4 border-green-600 p-4 w-full" :
                                        touched.loginEmail ? "border border-red-600 border-b-4 p-4 w-full" :
                                            "border border-black p-4 w-full"}
                                />
                                {errors.loginEmail && touched.loginEmail &&
                                    <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="mt-1 mr-2" />{errors.loginEmail}</span>}
                            </div>
                            <div className='mt-4'>
                                <label className='font-mono text-base'>Senha:</label>
                                <Field name="loginPasswd" type="password" placeholder="Senha" className={
                                    !errors.loginPasswd && touched.loginPasswd ?
                                        "border border-b-4 border-green-600 p-4 w-full" :
                                        touched.loginPasswd ? "border border-red-600 border-b-4 p-4 w-full" :
                                            "border border-black p-4 w-full"} />
                                {errors.loginPasswd && touched.loginPasswd &&
                                    <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="mt-1 mr-2" />{errors.loginPasswd}</span>}

                            </div>
                            <div className='mt-4'>
                                <Button type="submit" className='bg-black text-white p-4 font-mono font-black hover:text-gray-600 '>
                                    <div className='flex'>IDENTIFIQUE-SE<div className='ml-4'>
                                        <Icon name='ArrowRight' width={25} height={25} />
                                    </div>
                                    </div>
                                </Button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm