import React from 'react'

interface Props {
    team: string
    img: string
}

interface teams {
    teams: Props[]
}

const TeamImg = ({ teams }: teams) => {
    return (
        <div className="flex justify-center bg-slate-200 w-full">
            <div className="block">
                <span className="font-mono font-semibold flex justify-center p-3">ENCONTRE SEU TIME</span>
                <div className="flex">
                    {
                        teams.map((item: any, key: any) => (
                            <div key={key} className="pl-6 pb-8">
                                <img width="51px" src={item.img} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default TeamImg