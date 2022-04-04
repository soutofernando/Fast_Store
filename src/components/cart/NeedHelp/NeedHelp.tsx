import { Link } from "@faststore/ui"
import React from 'react'

const NeedHelp = () => {
    return (
        <div className="mt-4">
            <div>
                <span className='text-base font-black font-mono'>PRECISA DE AJUDA?</span>
            </div>
            <div className="cursor-pointer hover:bg-black hover:text-white mt-3 underline decoration-2 ">
                <Link>Reembolsos</Link>
            </div>
            <div className="cursor-pointer hover:bg-black hover:text-white mt-3 underline decoration-2">
                <Link>Como usar o Cupom de Desconto</Link>
            </div>
            <div className="cursor-pointer hover:bg-black hover:text-white mt-3 font-light underline decoration-2">
                <Link>Informações de entregas, prazos e frete</Link>
            </div>
            <div className="cursor-pointer hover:bg-black hover:text-white mt-3 underline decoration-2">
                <Link>Troca e Devoluções</Link>
            </div>
        </div>
    )
}

export default NeedHelp