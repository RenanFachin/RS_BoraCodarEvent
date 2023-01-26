import { Header } from "../components/Header"
import { Messages } from "../components/Messages"
import { MessagesReceived } from "../components/MessagesReceived"

import { AiOutlineSend } from 'react-icons/ai'


export function App() {
  return (
    <div className="max-w-sm h-screen m-auto px-8 md:max-w-5xl md:px-[72px]">

      <Header
        username="Cecilia Sassaki"
        time="11:30"
        status={true}
      />

      <main className="h-4/6 overflow-auto">
        <Messages
          user="Cecilia"
          time="11:30"
          message="Tive uma ideia incrível para um projeto! 😍"
        />

        <MessagesReceived
          user="Você"
          time="11:32"
          message="Sério? Me conta mais."

        />

        <Messages
          user="Cecilia"
          time="11:34"
          message="E se a gente fizesse um chat moderno e responsivo em apenas uma semana?"

        />

        <MessagesReceived
          user="Você"
          time="11:36"
          message="#boraCodar! 🚀"

        />

        <Messages
          user="Cecilia"
          time="11:34"
          message="#boraCodar! 🚀"

        />

        <MessagesReceived
          user="Você"
          time="11:36"
          message="#boraCodar! 🚀"

        />

        <Messages
          user="Cecilia"
          time="11:34"
          message="#boraCodar! 🚀"

        />

        <MessagesReceived
          user="Você"
          time="11:36"
          message="#boraCodar! 🚀"

        />

      </main>


      <footer className="w-full flex items-center my-6">
        <input
          className="bg-gray-700 flex-1 rounded-l-full py-5 placeholder:text-xs placeholder:text-gray-100 pl-6 focus:outline-none focus:ring-2"
          placeholder="Digite sua mensagem"
        />

        <button className="bg-gray-700 rounded-r-full py-5 px-6">
          <AiOutlineSend size={24} className="text-gray-100" />

        </button>
      </footer>

    </div>
  )
}


