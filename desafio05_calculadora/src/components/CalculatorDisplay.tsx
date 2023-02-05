import { CalculatorContext } from '@/contexts/calculatorContext'
import { Equals } from 'phosphor-react'
import { useContext } from 'react'

export function CalculatorDisplay() {
    const {currentValue, prevValue, operation} = useContext(CalculatorContext)

    return (
        <div className="w-full min-h-[88px] flex flex-col justify-center px-5 gap-2">
            <span className="text-right text-gray-200 opacity-70 text-xl">
                {`${prevValue} ${operation} ${currentValue === prevValue ? '' : currentValue}`}
            </span>


            <div className="flex justify-between items-center">
                <span className="text-gray-200 opacity-70">
                    <Equals size={20}/>
                </span>

                <span className="text-gray-200 text-4xl">
                    {currentValue}
                </span>
            </div>
        </div>
    )
}