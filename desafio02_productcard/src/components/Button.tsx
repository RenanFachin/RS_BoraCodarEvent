import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <button 
        className='bg-pink-500 relative text-sm uppercase border-[1px] px-4 py-2 rounded-full hover:bg-pink-900 hover:text-white hover:scale-110 transition ease-in duration-300'
        {...rest}>
            {title}
        </button>
    )
}