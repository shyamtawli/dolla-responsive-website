import React from 'react'
import icon1 from '../../images/icon1.svg'
import icon2 from '../../images/icon2.svg'
import icon3 from '../../images/icon3.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={icon1}/>
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>
                    We help reduce your fees and increase 
                    your overall revenue.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon2}/>
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>
                    You can access our platfrom online
                    anywhere in the world.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon3}/>
                <ServicesH2>Permium Benefits</ServicesH2>
                <ServicesP>
                    Unlock our special membership card that returns
                    5% cash back.
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services