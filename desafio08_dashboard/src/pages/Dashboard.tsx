import { Nps } from "../components/Nps"
import { GoalDashboard } from "../components/GoalDashboard"
import { SalesDashboard } from "../components/SalesDashboard"
import { BarGraph } from "../components/BarGraph"

import { GraphData } from "../utils/GraphData"
import { useState } from 'react'

import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc'

export function Dashboard() {
  const [salesBar, setSalesBar] = useState(GraphData)

  const dayWithMoreSales = salesBar.reduce(function (prev, current) {
    return (prev.salesOfTheDay > current.salesOfTheDay) ? prev : current
  })

  const dayWithLessSales = salesBar.reduce(function (prev, current) {
    return (prev.salesOfTheDay < current.salesOfTheDay) ? prev : current
  })


  return (
    <div className="max-w-[1366px] h-full mx-auto flex flex-col justify-center">
      <div className="max-w-[1120px] mx-auto">


        <div className="min-h-[379px] grid grid-cols-cards gap-8">
          <Nps />
          <SalesDashboard />
          <GoalDashboard />
        </div>

        <div className="w-full min-h-[314px] bg-card rounded-2xl mt-14 shadow-card-shadow flex flex-col py-8 px-12 gap-8">
          <strong className="font-semibold text-2xl leading-relaxed text-white">
            Vendas por dia da semana
          </strong>

          <div className="flex justify-between items-center text-white">
            <div className="flex flex-col items-center gap-8 h-[168px]">
              <div>
                <div className="flex items-center gap-1 mb-2">
                  <VscTriangleUp
                    color="rgba(129, 251, 184, 1)"
                  />

                  <span className="text-sm">Dia com mais vendas</span>
                </div>

                <strong className="text-2xl font-medium">
                  {dayWithMoreSales.dayOfWeek}
                </strong>
              </div>


              <div>
                <div className="flex items-center gap-1 mb-2">
                  <VscTriangleDown
                    color="rgba(234, 84, 85, 1)"
                  />

                  <span className="text-sm">Dia com menos vendas</span>
                </div>

                <strong className="text-2xl font-medium mt-2">
                  {dayWithLessSales.dayOfWeek}
                </strong>
              </div>
            </div>


     
            <BarGraph />



          </div>
        </div>
      </div>
    </div>
  )
}

