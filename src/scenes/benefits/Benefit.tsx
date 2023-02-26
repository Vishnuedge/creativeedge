import { motion } from "framer-motion";


const childVariant = {
    hidden : {opacity : 0, scale : 0.9},
    visible : { opacity  :1, scale : 1 }
}
type Props = {
    icon : JSX.Element;
    title  :string,
    description : string
}


const Benefit = ({icon, title, description}: Props) => {
  return (
    <motion.div variants={childVariant} className='md:w-[1000px] md:h-[400px] mt-5 rounded-md border-2 border-header-100 px-5 py-16 text-center' >
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-header-100 bg-primary-100 p-4'>
                {icon}
            </div>
        </div>
        <h4 className="font-bold text-lg" >{title}</h4>
        <p className="my-3 text-blue-500">{description}</p>
    </motion.div>
  )
}

export default Benefit