'use client'
import { createContext, useContext, useState } from 'react'
import { ChevronLeft, ChevronRight, MoreOptionsSVG } from '../../assets/Icons'
import { Logo } from '../../atoms/Logo'

// hay que hacer el tipo para el contexto y acomodarle algunas cositas

interface Props {
  children: React.ReactNode
}

interface SidemenuContextType {
  expanded?: boolean
}

export const SidemenuContext = createContext<SidemenuContextType | undefined>(
  undefined
)

export const SideMenu: React.FC<Props> = ({ children }) => {
  const [expanded, setExpanded] = useState(true)

  return (
    <aside className="h-screen w-fit">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Logo
            className={`overflow-hidden transition-all ${
              expanded ? 'w-32' : 'w-0'
            }`}
          />
          <button
            onClick={() => {
              setExpanded((curr) => !curr)
            }}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        <SidemenuContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidemenuContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
            alt="ui-avatar"
            className="w-10 h-10 rounded-md"
          />

          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>

            <MoreOptionsSVG />
          </div>
        </div>
      </nav>
    </aside>
  )
}

interface SidemenuItemProps {
  icon: JSX.Element
  text: string
  active?: boolean
  alert?: boolean
}

export const SidemenuItem: React.FC<SidemenuItemProps> = ({
  icon,
  text,
  active,
  alert
}) => {
  const { expanded } = useContext(SidemenuContext)
  return (
    <li
      className={`
      relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active !== undefined
          ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
          : 'hover:bg-indigo-50 text-gray-600'
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'w-52 ml-3' : 'w-0'
        }`}
      >
        {text}
      </span>
      {alert !== undefined && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? '' : 'top-2'
          }`}
        />
      )}

      {expanded === false && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
        >
          {text}
        </div>
      )}
    </li>
  )
}
