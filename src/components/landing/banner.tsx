"use client"
import { useEffect } from 'react'
import AnimScroll from "./animScroll"
import Typing from './Typing'
import { dashboard } from '../../../public/images'
import Image from 'next/image'

function Banner() {
    
    useEffect(() => {
        AnimScroll(".anim-1", 150, { trigger: ".anim-1" });
        AnimScroll(".anim-2", 200, { trigger: ".anim-2" });
        AnimScroll(".anim-3", 250, { trigger: ".anim-3" });
    }, [])

    return (
        <div className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto text-white text-center mt-16 xl:mt-28">
            <div className="w-full lg:w-4/6 mx-auto">
                <h1 className="anim-1 text-4xl md:text-5xl font-bold leading-tight md:leading-tight">
                    Help your life to make it easier to manage finances <br className="sm:hidden" />
                    <Typing />
                </h1>
                <p className="anim-2 mt-5 text-base md:text-lg leading-normal md:leading-relaxed">
                    By using Our software, Your life Will be easier because Now you can Manage your fincance easier than before and you can get A 50% Discount if you buy this software
                </p>
                <div className="anim-2 mt-7">
                    <button className="bg-btnDark text-white w-44 mx-3 h-16 font-medium rounded-lg hover:shadow-xl transition-all">
                        <a className="hover:text-gray-200 transition-all" href="/sign-in">Sign Up</a>
                    </button>
                    <button className="bg-btnLight text-blue w-44 mx-3 h-16 font-medium rounded-lg hover:shadow-xl transition-all">Watch a video</button>
                </div>
            </div>
            <Image className="anim-3 mt-10 absolute left-0 right-0 md:relative md:mt-20 shadow-2xl" src={dashboard} alt="software dashboard" />
        </div>
    )
}

export default Banner
