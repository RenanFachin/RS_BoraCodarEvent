import { DetailsCard } from "../components/DetailsCard"
import { Button } from "../components/Button"
import { Product } from "../components/Product"

export function Details() {
    return (
        <main className="max-w-4xl h-screen m-auto flex justify-center items-center gap-5">
            <section className="mr-6">
                <Product />
            </section>


            <section>
                <DetailsCard
                    product={{ code: '42404', name: 'Sofá Margot II - Rosé', value: '4' }}
                />

                <Button
                    title="ADICIONAR À CESTA"
                />
            </section>

        </main>
    )
}