import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import Push from "@/assets/Push.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";


type Props = {
    setSelectedPage : (value : SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)");

  return (
    <section id="home" className="gap-16 py-10 h-max md:pb-0 bg-blue-20" >
        {/* IMAGE AND HEADER */}
        <motion.div
        onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}   
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6" >
            {/* Main header */}
            <div className="z-10 md:mt-32 mt-16 md:basis-3/5" >
                {/* Headings */}
                <motion.div 
                initial='hidden'
                 whileInView="visible"
                  viewport={{once:true, amount:0.5}} 
                  transition={{duration : 0.5}} 
                  variants={{
                    hidden : {opacity : 0, x: -50},
                    visible : {opacity : 1, x : 0}
                }} 
                className="md:mt-5">
                    <div className="relative">
                        <div className="before:absolute before:-top-[90px] before:-left-5 before:z-[-1] md:before:content-evlovetext">
                            {/* <img src={HomePageText} alt="Home-Page-Text" /> */}
                        <p className="text-header-100 text-4xl md:text-[70px] font-montserrat font-bold flex my-0" >CREATIVE<span className="ml-5" >EDGE</span></p>
                        <p className="text-header-100 text-3xl font-montserrat font-thin md:text-[50px] md:mt-5 mt-3">groove galore</p>
                        </div>
                    </div>
                    <p className="mt-12 text-md md:text-start">Welcome to Creative Edge Dance Company! 
                    We've got everything from hip hop and Bollywood to folk and Zumba, and even DJ and Fitness classes. 
                    Our experienced instructors are here to help you achieve your dance and fitness goals 
                    in a fun and supportive environment. Come join our friendly dance community and get 
                    ready to shake things up!</p>
                </motion.div>

                <motion.div 
                 initial='hidden'
                 whileInView="visible"
                  viewport={{once:true, amount:0.5}} 
                  transition={{ delay: 0.1, duration : 0.5}} 
                  variants={{
                    hidden : {opacity : 0, x: -50},
                    visible : {opacity : 1, x : 0}
                }} 
                className="mt-8 flex items-center" >
                <ActionButton  setSelectedPage={ setSelectedPage}>Join Now</ActionButton>
                </motion.div>
            </div>
            {/* Image */}
            <div className="flex basis-3/5 justify-center md:z-10
            md:ml-40 md:mt-16 md:justify-items-end">
                <img alt='Home-Page-Graphic' src={Push} />
            </div>
        </motion.div>
        {/* SPONSORS */}
        {isAboveMediumScreens && (
           <div className="h-[150px] w-full bg-blue-500 py-10" >
            <div className="mx-auto w-5/6" >
                <div  className="flex w-3/5 items-center justify-between gap-8" >
                    <img alt='RedBull' src={SponsorRedBull} />
                    <img alt='Forbes' src={SponsorForbes} />
                    <img alt='Fortune' src={SponsorFortune} />

                </div>
            </div>
           </div>
        )}
    </section>
  )
}

export default Home