import {useState} from 'react'
import Form from './Form'
import SearchBar from './SearchBar'
import Table from './Table'
export default function Subject1 () {
  const [data, setData] = useState([
    {
      name : '1',
      title : 'hi'
    },
    {
      name : '2',
      title : 'hi2'
    }
  ])
  const [inputData, setInputData] = useState({
    name : '',
    title : ''
  })
  return (
    <>
      <Form 
        setInputData={setInputData}
      />
      <br />
      <SearchBar 
        
      />
      <br />
      <Table 
        data={data}
      />
    </>
  )
}