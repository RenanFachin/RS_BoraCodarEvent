import { createContext, ReactNode, useEffect, useState } from 'react'

import { CarnavalData } from '../utils/CarnavalData'

type CarnavalDataProps = {
   id: number;
   image: string;
   displayName: string;
   description: string;
   city: string;
}[]

interface SearchContextProps {
   cards: CarnavalDataProps;
   city: string;
   cities: Array<string>;
   blockName: string;
   allBlockName: Array<string>;
   loading: boolean;
   setCity: (city: string) => void;
   setBlockName: (blockName: string) => void;
   handleSearch: () => void;
}

export const SearchContext = createContext({} as SearchContextProps)

interface SearchProviderProps {
   children: ReactNode
}

export function SearchProvider({ children }: SearchProviderProps) {
   const [cards, setCards] = useState(CarnavalData)

   const [city, setCity] = useState('')
   const [cities, setCities] = useState<string[]>([])

   const [blockName, setBlockName] = useState('')
   const [allBlockName, setAllBlockName] = useState<string[]>([])

   const [loading, setLoading] = useState(false)


   function handleSearch() {
      const newCards = CarnavalData.filter((card) => {
         setLoading(true)
         if (card.city === city || card.displayName == blockName) {
            return card
         }
      })

      setTimeout(() => {
         return (newCards.length < 1 ?
            (
               setCards([])
            )
            :
            (
               setCards(newCards), setLoading(false)
            ))
      }, 1000)

   }

   useEffect(() => {
      const allCities = cards.map((card) => {
         return card.city
      })

      const uniqueCities = [...new Set(allCities)]

      setCities(uniqueCities)
   }, [])

   useEffect(() => {
      const allBlock = cards.map((block) => {
         return block.displayName
      })

      const uniqueBlocks = [...new Set(allBlock)]

      setAllBlockName(uniqueBlocks)
   }, [])

   useEffect(() => {
      console.log(city)


   }, [city])

   return (
      <SearchContext.Provider value={{ cards, blockName, setBlockName, allBlockName, city, setCity, cities, handleSearch, loading }}>
         {children}
      </SearchContext.Provider>
   )
}