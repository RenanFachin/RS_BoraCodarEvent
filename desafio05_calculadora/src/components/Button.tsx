import { clsx } from 'clsx'
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonColor?: 'default' | 'violet'
    className?: string;
    digit: string;
    enterDigit: (digit: string) => void;
}

export function Button({ digit, enterDigit, buttonColor = 'default', className, ...rest }: ButtonProps) {
    
    return (
        <button className={clsx(
            `w-12 h-12 md:w-16 md:h-16 rounded-full text-2xl flex items-center justify-center text-lightMode-text dark:text-gray-100 shadow-calculatorButtonShadow bg-calculatorButtons hover:brightness-200 active:translate-y-[2px]`, className)}
             onClick={() => enterDigit(digit)}
            {...rest}
        >
            {digit}
        </button>
    )
}