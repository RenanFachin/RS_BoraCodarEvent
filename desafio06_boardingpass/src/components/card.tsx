import { ReactNode } from "react"

interface cardProps {
    children: ReactNode;
}

export function Card({ children }: cardProps) {
    return (
        <div className="w-full bg-white h-fit rounded-3xl px-8 py-6 border-b border-dashed border-b-gray-800 last:border-b-0 md:rounded-none InvertedCornerMiddleCard InvertedCornertFirstCard InvertedCornertLastCard first:md:rounded-t-3xl last:md:rounded-b-3xl">
            {children}
        </div>
    )
}
