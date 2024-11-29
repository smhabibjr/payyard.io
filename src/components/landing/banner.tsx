"use client"
import { dashboard } from '../../../public/images'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'


const targetAudiences = ["freelancers", "creators", "small teams"]

function Banner() {

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % targetAudiences.length)
      }, 3000) // Change every 3 seconds
  
      return () => clearInterval(interval)
    }, [])

    return (
        <>
        <div className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto text-white text-center mt-16 xl:mt-28">
            <div className="w-full lg:w-4/6 mx-auto">
                
                <motion.h2
                    className="anim-1 text-4xl md:text-5xl font-bold leading-tight md:leading-tight"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    The missing platform for &nbsp; <br />
                     <AnimatePresence mode="wait">
                        <motion.span
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block"
                            >
                            {targetAudiences[currentIndex]}
                            </motion.span>
                        </AnimatePresence>
                </motion.h2>
                <motion.p
                    className="mt-5 text-base md:text-lg leading-normal md:leading-relaxed"
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Simplify your invoicing, accept payments securely, and transfer funds home—an all-in-one platform built for freelancers and small businesses.
                </motion.p>
                <motion.div
                    className="anim-2 mt-7"
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Link href="/sign-in">
                        <button className="bg-btnDark text-white w-44 h-16 font-medium rounded-lg hover:shadow-xl transition duration-200">
                            <span className="hover:text-gray-200 transition-all">Sign Up</span>
                        </button>
                    </Link>
                    
                </motion.div>
            </div>

            <motion.div
                className="anim-3 mt-10 absolute left-0 right-0 md:relative md:mt-20 shadow-2xl"
                initial={{ y: 250, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Image src={dashboard} alt="software dashboard" />
            </motion.div>
        </div>
        </>
    )
}

export default Banner
