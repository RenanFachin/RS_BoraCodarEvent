import { Equals } from 'phosphor-react'

export function CalculatorDisplay() {
    return (
        <div className="w-full min-h-[88px] flex flex-col justify-center px-5 gap-2">
            <span className="text-right text-gray-200 opacity-70 text-xl">
                1 + 1
            </span>


            <div className="flex justify-between items-center">
                <span className="text-gray-200 opacity-70">
                    <Equals size={20}/>
                </span>

                <span className="text-gray-200 text-4xl">
                    2
                </span>
            </div>
        </div>
    )
}