import { Nps } from "../components/Nps"
import { GoalDashboard } from "../components/GoalDashboard"
import { SalesDashboard } from "../components/SalesDashboard"

export function Dashboard() {

  return (
    <div className="max-w-[1366px] h-full mx-auto flex flex-col justify-center">
      <div className="max-w-[1120px] mx-auto ">
        <div className="min-h-[379px] grid grid-cols-cards gap-8">
          <Nps />
          <SalesDashboard />
          <GoalDashboard />
        </div>

        <div className="w-full min-h-[314px] bg-card rounded-2xl mt-14 shadow-card-shadow">

        </div>
      </div>
    </div>
  )
}

