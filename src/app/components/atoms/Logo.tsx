import eluxLogo from '@/public/elux.svg'
import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string
}

export const Logo: React.FC<Props> = ({ className }) => {
  return <Image src={eluxLogo} alt="Elux Logo" className={`h-12 w-12 ${className}`}/>
}
