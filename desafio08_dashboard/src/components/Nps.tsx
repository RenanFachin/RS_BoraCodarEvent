import ExcellentImage from '../assets/excellent.png'
import { motion } from "framer-motion";

export function Nps() {
   return (
      <motion.div 
      className="w-full h-full flex flex-col py-8 after:px-20 items-center justify-between bg-card rounded-2xl shadow-card-shadow"
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
         type: "spring",
         stiffness: 260,
         damping: 30
      }}
      >
         <h3 className='text-2xl leading-relaxed font-semibold text-white'>
            NPS geral
         </h3>

         <div className='flex flex-col items-center gap-4'>
            <img
               className='h-12 w-12'
               src={ExcellentImage}
               alt="Green smile"
            />

            <strong className='text-text text-2xl leading-relaxed font-semibold'>
               Excelente!
            </strong>
         </div>

         <span className='text-sm text-white leading-relaxed'>
            NPS Score: 75
         </span>
      </motion.div>
   )
}