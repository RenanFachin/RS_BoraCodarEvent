import { Nps } from "../components/Nps"
import { GoalDashboard } from "../components/GoalDashboard"
import { SalesDashboard } from "../components/SalesDashboard"

export function Dashboard() {

  return (
    <div className="max-w-[1366px] h-full mx-auto">
      <div className="max-w-[1120px] min-h-[379px] grid grid-cols-cards mx-auto">
        <Nps />
        <SalesDashboard />
        <GoalDashboard />
      </div>
    </div>
  )
}

