import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { SalesGradientSVG } from './GradientSVG';
import { motion } from "framer-motion";


export function SalesDashboard() {
   const idCSS = 'SalesDashboard'
   const percentage = 70;

   return (
      <motion.div
         className="w-full h-full flex flex-col py-8 px-12 items-center justify-between bg-card rounded-2xl shadow-card-shadow"
         initial={{ scale: 0 }}
         animate={{ rotate: 0, scale: 1 }}
         transition={{
            type: "spring",
            stiffness: 260,
            damping: 50
         }}
      >
         <h3 className='text-2xl text-white'>
            Vendas fechadas
         </h3>

         <div className='flex flex-col items-center gap-4'>

            <div className='w-48 h-48'>

               <SalesGradientSVG />
               <CircularProgressbarWithChildren

                  strokeWidth={14}
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

            <strong className='text-text text-2xl'>

            </strong>
         </div>

         <div className='text-sm text-white flex items-center justify-center gap-5'>
            <div className="flex items-center gap-1">
               <div className="w-4 h-4 rounded-full bg-circle" />
               <p>Esperado<span className="ml-2">100</span></p>
            </div>

            <div className="flex items-center gap-1">
               <div className="w-4 h-4 rounded-full bg-violet-gradient" />
               <p>Alcançado<span className="ml-2">70</span></p>
            </div>
         </div>
      </motion.div>
   )
}