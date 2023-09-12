'use client'
import { createContext, useState } from 'react'
import { ChevronLeftSVG, ChevronRightSVG, LogoIcon } from '../../assets/Icons'
import { Options } from './components/Options'
import { SideMenuItems } from './components/SideMenuItems'
interface SidemenuContextType {
  expanded?: boolean
}

export const SidemenuContext = createContext<SidemenuContextType | undefined>(
  undefined
)

export const SideMenu = () => {
  const [expanded, setExpanded] = useState(true)

  const value: SidemenuContextType = {
    expanded
  }

  return (
    <aside className="h-screen w-fit">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <LogoIcon
            className={`overflow-hidden transition-all ${
              expanded ? 'w-[60px]' : 'w-0'
            }`}
          />
          <button
            onClick={() => {
              setExpanded((curr) => !curr)
            }}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronLeftSVG /> : <ChevronRightSVG />}
          </button>
        </div>

        <SidemenuContext.Provider value={value}>
          <SideMenuItems />
        </SidemenuContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?name=Pablo+Chavez"
            alt="ui-avatar"
            className="w-10 h-10 rounded-md"
          />

          <div
            className={`
              flex justify-between items-center gap-x-2
              overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}
          >
            <div className="flex flex-col leading-4">
              <h4 className="font-semibold">Pablo Chávez</h4>
              <span className="text-xs text-gray-600 truncate w-40">pablooscarchavez@gmail.com</span>
            </div>

            <Options />
          </div>
        </div>
      </nav>
    </aside>
  )
}
