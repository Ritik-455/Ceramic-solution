import React from 'react'
import Comnheading from '../common/Comnheading'
import trust from '../assets/images/webp/trust.webp'
import google from '../assets/images/webp/google-review.webp'
import { Marktcard } from '../common/Helper'

const Customer = () => {
    return (
        <>
            <div className="container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1164px] py-xxl">
                <Comnheading text="What Our Customers Say" align="text-center" />
                <div className=" flex items-center flex-col">
                    <p className=' font-Plus font-normal text-lg text-center text-black max-w-[641px] mt-5'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p>
                    <div className="flex gap-6 mt-8">
                        <img src={google} alt="trust" className=' max-w-2xxl' />
                        <img src={trust} alt="trust" className=' max-w-2xxl' />
                    </div>
                </div>
            </div>
            {Marktcard.map((data, index) => (
                <div className="max-w-[364px] p-6 w-full shadow-4xl rounded-3xl">
                    <div className=" flex gap-2"><img src={data.images} alt="slider-img" />
                        <div className="">
                            <p className=' font-Manrope fon'>Mark T.</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}


export default Customer