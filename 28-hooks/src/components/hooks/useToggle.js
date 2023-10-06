import { useState } from 'react'

export default function useToggle(initValue = false) {
  // value toggle 상태, setValue toggle 변화
  const [value, setValue] = useState(initValue)
  const toggleValue = () => {
    setValue(!value)
  }
  return [value, toggleValue]
}