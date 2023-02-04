import { CalcutorKeyboard } from "@/components/CalcutorKeyboard";
import { CalculatorDisplay } from "@/components/CalculatorDisplay";

export default function Home() {
  return (
    <div className="h-screen w-full bg-background-page flex items-center justify-center">
      <div className="min-w-[400px] min-h-[600px] bg-background-calculator rounded-4xl flex flex-col items-center justify-center gap-6 px-8 pt-14 pb-8 shadow-calculatorShadow">

        <CalculatorDisplay />
        <CalcutorKeyboard />

      </div>
    </div>
  )
}
