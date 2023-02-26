import { BenefitType, SelectedPage } from "@/shared/types"
import {motion} from 'framer-motion'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import HText from "@/shared/HText";
import React from "react";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import PushBenefits from "@/assets/PushBenefits.png"

const benefits: Array<BenefitType> = [
    {
        icon : <HomeModernIcon className="h-6 w-6" />,
        title : "Fun and Engaging Workouts",
        description : "Dance classes offer a fun and engaging way to get fit and improve your cardiovascular health. Our dance classes provide a full-body workout that will get your heart pumping and help you burn calories, all while having a blast."
    },
    {
        icon : <UserGroupIcon className="h-6 w-6" />,
        title : "Experienced Instructors",
        description : "Our experienced instructors are passionate about dance and are committed to helping you achieve your goals. They'll guide you through every step of the way, ensuring that you learn proper technique and have fun while doing it."
    },
    {
        icon : <AcademicCapIcon className="h-6 w-6" />,
        title : "International certifications",
        description : "Our exams are conducted by recognized organizations and provide a valuable credential that can help you stand out in the dance world. Join us today and take your dance skills to the next level!"
    },
]
const container = {
    hidden : {},
    visible : {
        transition : {staggerChildren : 0.2}
    }
}

type Props = {
    setSelectedPage : (value : SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id='benefits' className="mx-auto min-h-full w-5/6 md:py-20 py-10 text-header-100" >
        <motion.div 
         onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div 
            initial='hidden'
            whileInView="visible"
             viewport={{once:true, amount:0.5}} 
             transition={{ 
             duration : 0.5}} 
             variants={{
               hidden : {opacity : 0, x: -50},
               visible : {opacity : 1, x : 0}
           }} 
            >
                <HText>MORE THAN JUST DANCE</HText>
                <p className="my-5 text-blue-500">Are you ready to boogie down and get your groove on? 
                    Look no further than our dance class! We've got a wide 
                    variety of classes to suit all interests and skill levels. 
                    Whether you want to learn the latest hip hop moves or get your 
                    Bollywood fix, our experienced instructors are here to help you 
                    bust a move and break a sweat. And if you're looking for something
                    a little more traditional, check out our folk dancing class. Or, if
                    you're ready to party, come join our Zumba class and dance the calories
                    away. And for those who have always wanted to try their hand at DJing,
                    we've got just the class for you. No matter what your dance goals may be,
                     we're here to help you achieve them in a fun and friendly environment.
                      So come join us and let's get the party started!</p>
            </motion.div >
            {/* BENEFIT SECTION */}
            <motion.div initial = "hidden" whileInView="visible" viewport={{once : true, amount : 0.5}} variants={container} className="items-center justify-between gap-8 mt-5 md:flex" >
                {benefits.map( (benefit : BenefitType) => (
                    <Benefit 
                    key={benefit.title} 
                    icon = {benefit.icon}
                    title = {benefit.title}
                    description = {benefit.description} />
                    // setSelectedPage={setSelectedPage}
                ))} 
            </motion.div>
            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img className="mx-auto" alt="benefits-img" src={PushBenefits} />
                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative" >
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves" >
                        <motion.div initial='hidden'
            whileInView="visible"
             viewport={{once:true, amount:0.5}} 
             transition={{ 
             duration : 0.5}} 
             variants={{
               hidden : {opacity : 0, x: 50},
               visible : {opacity : 1, x : 0}
           }}  >
                        <HText>
                        FIND YOUR RHYTHM AND REAP THE {" "}
                        <span className="text-blue-500" >REWARDS</span>
                        </HText>
                    </motion.div>
                        </div>
                   
                    </div>
                    {/* DESCRIPTION */}
                    <motion.div initial='hidden'
            whileInView="visible"
             viewport={{once:true, amount:0.5}} 
             transition={{ 
             duration : 0.5}} 
             variants={{
               hidden : {opacity : 0, x: 50},
               visible : {opacity : 1, x : 0}
           }}   >
                        <p className="my-5 text-blue-500" >At our dance class, we believe that everyone can benefit from the joy of dance. Whether you're looking to get in shape, improve your coordination, or simply have fun, our classes provide a range of benefits to help you achieve your goals. From the physical benefits of increased fitness and flexibility to the mental benefits of stress relief and improved mood, dancing has been shown to have a positive impact on both the mind and body. </p>
                        <p className="mb-5 text-blue-500">Plus, our experienced instructors and supportive community make it easy to stay motivated and engaged. So why not join us today and discover the many ways that dance can benefit you?</p>
                    </motion.div  >
                    {/* BUTTON */}
                    <div className="relative mt-16" >
                        {/* <div className="before:absolute before:-bottom-20 before:right-40 before:z[-1] before:content-sparkles"  >
                        </div> */}
                            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits