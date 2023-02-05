import { useCalculator } from '@/hooks/useCalculator'
import { Equals } from 'phosphor-react'

export function CalculatorDisplay() {
    
    const {currentValue, prevValue, operation} = useCalculator()
    return (
        <div className="w-full min-h-[120px] flex flex-col justify-center px-5 gap-2 max-w-[300px] overflow-auto">
            <span className="text-right text-gray-200 opacity-70 text-lg md:text-xl">
                {`${prevValue} ${operation} ${currentValue === prevValue ? '' : currentValue}`}
            </span>


            <div className="flex justify-between items-center ">
                <span className="text-gray-200 opacity-70">
                    <Equals size={20}/>
                </span>

                <span className="text-gray-200 text-3xl md:text-4xl">
                    {currentValue}
                </span>
            </div>
        </div>
    )
}