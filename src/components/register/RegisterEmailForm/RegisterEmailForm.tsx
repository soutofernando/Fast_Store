import React, { FC } from 'react'
import { Field } from 'formik'
import Icon from 'src/components/ui/Icon'

interface Props {
    errors: any
    touched: any
}

const RegisterEmailForm: FC<Props> = ({ errors, touched }) => {
    return (
        <div>
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
        </div>
    )
}

export default RegisterEmailForm