import { BsCircleFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';

import Avatar from '../assets/Avatar.png'

interface HeaderProps {
    username: string;
    status: boolean;
    time: string;
}

export function Header({ username, status = false, time }: HeaderProps) {
    const [isUserOnline, setIsUserOnline] = useState(status)

    return (
        <header className="w-full pt-6 min-h-[88px] mb-7 md:pt-8">
            <div className='flex flex-col gap-6'>
                <div className='flex items-center gap-4'>
                    <img
                        className='w-12 h-12'
                        src={Avatar}
                        alt=""
                    />

                    <div className='flex-1'>
                        <h3 className='font-bold text-base'>
                            {username}
                        </h3>

                        {
                            isUserOnline ?
                                <span
                                    className='flex items-center gap-1 text-online text-xs'>
                                    <BsCircleFill
                                        size={8}
                                    />
                                    Online
                                </span>

                                :
                                
                                <span
                                    className='flex items-center gap-1 text-red-600 text-xs'>
                                    <BsCircleFill
                                        size={8}
                                    />
                                    Offline
                                </span>
                        }

                    </div>


                    <AiOutlineClose
                        className='text-white'
                        size={20}
                    />
                </div>

                <p className='flex-1 text-center text-xs'>
                    Hoje {time}
                </p>
            </div>
        </header>
    )
}