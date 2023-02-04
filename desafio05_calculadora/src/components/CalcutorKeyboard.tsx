import { RiNumber9, RiNumber8, RiNumber7, RiNumber6, RiNumber5, RiNumber4, RiNumber3, RiNumber2, RiNumber1, RiNumber0 } from 'react-icons/ri'
import { X, Divide, PlusMinus, Minus, Plus, Equals, Percent } from 'phosphor-react'
import { Button } from './Button'


export function CalcutorKeyboard() {
    return(
        <div className="w-full min-h-[368px] grid grid-cols-4">
          <Button className="text-[#975DFA]">
            CE
          </Button>

          <Button>
            C
          </Button>

          <Button>
            <Percent />
          </Button>

          <Button buttonColor="violet">
            <Divide />
          </Button>

          <Button>
            <RiNumber7 />
          </Button>

          <Button>
            <RiNumber8 />
          </Button>

          <Button>
            <RiNumber9 />
          </Button>

          <Button buttonColor="violet">
            <X />
          </Button>

          <Button>
            <RiNumber4 />
          </Button>

          <Button>
            <RiNumber5 />
          </Button>

          <Button>
            <RiNumber6 />
          </Button>

          <Button buttonColor="violet">
            <Minus />
          </Button>

          <Button>
            <RiNumber1 />
          </Button>

          <Button>
            <RiNumber2 />
          </Button>

          <Button>
            <RiNumber3 />
          </Button>

          <Button buttonColor="violet">
            <Plus />
          </Button>


          <Button>
            <PlusMinus />
          </Button>

          <Button>
            <RiNumber0 />
          </Button>

          <Button>
            ,
          </Button>

          <Button className="bg-background-EqualButton">
            <Equals />
          </Button>


        </div>
    )
}