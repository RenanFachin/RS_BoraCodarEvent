import { useTheme } from "@/hooks/useTheme"

import Switch from 'react-switch'
import { BsMoon, BsSun } from 'react-icons/bs'

export function ThemeButton() {
    const { actualTheme, toggleThemeHandler } = useTheme()

    return (
        <button>
            <Switch
                className='ml-7'
                onChange={toggleThemeHandler}
                checked={actualTheme}
                checkedIcon={
                    <div className='flex items-center justify-center h-full text-lightMode-buttonHighEmpahsis'>
                        <BsMoon />
                    </div>
                }
                uncheckedIcon={
                    <div className='flex items-center justify-center h-full text-lightMode-buttonHighEmpahsis'>
                        <BsSun />
                    </div>
                }
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                offHandleColor='#504d4d'
                onHandleColor="#504d4d"
                offColor="#18161d"
                onColor="#ffffff"
            />
        </button>
    )
}
