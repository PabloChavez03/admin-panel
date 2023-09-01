import { useContext } from 'react'
import { SidemenuContext } from '../components/widgets/SideMenu'

export function useToggleSidemenu () {
  const context = useContext(SidemenuContext)

  if (context === undefined) {
    throw new Error('useToggleSidemenu must be used within a SidemenuContext')
  }

  return context
}
