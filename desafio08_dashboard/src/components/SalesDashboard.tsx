import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { SalesGradientSVG } from './GradientSVG';
import { motion } from "framer-motion";
import { useTheme } from '../hooks/useTheme';


export function SalesDashboard() {
   const idCSS = 'SalesDashboard'
   const valueExpected = 100
   const valueReached = 70

   const percentage = (valueReached / valueExpected) * 100

   const { actualTheme } = useTheme()
   console.log(actualTheme)

   return (
      <motion.div
         className="w-full h-full flex flex-col py-8 px-12 items-center justify-between dark:bg-card bg-gray-100 rounded-2xl shadow-card-shadow"
         initial={{ scale: 0 }}
         animate={{ rotate: 0, scale: 1 }}
         transition={{
            type: "spring",
            stiffness: 260,
            damping: 50
         }}
      >
         <h3 className='text-2xl dark:text-white font-semibold'>
            Vendas fechadas
         </h3>

         <div className='flex flex-col items-center gap-4'>

            <div className='w-48 h-48 drop-shadow-sales'>

               <SalesGradientSVG />
               {
                  !actualTheme ?
                     (
                        <CircularProgressbarWithChildren
                           strokeWidth={13}
                           value={percentage}
                           styles={({
                              trail: {
                                 stroke: `#D9D9D9`,
                                 strokeLinecap: 'butt',
                                 opacity: 0.1,
                              },
                              path: {
                                 stroke: `url(#${idCSS})`,
                              }
                           })}
                        >
                           <div className='flex flex-col items-center justify-center dark:text-white'>
                              <strong className='text-4xl'>{percentage}%</strong>
                              <span>alcançada</span>
                           </div>
                        </CircularProgressbarWithChildren>
                     )
                     :
                     (
                        <CircularProgressbarWithChildren
                           strokeWidth={13}
                           value={percentage}
                           styles={({
                              trail: {
                                 stroke: `#2c0b16`,
                                 strokeLinecap: 'butt',
                                 opacity: 0.1,
                              },
                              path: {
                                 stroke: `url(#${idCSS})`,
                              }
                           })}
                        >
                           <div className='flex flex-col items-center justify-center dark:text-white'>
                              <strong className='text-4xl'>{percentage}%</strong>
                              <span>alcançada</span>
                           </div>
                        </CircularProgressbarWithChildren>
                     )
               }

            </div>

         </div>

         <div className='text-sm dark:text-white flex items-center justify-center gap-5'>
            <div className="flex items-center gap-1">
               <div className="w-4 h-4 rounded-full bg-circle" />
               <p>Esperado<span className="ml-2">{valueExpected}</span></p>
            </div>

            <div className="flex items-center gap-1">
               <div className="w-4 h-4 rounded-full bg-violet-gradient" />
               <p>Alcançado<span className="ml-2">{valueReached}</span></p>
            </div>
         </div>
      </motion.div>
   )
}