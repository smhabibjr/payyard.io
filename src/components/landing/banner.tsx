"use client"
import Typing from './Typing'
import { dashboard } from '../../../public/images'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Banner() {

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
                    Empowering Freelancers to Get Paid.<br className="sm:hidden" />
                    {/* <Typing /> */}
                </motion.h2>
                <motion.h6
                    className="anim-1 text-1xl md:text-3xl font-bold leading-tight md:leading-tight"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    The missing platform for <br className="sm:hidden" />
                    <Typing />
                </motion.h6>

                <motion.p
                    className="anim-2 mt-5 text-base md:text-lg leading-normal md:leading-relaxed"
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Simplify invoicing, manage payments securely, and easily transfer funds home. Join the platform made just for you.
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
                    <button className="bg-btnLight text-blue w-44 mx-3 h-16 font-medium rounded-lg hover:shadow-xl transition-all">Watch a video</button>
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
