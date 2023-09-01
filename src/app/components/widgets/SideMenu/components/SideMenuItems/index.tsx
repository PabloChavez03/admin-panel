import {
  AccountSVG,
  BillingSVG,
  InvoicesSVG,
  SettingsSVG,
  TeamsSVG
} from '@/app/components/assets/Icons'
import Link from 'next/link'
import { SidemenuItem } from '../SidemenuItem'

// 1. hay que catchear los errors de los links
// 2. hay que ver que onda con los active y alert, que van a ser estados y no una constante como está ahora

const SIDEMENU_ITEMS = [
  {
    icon: <SettingsSVG />,
    text: 'General'
  },
  {
    icon: <TeamsSVG />,
    text: 'Teams'
  },
  {
    icon: <BillingSVG />,
    text: 'Billing',
    active: true
  },
  {
    icon: <InvoicesSVG />,
    text: 'Invoices',
    alert: true
  },
  {
    icon: <AccountSVG />,
    text: 'Account'
  }
]

export const SideMenuItems = () => {
  return (
    <ul className="flex-1 px-3">
      {SIDEMENU_ITEMS.map((item, index) => {
        const { icon, text, alert, active } = item

        return (
          <Link href={`/${text.toLowerCase()}`} key={index}>
            <SidemenuItem
            icon={icon}
            text={text}
            alert={alert}
            active={active}
            />
          </Link>
        )
      })}
    </ul>
  )
}
