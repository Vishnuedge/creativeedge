import ActionButton from '@/shared/ActionButton'
import HText from '@/shared/HText'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
type Props = {
    Image : string,
    Header : string,
    Description : string,
    isLeft : boolean,
    setSelectedPage : (value : SelectedPage) => void
}

const TeachCards = ({ Image, Header, Description, isLeft, setSelectedPage }: Props) => {
  return (
    <>
    <div className={isLeft ?'md:w-5/6 gap-10 md:px-10 px-5 pt-10 md:gap-20 bg-white flex flex-col md:flex-row-reverse items-center justify-between ' : 
     ' bg-blue-20 pt-10 gap-10 md:gap-20 md:px-20 px-5 w-6/6  flex flex-col md:flex-row items-center justify-between'} >
        
        <motion.div 
        initial='hidden'
        whileInView="visible"
         viewport={{once:true, amount:0.5}} 
         transition={{ 
         duration : 0.5}} 
         variants={{
           hidden : {opacity : 0, x: isLeft ? -50 : 50},
           visible : {opacity : 1, x : 0}
       }} 
        >
            <HText>{Header}</HText>
            <p className='my-10 text-blue-500'>{Description}</p>
            <div className='my-5 md:my-0' >
            <ActionButton setSelectedPage={ setSelectedPage}>Need More</ActionButton>
            </div>
        </motion.div>
        <motion.img  
        initial='hidden'
        whileInView="visible"
         viewport={{once:true, amount:0.5}} 
         transition={{ 
         duration : 0.5}} 
         variants={{
           hidden : {opacity : 0, x: isLeft ? 50 : -50},
           visible : {opacity : 1, x : 0}
       }} 
        alt='Teach-Images' src={Image} />
    </div> 
    </>  )
}

export default TeachCards
