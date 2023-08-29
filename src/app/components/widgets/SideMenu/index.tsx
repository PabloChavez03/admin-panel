import {
  AccountSVG,
  BillingSVG,
  InvoicesSVG,
  LogoutSVG,
  SettingsSVG,
  TeamsSVG,
} from '../../assets/Icons'

export const SideMenu = () => {
  return (
    <aside className="flex h-screen w-16 flex-col justify-between border-e bg-white">
      <nav>
        <div className="inline-flex h-16 w-16 items-center justify-center">
          <span className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            L
          </span>
        </div>

        <div className="border-t border-gray-100">
          <div className="px-2">
            <div className="py-4">
              <a
                href=""
                className="group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
              >
                <SettingsSVG />
                <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                  General
                </span>
              </a>
            </div>

            <SideMenuItem />
          </div>
        </div>
      </nav>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
        <form action="/logout">
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <LogoutSVG />

            <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
              Logout
            </span>
          </button>
        </form>
      </div>
    </aside>
  )
}

export const SideMenuItem = () => {
  return (
    <ul className="space-y-1 border-t border-gray-100 pt-4">
      <li>
        <a
          href=""
          className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        >
          <TeamsSVG />
          <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
            Teams
          </span>
        </a>
      </li>

      <li>
        <a
          href=""
          className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        >
          <BillingSVG />
          <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
            Billing
          </span>
        </a>
      </li>

      <li>
        <a
          href=""
          className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        >
          <InvoicesSVG />

          <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
            Invoices
          </span>
        </a>
      </li>

      <li>
        <a
          href=""
          className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        >
          <AccountSVG />

          <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
            Account
          </span>
        </a>
      </li>
    </ul>
  )
}
