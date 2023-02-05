import { clsx } from 'clsx'
import { ButtonHTMLAttributes} from "react";

type OperationButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    operation: string;
    selectOperation: (operation: string) => void;
    selectedOperation: string;
    className?: string;
}

export function OperationButton({ operation, selectOperation, selectedOperation, className, ...rest }: OperationButtonProps) {

    return (
        <button className={clsx(
            `w-12 h-12 md:w-16 md:h-16 rounded-full text-2xl flex items-center justify-center text-gray-100 shadow-calculatorButtonShadow bg-calculatorButtons bg-background-buttons hover:brightness-200 active:translate-y-[2px]`, className)}
            onClick={() => selectOperation(operation)}
            {...rest}
        >
            {operation}
        </button>
    )
}