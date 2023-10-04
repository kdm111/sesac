import React, { useState } from 'react'

export default function Alphabet() {
  const [list, setList] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);
  const [inputAlpha, setInputAlpha] = useState('')
  const addAlpha = () => {
    // const newAlpha = list.concat([{id : list.length+1, alpha : inputAlpha}])
    // setList(newAlpha)
    setList((data) => {
      const inputData = inputAlpha
      setInputAlpha("")
      if (inputData !== "") {
        return [...data, {id : list.length+1, alpha : inputData}]
      } return [...data]
    })
  }
  const deleteAlpha = (targetId) => {
    // setList((data) => {
    //   return data.filter((el) => {
    //     return el.id !== targetId
    //   })
    // })
    const newAlpha = list.filter((alpha) => {return alpha.id !== targetId})
    setList(newAlpha)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addAlpha()
    }
  }
  return (
    <>
    <input placeholder='알파벳입력' value={inputAlpha} onChange={(e) => {
      const alpha = e.target.value
      setInputAlpha(alpha)
    }}
      onKeyDown={(e) => {
        // 한글은 조합되는 과정에서 
        console.log(e.nativeEvent.isComposing)
        if (!e.nativeEvent.isComposing && e.key === 'Enter')
          addAlpha()
      }}
    />
    <button
      onClick={addAlpha}
    > ADD </button>
    <ol>
      {/* map 사용 */}
      { list.map((value) => {
        return <li 
          key={value.id} 
          // onClick={() => deleteAlpha(value.id)}
          onClick={(e) => {
              deleteAlpha(value.id)
            }}
          >
          {value.alpha}
        </li>
      }) }
    </ol>
    </>
  )
}