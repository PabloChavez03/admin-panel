'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { Error404 } from '../../components/widgets/Error404'

export default function Error ({
  error
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return <Error404 />
}
