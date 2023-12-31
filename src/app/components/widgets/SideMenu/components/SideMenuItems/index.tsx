import {
  AccountSVG,
  BillingSVG,
  InvoicesSVG,
  ProductsSVG,
  SettingsSVG
} from '@/app/components/assets/Icons'
import Link from 'next/link'
import { SidemenuItem } from '../SidemenuItem'
// 1. hay que catchear los errors de los links
// 2. hay que ver que onda con los active y alert, que van a ser estados y no una constante como está ahora

const SIDEMENU_ITEMS = [
  {
    id: 0,
    icon: <SettingsSVG />,
    text: 'General',
    slug: 'general',
    active: true
  },
  {
    id: 1,
    icon: <ProductsSVG />,
    text: 'Productos',
    slug: 'products'
  },
  {
    id: 2,
    icon: <BillingSVG />,
    text: 'Billing',
    slug: 'billing'
  },
  {
    id: 3,
    icon: <InvoicesSVG />,
    text: 'Invoices',
    slug: 'invoices',
    alert: true
  },
  {
    id: 4,
    icon: <AccountSVG />,
    text: 'Account',
    slug: 'account'
  }
]

export const SideMenuItems = () => {
  return (
    <ul className="flex-1 px-3">
      {SIDEMENU_ITEMS.map((item, index) => {
        const { icon, text, active, alert } = item

        return (
          <Link href={'#'} key={index} >
            <SidemenuItem
            icon={icon}
            text={text}
            active={active}
            alert={alert}
            />
          </Link>
        )
      })}
    </ul>
  )
}
