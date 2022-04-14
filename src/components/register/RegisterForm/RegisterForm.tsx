import React, { useContext } from 'react'
import { Form, Formik } from "formik"
import { FireContext } from 'src/utils/FireContext/FireProvider'
import Icon from 'src/components/ui/Icon'
import RegisterEmailForm from '../RegisterEmailForm/RegisterEmailForm'
import RegisterPasswdForm from '../RegisterPasswdForm/RegisterPasswdForm'
import Button from 'src/components/ui/Button'

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
                    <RegisterEmailForm errors={errors} touched={touched} />
                    <RegisterPasswdForm errors={errors} touched={touched} />
                    <div className='mt-4'>
                        {
                            inRegister ? <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="mt-1 mr-2" />
                                Email e senha já registrados.
                            </span> : ''
                        }
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