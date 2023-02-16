import { useState } from 'react'

import { Menu } from "@headlessui/react"

import { MdSearch } from 'react-icons/md'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { useSearch } from '../hooks/useSearch'


export function SearchByNameInput() {

   const { blockName, allBlockName, setBlockName } = useSearch()

   const [isOpen, setIsOpen] = useState(false)

   return (
      <Menu as='div' className='flex-1 bg-bgColor py-3 pl-3 pr-1 rounded-md' >
         <Menu.Button
            className='flex w-full'
            onClick={() => { setIsOpen(!isOpen) }}
         >
            <MdSearch className="text-2xl mr-[18px] text-details" />

            <div >
               <div className="text-[15px] font-medium leading-tight text-left">
                  {
                     blockName ? (blockName) : ('-')
                  }
               </div>

               <div className="text-[15px] leading-tight text-[#7C7C8A] text-left">
               Pesquisar por nome
               </div>
            </div>


            {isOpen ? (
               <RiArrowUpSLine className="text-2xl text-[#858793] ml-auto" />
            ) : (
               <RiArrowDownSLine className="text-2xl text-[#858793] ml-auto" />
            )}
         </Menu.Button>

         <Menu.Items
            className='px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute z-10 list-none rounded-b-lg'
         >
            {
               allBlockName.map((block, index) => {
                  return (
                     <Menu.Item
                        as='li'
                        key={index}
                        className='cursor-pointer hover:text-violet-700 transition'
                        onClick={() => setBlockName(block.toString())}
                     >
                        {block}
                     </Menu.Item>
                  )
               })
            }
         </Menu.Items>
      </Menu>
   )
}