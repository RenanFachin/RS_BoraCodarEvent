import { createContext, ReactNode, useState } from "react";

interface CalculatorContextProps {
    currentValue: string;
    operation: string;
    selectOperation: (operation: string) => void;
    setDigit: (digit: string) => void;
    overwrite: boolean;
    prevValue: string;
    clearDisplay: () => void;
    handleDelete: () => void;
    handlePercent: () => void;
    calculate: () => void;
    handleShowResult: () => void;
}

export const CalculatorContext = createContext({} as CalculatorContextProps)

interface CalculatorProviderProps {
    children: ReactNode
}

export function CalculatorContextProvider({ children }: CalculatorProviderProps) {

    const [currentValue, setCurrentValue] = useState("0")
    const [operation, setOperation] = useState("")

    const [prevValue, setPreValue] = useState("")
    const [overwrite, setOverwrite] = useState(true)

    function setDigit(digit: string) {
        if (currentValue[0] === "0" && digit === "0") {
            return
        }
        if (currentValue.includes(",") && digit == ",") {
            return
        }

        if (overwrite && digit !== ",") {
            setCurrentValue(digit)
        }
        else {
            setCurrentValue(`${currentValue}${digit}`)
        }

        setOverwrite(false)
    }

    function selectOperation(operation: string) {
        if (prevValue) {
            const val = calculate()
            setCurrentValue(`${val}`)
            setPreValue(`${val}`)
        } else {

            setPreValue(currentValue)
        }


        setOperation(operation)
        setOverwrite(true)
    }

    function clearDisplay() {
        setPreValue("")
        setOperation("")
        setCurrentValue("0")
        setOverwrite(true)
    }

    function handleDelete() {
        setCurrentValue("0")
        setOverwrite(true)
    }

    function handlePercent() {
        const inicialValue = parseFloat(currentValue)
        setCurrentValue((inicialValue / 100).toString())
    }

    function calculate() {
        if (!prevValue || !operation) {
            return currentValue
        }

        const newValue = parseFloat(currentValue)
        const oldValue = parseFloat(prevValue)

        let result;
        switch (operation) {
            case "/":
                result = oldValue / newValue;
                break;
            case "*":
                result = oldValue * newValue;
                break;
            case "-":
                result = oldValue - newValue;
                break;
            case "+":
                result = oldValue + newValue;
                break;
            case "±":
                result = (oldValue * -1);
                break;
        }

        return result
    }

    function handleShowResult() {
        const newValue = calculate()

        setCurrentValue(`${newValue}`)
        setPreValue("")
        setOperation("")
        setOverwrite(true)
    }




    return (
        <CalculatorContext.Provider value={{ currentValue, operation, selectOperation, setDigit, overwrite, prevValue, clearDisplay, handleDelete, handlePercent, calculate, handleShowResult }}>
            {children}
        </CalculatorContext.Provider>
    )
}