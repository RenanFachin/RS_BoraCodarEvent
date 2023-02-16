import { SearchByNameInput } from "./SearchByNameInput";
import { SearchByCity } from "./SearchByCity";
import { useSearch } from "../hooks/useSearch";

export function Search() {
   const { handleSearch } = useSearch()

   return (
      <div className="min-h-[532px] flex flex-col items-center justify-center gap-10">
         <div className="flex flex-col items-center justify-center gap-5">

            <span className="text-details tracking-widest">
               FIND YOUR BLOCK
            </span>

            <strong className="text-5xl leading-tight font-bold max-w-[650px] text-center">
               Encontre os
               <span className="text-violet-500"> melhores blocos </span>
               de carnaval de 2023
            </strong>
         </div>

         <div
            className="min-w-[993px] bg-white rounded-xl p-10"
         >
            <div className="flex justify-between items-center gap-6">


               <SearchByNameInput />

               <SearchByCity />

               <button
                  onClick={() => handleSearch()}
                  className="bg-violet-600 font-bold rounded-xl text-white text-sm py-3 px-8 cursor-pointer"
               >
                  BUSCAR AGORA
               </button>
            </div>

         </div>
      </div>
   )
}