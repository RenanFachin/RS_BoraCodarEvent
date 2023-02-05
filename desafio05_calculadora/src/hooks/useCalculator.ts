import { CalculatorContext } from '../contexts/calculatorContext'

import { useContext } from "react"

export const useCalculator = () => {
    return useContext(CalculatorContext)
}