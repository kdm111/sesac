import React from 'react'
import useToggle from './hooks/useToggle'

export default function FAQ() {
  const [isFAQOpen, setISFAQOpen] = useToggle()
  return (
    <div>
      <h1>custom hook useToggle</h1>
      <div onClick={setISFAQOpen} style={{cursor : 'pointer'}}>
        Q. react에서 custom hook은 제작가능한가?
      </div>
      {isFAQOpen && <div>A. 가능합니다.</div>}
    </div>
  )
}
