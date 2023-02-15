import { useState } from 'react'

import { Menu } from "@headlessui/react"

import { CiLocationOn, CiSearch } from 'react-icons/ci'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

export function SearchByNameInput() {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <Menu as='div' className='flex-1 bg-bgColor py-3 pl-3 pr-1 rounded-md' >
         <Menu.Button
            className='flex w-full'
            onClick={() => { setIsOpen(!isOpen) }}
         >
            <CiSearch className="text-2xl mr-[18px] text-details" />

            <div >
               <div className="text-[15px] leading-tight text-[#7C7C8A]">
                  Pesquisar por nome
               </div>
            </div>


            {isOpen ? (
               <RiArrowUpSLine className="text-2xl text-[#858793] ml-auto" />
            ) : (
               <RiArrowDownSLine className="text-2xl text-[#858793] ml-auto" />
            )}
         </Menu.Button>

         <Menu.Items>
            <Menu.Item>

            </Menu.Item>
         </Menu.Items>
      </Menu>
   )
}