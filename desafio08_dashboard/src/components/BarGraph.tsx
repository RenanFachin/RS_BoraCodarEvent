import { useState } from "react";
import { GraphData } from "../utils/GraphData"
import { SalesBar } from "./SalesBar"

export function BarGraph() {
   const [salesBar, setSalesBar] = useState(GraphData)

   return (
      <div
         className="flex-1 min-h-[186px] flex max-w-[523px] relative"
      >
         {salesBar.map(sale => (
            <SalesBar
               key={sale.id}
               value={sale.salesOfTheDay}
               title={sale.title}
            />
         ))}

         <div className="absolute w-full h-1 bg-circle top-1/2 -translate-y-3" />
      </div>
   )
}