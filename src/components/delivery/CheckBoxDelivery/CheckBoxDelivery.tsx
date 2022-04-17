import { Link } from 'gatsby'
import React, { FC } from 'react'
import Icon from 'src/components/ui/Icon'
import { Form, Field } from 'formik'

interface Props {
    errors: any
    touched: any
}

const CheckBoxDelivery: FC<Props> = ({ errors, touched }) => {

    return (
        <div className='mt-6'>
            <Form>
                <div className='mb-4'>
                    <div className='flex'>
                        <Field type="checkbox" name="verifiedBox" className="w-5 h-5 cursor-pointer bg-black" />
                        <span className='ml-2'>Minhas informações de cobrança e entrega são as mesmas</span>
                    </div>
                    <div>
                        {errors.verifiedBox && touched.verifiedBox &&
                            <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.verifiedBox}</span>}
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex'>
                        <Field type="checkbox" name="ageofBox" className="w-5 h-5 cursor-pointer"/>
                        <span className='ml-2'>Tenho mais de 18 anos &nbsp;<Link className='hover:bg-black hover:text-white underline' to="/delivery">Por que isso importa?</Link> *</span>
                    </div>
                    <div>
                        {errors.ageofBox && touched.verifiedBox &&
                            <span className='text-red-600 font-mono text-sm font-black flex'><Icon name='X' width={14} height={14} weight={"bold"} className="md:mt-1 mr-2" />{errors.ageofBox}</span>}
                    </div>
                </div>
            </Form>
        </div >
    )
}

export default CheckBoxDelivery