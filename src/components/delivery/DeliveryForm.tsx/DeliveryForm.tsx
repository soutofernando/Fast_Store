import { Form, Formik } from 'formik'
import React, { useContext } from 'react'
import { CheckoutContext } from 'src/utils/CheckoutContext/CheckoutProvider'
import Icon from 'src/components/ui/Icon'
import ContactInfo from '../ContactInfo/ContactInfo'
import DeliveryMethod from '../DeliveryMethod/DeliveryMethod'
import CheckBoxDelivery from '../CheckBoxDelivery/CheckBoxDelivery'
import Button from 'src/components/ui/Button'
import NameForm from '../NameForm/NameForm'
import AdressForm from '../AdressForm/AdressForm'



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
                    verifiedBox: false,
                    ageofBox: false,
                }}
            >
                {
                    ({ errors, touched, values }) => (
                        <Form>
                            <NameForm errors={errors} touched={touched} />
                            <AdressForm errors={errors} touched={touched} values={values} />

                            <div className=' mt-10'>
                                <span className='flex'><div className='font-black'>País:&nbsp;</div> Brasil </span>
                            </div>

                            <DeliveryMethod />

                            <ContactInfo errors={errors} touched={touched} values={values} />

                            <CheckBoxDelivery errors={errors} touched/>

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
        </div >
    )
}

export default DeliveryForm