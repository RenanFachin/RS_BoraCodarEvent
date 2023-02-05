import { CalcutorKeyboard } from "@/components/CalcutorKeyboard";
import { CalculatorDisplay } from "@/components/CalculatorDisplay";
import Head from "next/head";
import { ThemeButton } from "@/components/ThemeButton";

export default function Home() {
  return (
    <div className="h-screen w-full bg-zinc-200 dark:bg-background-page flex flex-col items-center justify-center p-4 gap-5">
      <Head>
        <title>Desafio 05 - Calculadora</title>
      </Head>

      <ThemeButton />

      <div className="min-w-[320px] md:min-w-[400px] min-h-[600px] bg-lightMode-background dark:bg-background-calculator rounded-4xl flex flex-col items-center justify-center gap-6 px-5 pt-10 pb-5 md:px-8 md:pt-14 md:pb-8 shadow-calculatorShadow">
        <CalculatorDisplay />
        <CalcutorKeyboard />
      </div>
    </div>
  )
}
