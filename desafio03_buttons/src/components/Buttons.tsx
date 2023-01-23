import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    className?: string;
    children?: ReactNode;
}

export function Button({ title, className, children, ...props }: ButtonProps) {
    return (
        <button
            className={clsx(
                'uppercase font-sans py-3 px-6 rounded-3xl font-medium text-sm leading-6', className)}
            {...props}
        >
            {children}{title}
        </ button >
    )
}
