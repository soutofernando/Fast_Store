
import React from "react"
import Icon from 'src/components/ui/Icon'
import './headerupper.scss'

const HeaderUpper = () => {
    return (
        <div data-headerupper>
            <div data-headerupper-div>
                <div>
                    <Icon name="Truck" width="20px" height="20px" />
                </div>
                <span className="headerupper-span">RECEBA NO DIA SEGUINTE OU NO MESMO DIA</span>
            </div>
            <div data-headerupper-div>
                <div>
                    <Icon name="ArrowRight" width="20px" height="20px" />
                </div>
                <span className="headerupper-span">COMPRE TAMBÉM PELO NOSSO WHATSAPP (11) 3377-3118</span>
            </div>
        </div>
    )
}


export default HeaderUpper;