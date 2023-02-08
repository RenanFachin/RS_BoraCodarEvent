import { Card } from "./components/card";
import { IoAirplane } from 'react-icons/io5'
import { QRCode } from "./components/QRCode";

export function App() {
  return (
    <div className="w-full h-screen bg-gradient flex flex-col items-center gap-5 px-6 py-20">
      <header>
        <h1 className="font-semibold text-white text-xl">
          Cartão de embarque
        </h1>
      </header>

      <main>
        <Card>
          <section className="flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>
                  Voo
                </span>

                <strong>
                  RS995
                </strong>
              </div>

              <div className="flex flex-col">
                <span className="text-right">
                  Data
                </span>

                <strong>
                  23/05/2023
                </strong>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start justify-center ">
                <span className="text-sm">São Paulo, Brasil</span>
                <strong className="text-4xl">GRU</strong>
                <span className="text-base" >17:00</span>
              </div>

              <IoAirplane size={24} />

              <div className="flex flex-col items-end justify-center text-right">
                <span>São Francisco, EUA</span>
                <strong className="text-4xl">SFO</strong>
                <span className="text-base">04:48 <sup>+1</sup></span>
              </div>
            </div>
          </section>
        </Card >

        <Card>
          <section className="flex items-center justify-between">
            <div className="flex flex-col items-start">
              <span>
                Passageiro
              </span>

              <strong>
                Renan Fachin
              </strong>
            </div>

            <div className="flex flex-col items-end">
              <span>
                Assento
              </span>

              <strong>
                28A
              </strong>
            </div>
          </section>
        </Card>

        <Card>
          <section className="flex justify-between items-center">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start justify-center">
                <span>
                  Embarque
                </span>

                <strong className="bg-violet-950 p-1 rounded-lg text-white">
                  16:15
                </strong>
              </div>

              <div className="flex flex-col items-start justify-center">
                <span>
                  Terminal
                </span>

                <strong>
                  2
                </strong>
              </div>

              <div className="flex flex-col items-start justify-center">
                <span>
                  Portão
                </span>

                <strong>
                  15
                </strong>
              </div>
            </div>

            <QRCode boardingGroup="3" />
          </section>

          <h3 className="text-center mt-6">
            <strong className="font-bold">Atenção: </strong>
            o portão fecha 16:45
          </h3>
        </Card>
      </main>

      <footer className="text-white text-sm opacity-60 text-center max-w-[270px] leading-relaxed">
        <span>
          Qualquer problema procure o balcão de atendimento da sua companhia aérea
        </span>
      </footer>
    </div >
  )
}
