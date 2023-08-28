import eluxLogo from '@/public/elux.svg'
import Image from 'next/image'

export const Logo = () => {
  return <Image src={eluxLogo} alt="Elux Logo" />
}
