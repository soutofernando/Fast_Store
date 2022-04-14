import React, { FC } from 'react'
import { Field } from 'formik'
import Icon from 'src/components/ui/Icon'

interface Props {
    errors: any
    touched: any
}
const RegisterPasswdForm: FC<Props> = ({ errors, touched }) => {
    return (
        <div>
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
        </div>
    )
}

export default RegisterPasswdForm