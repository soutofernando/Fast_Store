import { Link } from 'gatsby'
import React from 'react'

const PrivacyNotice = () => {
    return (
        <div className='mt-4'>
            <span>Ao clicar em 'Enviar' você concordará com os&nbsp;
                <Link to="/login" className='underline hover:bg-black hover:text-white'>
                    Termos e Condições adiClub
                </Link> e a&nbsp;
                <Link to="/login" className='underline hover:bg-black hover:text-white'>
                    Política de Privacidade
                </Link>
                .
            </span>
            <div className='mt-2 mb-2'>
                <span>ou</span>
            </div>
        </div>
    )
}

export default PrivacyNotice