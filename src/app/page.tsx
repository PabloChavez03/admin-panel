import { AccountSVG, BillingSVG, InvoicesSVG, SettingsSVG, TeamsSVG } from './components/assets/Icons'
import { SideMenu, SidemenuItem } from './components/widgets/SideMenu'

export default function Home () {
  return (
    <main className="flex flex-col">
      <SideMenu>
        <SidemenuItem icon={<SettingsSVG />} text='General'/>
        <SidemenuItem icon={<TeamsSVG />} text='Teams' />
        <SidemenuItem icon={<BillingSVG />} text='Billing' active/>
        <SidemenuItem icon={<InvoicesSVG />} text='Invoices' alert />
        <SidemenuItem icon={<AccountSVG />} text='Account' />
      </SideMenu>
    </main>
  )
}
