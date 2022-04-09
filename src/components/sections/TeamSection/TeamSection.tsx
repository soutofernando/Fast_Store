import React from 'react'
import Section from '../Section'
import TeamImg from './TeamImg'

const teams = [
    {
        team: "flamengo",
        img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ptBR/Images/BOS-CONMEBOL_FlamengoFC_tcm194-392790.png",
    },
    {
        team: "saoPaulo",
        img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ptBR/Images/Sao_Paulo_tcm194-414405.png",
    },
    {
        team: "cruzeiro",
        img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ptBR/Images/PICKER-CRUZEIRO-NEW_tcm194-650280.png",
    },
    {
        team: "internacional",
        img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ptBR/Images/inter_tcm194-563629.png",
    },
    {
        team: "bayern",
        img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ptBR/Images/bayern_peru_tcm194-570470.png",
    },
    {
        team: "juventus",
        img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ptBR/Images/juventus_pe_tcm194-570469.png",
    },
    {
        team: "realMadrid",
        img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ptBR/Images/realmadrid_pe_tcm194-570472.png",
    },
    {
        team: "manchesterUnited",
        img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ptBR/Images/picker_ManchesterUnited_tcm194-762991.png",
    },


]


const TeamSection = () => {
    return (
        <Section>
            <div>
                <TeamImg teams={teams} />
            </div>
        </Section>
    )
}

export default TeamSection