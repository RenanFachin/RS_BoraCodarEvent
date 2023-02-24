type SalesBarProps = {
   value: number;
   title: string;
}

export function SalesBar({ value, title }: SalesBarProps) {
   const barSize = (value / 10) * 100

   const progressStyles = {
      height: `${barSize}%`,
   }

   return (

      <div className="flex flex-col gap-1 items-center mr-14 z-10">
         <div className='w-4 h-full flex items-end'>
            <div
               role="progressbar"
               aria-label="Progresso de vendas"
               aria-valuenow={value}
               className="w-4 rounded-full dark:bg-bars-gradient bg-violet-gradient animate-teste"
               style={progressStyles}
            />

         </div>

         <span>
            {title}
         </span>

      </div>

   )
}