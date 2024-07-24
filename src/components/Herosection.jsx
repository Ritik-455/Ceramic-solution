import React from 'react'
import Header from './Header'
import Comnbtn from '../common/Comnbtn'
import trust from '../assets/images/webp/trust.webp'
import google from '../assets/images/webp/google-review.webp'
import installer from '../assets/images/svg/installer.svg'
import Quailty from '../assets/images/svg/quality.svg'

const Herosection = () => {
    return (
        <>
            <div className="bg-hero bg-center bg-cover">
                <Header />
                <div className="container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1164px] pb-14">
                    <h2 className=' font-Plus text-3xl sm:text-4xl md:text-5xl font-semibold xl:text-xxl xl:leading-[80.64px] text-white pt-[78px]'>
                        Transform Your Space with <span className=' lg:block'>Precision and Quality:</span>
                        Get a Free Quote Today!
                    </h2>
                    <p className=' font-Plus font-normal text-base md:text-lg lg:text-lg text-white max-w-[742px] mt-5'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade nyheter eurosamma sol: teroktig,</p>
                    <Comnbtn spacing=" mt-9" />
                    <div className="hidden sm:flex gap-6 mt-16 flex-wrap">
                        <img src={google} alt="Trust" className=' max-w-2xxl' />
                        <img src={trust} alt="trust" className=' max-w-2xxl' />
                        <img src={installer} alt="installer" />
                        <img src={Quailty} alt="Quailty" />
                    </div>
                    <div className="flex gap-6 flex-wrap sm:hidden mt-16">
                        <img src={google} alt="Trust" className=' max-w-2xxl' />
                        <img src={trust} alt="trust" className=' max-w-2xxl' />
                    </div>
                    <div className="flex gap-6 sm:hidden mt-6">
                        <img src={installer} alt="installer" />
                        <img src={Quailty} alt="Quailty" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection