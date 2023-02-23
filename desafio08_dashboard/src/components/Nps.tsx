import ExcellentImage from '../assets/excellent.png'

export function Nps() {
   return (
      <div className="w-full h-full flex flex-col py-8 px-20 items-center justify-between bg-card rounded-2xl shadow-card-shadow">
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
      </div>
   )
}