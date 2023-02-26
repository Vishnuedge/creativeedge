import HText from "@/shared/HText"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import TeachCards from "./TeachCards"
import Hiphop from '@/assets/Hiphop.png'
import Zumba from '@/assets/Zumba.png'
import Bollywood from '@/assets/Bollywood.png'
import Fitness from '@/assets/Fitness.png'
import DJ from '@/assets/DJ.png'
import Folk from '@/assets/Folk.png'



const CardContent = [
  {
      Image : Hiphop,
      Header : "HIPHOP",
      Description : `Hip hop is a popular dance style that originated in the United States in the 1970s. 
      It is characterized by its high-energy movements, fast-paced rhythms, and expressive choreography. 
      At our dance class, we offer a range of hip hop classes that cater to different skill levels, from
       beginners to advanced dancers. Our experienced instructors will teach you the foundational moves and 
       techniques of hip hop, including popping, locking, breaking, and more. We'll also help you develop your
        own unique style and flair, so you can express yourself through dance and feel confident on the dance floor.
         So why not join our hip hop class today and discover the joy of this exciting and dynamic dance style?`,
      isLeft : false
  },
  {
      Image : Folk,
      Header : "FOLK",
      Description : `Folk dance is a genre of dance that reflects the cultural traditions and 
      heritage of a particular region or community. It encompasses a wide range of dance styles, 
      from traditional circle dances to more complex choreographed routines, and is often
      performed at festivals and other cultural events. Folk dance is characterized by its focus
      on community and social interaction, with dancers typically forming circles or lines and 
      moving in unison with one another. Learning folk dance is a great way to explore different
      cultures, connect with others, and keep traditional dance forms alive for future
      generations to enjoy.`,
      isLeft : true

  },
  {
      Image : Zumba,
      Header : "ZUMBA",
      Description : `Zumba is a high-energy dance fitness program that was developed in the 1990s 
      by Colombian dancer and choreographer, Alberto "Beto" Perez. It incorporates a variety of 
      dance styles, including salsa, merengue, cumbia, and reggaeton, and is performed to upbeat 
      Latin music. Zumba classes are known for their party-like atmosphere and focus on fun and 
      enjoyment, rather than strict adherence to technique or form. They provide a full-body 
      workout that can help improve cardiovascular health, increase stamina and endurance, and 
      boost mood and energy levels. Whether you're a seasoned dancer or a fitness enthusiast 
      looking to try something new, Zumba is a fun and effective way to get fit and have fun.`,
      isLeft : false

  },
  {
      Image :Bollywood,
      Header : "BOLLYWOOD",
      Description : `Bollywood dance is a style of dance that has evolved from the Indian film 
      industry, which is centered in Mumbai (formerly known as Bombay). It is a fusion of Indian 
      classical and folk dance forms, as well as Western styles like hip hop and jazz. Bollywood 
      dance is known for its vibrant and colorful costumes, intricate hand and footwork, and 
      lively, upbeat music. It often tells a story through dance, with movements that reflect the
       emotions and actions of the characters in a film. Bollywood dance is a great way to 
       connect with Indian culture, improve flexibility and coordination, and have fun while 
       learning a unique and exciting dance style. Whether you're a fan of Bollywood movies or 
       just looking to try something new, our Bollywood dance classes are sure to get you moving
        and grooving!`,
      isLeft : true

  },
  {
      Image : DJ,
      Header : "DJ TRAINING",
      Description : `DJ training is a program designed to teach aspiring DJs the skills and 
      techniques needed to become a successful DJ. It covers a range of topics, including music
       theory, beatmatching, mixing, scratching, and equipment operation. Our DJ training program
        is led by experienced DJs who have performed at a variety of venues and events. They'll 
        guide you through every step of the way, from selecting the right equipment to creating 
        your own unique sound and style. Whether you're a beginner or an experienced DJ looking 
        to improve your skills, our training program can help you achieve your goals and take 
        your DJ career to the next level. So why wait? Join us today and start learning the art 
        of DJing!`,
      isLeft : false

  },
  {
      Image : Fitness,
      Header : "FITNESS",
      Description : `Our fitness class is a dynamic and high-energy workout that combines elements 
      of cardio, strength training, and flexibility exercises. Led by experienced fitness 
      instructors, our classes are designed to help you get in shape, improve your endurance and 
      stamina, and boost your overall health and well-being. We incorporate a variety of exercises
      and techniques, from bodyweight exercises like squats and lunges to equipment-based workouts
      like resistance bands and weights. Whether you're a seasoned fitness enthusiast or just 
      getting started, our fitness class is a great way to challenge yourself, have fun, and 
      achieve your fitness goals. So why not join us today and start feeling stronger, healthier,
      and more confident?`,
      isLeft : true

  },
]

type Props = {
  setSelectedPage : (value : SelectedPage)=> void
}

const WeTeach = ({ setSelectedPage  }: Props) => {
  return (
    <section id="weteach"   >
       <motion.div className="text-header-100 md:mt-16 my-5 md:px-20 px-3" >
      <HText>WHAT WE TEACH</HText>
      <p className="text-blue-500 md:w-4/5 py-10">At our dance class, we teach a variety of dance styles, including hip hop, folk, Zumba, 
        Bollywood, fitness training, and DJ training. Our experienced instructors are passionate about 
        dance and are committed to helping our students achieve their goals and reach their full potential. 
        Whether you're a beginner or an experienced dancer, we have a program that's perfect for you. Join us today and discover the joy of dance!</p>
      </motion.div>
      <motion.div  onViewportEnter={()=> setSelectedPage(SelectedPage.WeTeach)} className="mx-auto min-h-full py-2 flex flex-col items-center justify-center" >
     
      {CardContent.map( (content) => (
        <>
        <TeachCards setSelectedPage={setSelectedPage} Image={content.Image} Header={content.Header} Description={content.Description} isLeft={content.isLeft}  />
        </>
      ) )}
      </motion.div>
     
    </section>
  )
}

export default WeTeach