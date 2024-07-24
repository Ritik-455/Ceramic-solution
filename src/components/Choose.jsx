import React from 'react'
import Comnheading from '../common/Comnheading'
import { Callicon, Like, Star } from '../common/Icon'
import Comnbtn from '../common/Comnbtn'
import chooseus from '../assets/images/webp/choose-img.webp'


const Choose = () => {
    return (
        <>
            <div className="bg-pink">
                <div className="container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1164px] py-16 xl:py-[100px]">
                    <div className="row">
                        <div className="col-12 md:col-6">
                            <Comnheading text="Why Choose us?" />
                            <p className=' font-Plus font-normal text-base md:text-lg text-black mt-4 md:mt-5'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. </p>
                            <div className="flex gap-5 mt-8">
                                <div className="w-2xl h-2xl rounded-[10px] bg-darkpink flex justify-center items-center">
                                    <Star />
                                </div>
                                <div className="">
                                    <p className=' font-Plus font-semibold text-xl text-black'>High Quality Materials</p>
                                    <p className=' font-Plus font-normal text-sm md:text-base text-black mt-3 max-w-[370px]'>Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 mt-8">
                                <div className="w-2xl h-2xl rounded-[10px] bg-darkpink flex justify-center items-center">
                                    <Like />
                                </div>
                                <div className="">
                                    <p className=' font-Plus font-semibold text-xl text-black'>Durability with Warranty</p>
                                    <p className=' font-Plus font-normal text-sm md:text-base text-black mt-3 max-w-[370px]'>Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 mt-8">
                                <div className="w-2xl h-2xl rounded-[10px] bg-darkpink flex justify-center items-center">
                                    <Callicon />
                                </div>
                                <div className="">
                                    <p className=' font-Plus font-semibold text-xl text-black'>24/7 Support</p>
                                    <p className=' font-Plus font-normal text-sm md:text-base text-black mt-3 max-w-[370px]'>Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.</p>
                                </div>
                            </div>
                            <Comnbtn spacing="mt-9" />
                        </div>
                        <div className="col-6 relative md:flex flex-col items-end hidden">
                            <img src={chooseus} alt="chooseus" className=' max-w-[469px] w-full z-10 relative' />
                            <div className="hidden xl:block absolute top-[34%] left-[4%] w-[300px] h-[396px] bg-red rounded-[24px] z-[2]">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Choose