import React from 'react'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'

const LoginInfo = () => {
    return (
        <div>
            <div>
                <span className="text-4xl font-black">ENTRE PARA O CLUBE. RECEBA BENEFÍCIOS</span>
            </div>
            <div className='mt-4'>
                <span>Entre para o adiclub e ganhe benefícios hoje:</span>
            </div>
            <div className='mt-4 ml-2'>
                <div className='flex mt-3'>
                    <div className='mt-1'>
                        <Icon name="Plus" width={20} height={20} />
                    </div>
                    <span>É por isso que quando você entra para o Clube você ganha 15% de desconto.</span>
                </div>
                <div className='flex mt-3'>
                    <div className='mt-1'>
                        <Icon name="Plus" width={20} height={20} />
                    </div>
                    <span>Acesso as melhores promoções</span>
                </div>
                <div className='flex mt-3'>
                    <div className='mt-1'>
                        <Icon name="Plus" width={20} height={20} />
                    </div>
                    <span>Ganhar pontos para desbloquear benefícios exclusivos</span>
                </div>
                <div className='flex mt-3'>
                    <div className='mt-1'>
                        <Icon name="Plus" width={20} height={20} />
                    </div>
                    <span>Acesso antecipado aos lançamentos mais esperados</span>
                </div>
            </div>
            <div className='mt-4'>
                <span>Se você gosta de esporte, moda, sustentabilidade e cultura, no adiClub você pode ganhar benefícios para elevar ainda mais sua paixão.</span>
            </div>
            <div className="mt-4">
                <span>Entre agora para o Clube para atingir seus objetivos e ficar mais perto do que você ama e ainda ter acesso ao melhor da adidas.</span>
            </div>
            <div className='mt-4'>
                <span>Quer saber mais sobre o adiClub?</span>
            </div>
            <div className='mt-4'>
                <Button className='bg-black text-white p-4 font-mono font-black hover:text-gray-600 '>
                    <div className='flex'>ENTRE PARA O CLUBE<div className='ml-4'>
                        <Icon name='ArrowRight' width={25} height={25} />
                    </div>
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default LoginInfo