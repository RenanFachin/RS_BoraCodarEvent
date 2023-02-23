import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { GoalsGradientSVG } from './GradientSVG';
import { motion } from "framer-motion";

export function GoalDashboard() {
   const idCSS = 'GoalsDashboard'
   const valueExpected = 70
   const valueReached = 63

   const percentage = (valueReached/valueExpected)*100

   return (
      <motion.div
         className="w-full h-full flex flex-col py-8 px-12 items-center justify-between bg-card rounded-2xl shadow-card-shadow"
         initial={{ scale: 0 }}
         animate={{ rotate: 0, scale: 1 }}
         transition={{
            type: "spring",
            stiffness: 260,
            damping: 70
         }}
      >
         <h3 className='text-2xl text-white font-semibold'>
            Meta mensal
         </h3>

         <div className='flex flex-col items-center gap-4'>
            <div className='w-48 h-48 drop-shadow-goals'>
               <GoalsGradientSVG />
               <CircularProgressbarWithChildren
                  strokeWidth={13}
                  value={percentage}
                  styles={({
                     trail: {
                        stroke: '#D9D9D9',
                        strokeLinecap: 'butt',
                        opacity: 0.1,
                     },
                     path: {
                        stroke: `url(#${idCSS})`,
                     }
                  })}
               >
                  <div className='flex flex-col items-center justify-center text-white'>
                     <strong className='text-4xl'>{percentage}%</strong>
                     <span>alcançada</span>
                  </div>
               </CircularProgressbarWithChildren>
            </div>
         </div>

         <div className='text-sm text-white flex items-center justify-center gap-5'>
            <div className="flex items-center gap-1">
               <div className="w-4 h-4 rounded-full bg-circle" />
               <p>Esperado<span className="ml-2">R$ {valueExpected}K</span></p>
            </div>

            <div className="flex items-center gap-1">
               <div className="w-4 h-4 rounded-full bg-goals-gradient" />
               <p>Alcançado<span className="ml-2">R$ {valueReached}K</span></p>
            </div>
         </div>
      </motion.div>
   )
}