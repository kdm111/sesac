import React, {useState} from 'react'

export default function Ex() {
  const [data, setData] = useState([
    {
      name : '코디',
      email : 'codi@gmail.com',
    },
    {
      name : '윤소희',
      email : 'yoonsohee@gmail.com',
    },
  ])
  const addData = () => {
    if (inputData.name !== '' && inputData.email !== '') {
      setData((data) => {
        const newData = [...data, inputData]
        setInputData({name : "", email : ""})
        return newData
      })
    }
  }
  const [inputData, setInputData] = useState({name : '', email : ''})
  return (
    <>
      <input placeholder='이름' value={inputData.name} 
        onChange={(el) => {
          setInputData((data) => {
            return {...data, name : el.target.value}
          })}
        }
        onKeyDown={(e) => {
          if (!e.nativeEvent.isComposing && e.key === 'Enter') {
            addData()
          }
        }}
      />
      <input placeholder='이메일' value={inputData.email} 
        onChange={(el) => {
        setInputData((data) => {
          return {...data, email : el.target.value}
        })}}
        onKeyDown={(e) => {
          if (!e.nativeEvent.isComposing && e.key === 'Enter') {
            addData()
          }
        }}  
      />
      <button
        onClick={addData}
      >
        입력
      </button>
      {data.map((el, idx) => {
        return <li 
          key={idx}
          onDoubleClick={() => {
            setData((data) => {
              return data.filter((el) => data.indexOf(el) !== idx)
            })
          }}
        >{el.name} : {el.email}</li>
      })}
    </>
  )
}