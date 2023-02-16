import { useState } from 'react'

import { Menu } from "@headlessui/react"

import { MdOutlineLocationOn } from 'react-icons/md'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { useSearch } from '../hooks/useSearch'

export function SearchByCity() {

   const { cities, city, setCity } = useSearch()

   const [isOpen, setIsOpen] = useState(false)

   return (
      <Menu
         as='div'
         className='flex-1 bg-bgColor py-3 pl-3 pr-1 rounded-md cursor-pointer relative'
      >
         <Menu.Button
            className='flex w-full items-center justify-center'
            onClick={() => { setIsOpen(!isOpen) }}
         >
            <MdOutlineLocationOn className="text-2xl mr-[18px] text-details" />

            <div >
               <div className="text-[15px] font-medium leading-tight text-left">
                  {
                     city ? (city) : ('-')
                  }
               </div>

               <div className="text-[15px] leading-tight text-[#7C7C8A] text-left">
                  Selecione uma cidade
               </div>
            </div>


            {isOpen ? (
               <RiArrowUpSLine className="text-2xl text-[#858793] ml-auto" />
            ) : (
               <RiArrowDownSLine className="text-2xl text-[#858793] ml-auto" />
            )}
         </Menu.Button>

         <Menu.Items
            className='px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg'
         >
            {
               cities.map((city, index) => {
                  return (
                     <Menu.Item
                        as='li'
                        key={index}
                        className='cursor-pointer hover:text-violet-700 transition'
                        onClick={() => setCity(city.toString())}
                     >
                        {city}
                     </Menu.Item>
                  )
               })
            }

         </Menu.Items>
      </Menu>
   )
}