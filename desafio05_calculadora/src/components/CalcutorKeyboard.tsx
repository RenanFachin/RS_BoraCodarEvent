import { Button } from './Button'
import { OperationButton } from './OperationButton'
import { useCalculator } from '@/hooks/useCalculator'


export function CalcutorKeyboard() {

  const { setDigit, selectOperation, operation, clearDisplay, handleDelete, handlePercent, handleShowResult } =  useCalculator()

  return (
    <div className="w-full min-h-[368px] grid grid-cols-4 justify-items-center">
      <OperationButton
        className="dark:text-[#975DFA] text-lightMode-text"
        operation={'CE'}
        selectOperation={clearDisplay}
        selectedOperation={operation}
      />

      <OperationButton
        operation={'C'}
        selectOperation={handleDelete}
        selectedOperation={operation}
      />

      <OperationButton
        operation={'%'}
        selectOperation={handlePercent}
        selectedOperation={operation}
      />

      <OperationButton
        operation={'/'}
        selectOperation={selectOperation}
        selectedOperation={operation}
      />

      <Button digit={"7"} enterDigit={setDigit} />

      <Button digit={"8"} enterDigit={setDigit} />

      <Button digit={"9"} enterDigit={setDigit} />

      <OperationButton
        operation={'*'}
        selectOperation={selectOperation}
        selectedOperation={operation}
      />

      <Button digit={"4"} enterDigit={setDigit} />

      <Button digit={"5"} enterDigit={setDigit} />

      <Button digit={"6"} enterDigit={setDigit} />

      <OperationButton
        operation={'-'}
        selectOperation={selectOperation}
        selectedOperation={operation}
      />

      <Button digit={"1"} enterDigit={setDigit} />

      <Button digit={"2"} enterDigit={setDigit} />

      <Button digit={"3"} enterDigit={setDigit} />

      <OperationButton
        operation={'+'}
        selectOperation={selectOperation}
        selectedOperation={operation}
      />


      <OperationButton
        operation={'±'}
        selectOperation={selectOperation}
        selectedOperation={operation}
      />

      <Button digit={"0"} enterDigit={setDigit} />

      <Button digit={","} enterDigit={setDigit} />

      <OperationButton
        operation={'='}
        selectOperation={selectOperation}
        selectedOperation={operation}
        onClick={handleShowResult}
      />


    </div>
  )
}