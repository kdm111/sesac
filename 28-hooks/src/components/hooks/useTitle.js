import { useEffect } from 'react'

export default function useTitle(title) {
  useEffect(() => {
    const prevTittle = document.title
    document.title = title
    return () => {
      document.title = prevTittle
    }
  }, [title])
}
