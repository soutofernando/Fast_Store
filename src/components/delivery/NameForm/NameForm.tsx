import { Field } from 'formik'
import React, { FC } from 'react'
import Icon from 'src/components/ui/Icon'

interface Props {
    errors: any
    touched: any

}

const NameForm: FC<Props> = ({ errors, touched }) => {
    return (
        <div className='lg:flex'>
            <div className='lg:w-1/2 mr-4'>
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
            <div className='lg:w-1/2'>
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
    )
}

export default NameForm