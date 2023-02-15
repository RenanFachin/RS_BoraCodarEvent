import { useState } from "react"

import { CarnavalCard } from "./components/CarnavalCard"
import { CarnavalData } from '../src/utils/CarnavalData'

import { Search } from "./components/Search"

import HeaderIlustra01 from './assets/ilustra-01.png'
import HeaderIlustra02 from './assets/ilustra-02.png'

export function App() {
  const [activeList, setActiveList] = useState(false)

  function handleFilterToList() {
    setActiveList(true)
  }

  function handleFilterToMap() {
    setActiveList(false)
  }

  return (
    <div className="w-full  h-screen mx-auto">
      <header className="bg-bgColor min-h-[532px] relative">
        <img
          className="absolute top-0 left-0"
          src={HeaderIlustra01}
          alt=""
        />

        <img
          className="absolute bottom-0 right-0"
          src={HeaderIlustra02}
          alt=""
        />

        <Search />
      </header>

      <main className="max-w-7xl mx-auto flex flex-col gap-10 mt-24">

        <div className="flex justify-between items-center">
          <h3 className="text-title text-4xl leading-snug font-bold">
            Blocos recomendados
          </h3>

          <div>
            {activeList ?
              (
                <>
                  <button className="w-[88px] h-8 bg-violet-600 text-white px-6 py-1 rounded-md text-sm">
                    LISTA
                  </button>

                  <button
                    onClick={handleFilterToMap}
                    className="w-[88px] h-8 px-6 py-1 rounded-md text-sm"
                  >
                    MAPA
                  </button>
                </>
              )

              :

              (
                <>
                  <button
                    onClick={handleFilterToList}
                    className="w-[88px] h-8 px-6 py-1 rounded-md text-sm"
                  >
                    LISTA
                  </button>

                  <button className="w-[88px] h-8 bg-violet-600 text-white px-6 py-1 rounded-md text-sm">
                    MAPA
                  </button>
                </>

              )
            }



            {/* <button className="w-[88px] px-6 py-1 rounded-md">
              MAPA
            </button> */}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-y-8 gap-x-9 mb-24">
          {
            CarnavalData.map(item => (
              <CarnavalCard
                city={item.city}
                description={item.description}
                displayName={item.displayName}
                image={item.image}
                key={item.id}
              />
            ))
          }
        </div>

      </main>
    </div>
  )
}
