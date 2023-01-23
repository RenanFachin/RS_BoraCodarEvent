import { Button } from "../components/Buttons"
import { AiOutlineLoading3Quarters, AiOutlineMenu } from 'react-icons/ai'

export function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-10 max-w-5xl m-auto flex items-center justify-center gap-7 border rounded-lg border-gray-500">
        {/* Primary Button */}
        <section>
          <div className="flex flex-col gap-11">
            <Button
              className="bg-violet-500"
              title="default primary"
            />

            <Button
              className="hover:bg-violet-hover bg-violet-500"
              title="hover primary"
            />

            <Button
              className="focus:border-2 focus:border-white bg-violet-500"
              title="focus primary"
            />

            <Button
              disabled
              className="disabled:opacity-50 cursor-not-allowed bg-violet-500"
              title="disabled primary"
            />

            <Button
              className="flex gap-2 bg-violet-500 cursor-progress"
              title="loading primary"
            >
              <AiOutlineLoading3Quarters size={16} />
            </Button>

            <Button
              className="flex gap-2 bg-violet-500 cursor-all-scroll"
              title="movable primary"
            >
              <AiOutlineMenu size={16} />
            </Button>


          </div>
        </section>

        {/* Secondary Button */}
        <section>
          <div className="flex flex-col gap-11">
            <Button
              className="bg-gray-500"
              title="default secondary"
            />

            <Button
              className="hover:bg-gray-hover bg-gray-500"
              title="hover secondary"
            />

            <Button
              className="focus:border-2 focus:border-white bg-gray-500"
              title="focus secondary"
            />

            <Button
              disabled
              className="disabled:opacity-50 cursor-not-allowed bg-gray-500"
              title="disabled secondary"
            />

            <Button
              className="flex gap-2 bg-gray-500 cursor-progress"
              title="loading secondary"
            >
              <AiOutlineLoading3Quarters size={16} />
            </Button>

            <Button
              className="flex gap-2 bg-gray-500 cursor-all-scroll"
              title="movable secondary"
            >
              <AiOutlineMenu size={16} />
            </Button>


          </div>
        </section>

        {/* tertiary Button */}
        <section>
          <div className="flex flex-col gap-11">
            <Button

              title="default tertiary"
            />

            <Button

              title="hover tertiary"
            />

            <Button
              className="focus:border-2 focus:border-white"
              title="focus tertiary"
            />

            <Button
              disabled
              className="disabled:opacity-50 cursor-not-allowed"
              title="disabled tertiary"
            />

            <Button
              className="flex gap-2 cursor-progress"
              title="loading tertiary"
            >
              <AiOutlineLoading3Quarters size={16} />
            </Button>

            <Button
              className="flex gap-2 cursor-all-scroll"
              title="movable tertiary"
            >
              <AiOutlineMenu size={16} />
            </Button>


          </div>
        </section>
      </div>
    </div>
  )
}
