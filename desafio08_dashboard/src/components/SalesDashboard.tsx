export function SalesDashboard() {
   return (
      <div className="w-full h-full flex flex-col py-8 px-12 items-center justify-between bg-card rounded-2xl shadow-card-shadow">
         <h3 className='text-2xl text-white'>
            Vendas fechadas
         </h3>

         <div className='flex flex-col items-center gap-4'>


            <strong className='text-text text-2xl'>

            </strong>
         </div>

         <div className='text-sm text-white flex items-center justify-center gap-5'>
            <div className="flex items-center gap-1">
               <div className="w-4 h-4 rounded-full bg-circle"/>
               <p>Esperado<span className="ml-2">100</span></p>
            </div>

            <div className="flex items-center gap-1">
               <div className="w-4 h-4 rounded-full bg-violet-gradient"/>
               <p>Alcançado<span className="ml-2">70</span></p>
            </div>
         </div>
      </div>
   )
}