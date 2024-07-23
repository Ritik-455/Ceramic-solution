import React from 'react'
import { Card } from '../common/Helper'
import { Redarrowcard } from '../common/Icon'
import Comnheading from '../common/Comnheading'


const Whatwedo = () => {
    return (
        <>
            <div className="container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1164px] py-[140px]">
                <Comnheading text="What we do" spacing="pb-6" align="text-center" />
                <div className="row">
                    {Card.map((data, index) => (
                        <div className="col-12 md:col-6 flex justify-center lg:col-4 pt-6">
                            <div className="max-w-[364px] w-full rounded-3xl shadow-3xl p-6">
                                <img src={data.img} alt="card-img" />
                                <p className=' font-Plus font-semibold text-2xl text-black mt-6'>{data.head}</p>
                                <p className=' font-Plus font-normal text-base text-black mt-6'>{data.para}</p>
                                <p className=' font-Plus font-semibold text-base text-red mt-6'>Learn more <span>
                                    <Redarrowcard />
                                </span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Whatwedo