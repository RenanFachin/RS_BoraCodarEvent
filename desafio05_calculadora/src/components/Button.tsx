import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonColor?: 'default' | 'violet'
    className?: string;
    children?: ReactNode;
    digit: string;
    enterDigit: (digit: string) => void;
}

export function Button({ digit, enterDigit, buttonColor = 'default', className, children, ...rest }: ButtonProps) {
    
    return (
        <button className={clsx(
            `w-16 h-16 rounded-full text-2xl flex items-center justify-center text-gray-100 shadow-calculatorButtonShadow bg-calculatorButtons`, className)}
             onClick={() => enterDigit(digit)}
            {...rest}
        >
            {digit}
        </button>
    )
}