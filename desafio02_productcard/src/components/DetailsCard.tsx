
interface DetailsCardProps {
    product: {
        code: string;
        name: string;
        value: string;
    }
}

export function DetailsCard({ product }: DetailsCardProps) {
    return (
        <div className="flex flex-col gap-3 mb-5">
            <span className="font-light text-[10px]">
                CÓDIGO: {product.code}
            </span>

            <h2 className="font-semibold text-3xl">
                {product.name}
            </h2>
            
            <span className="">
                {`R$ ${product.value}.0000`}
            </span>
        </div>
    )
}