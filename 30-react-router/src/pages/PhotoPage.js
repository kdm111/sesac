import React, {useEffect, useState} from 'react'
import PhotoItem from '../components/PhotoItem'
import axios from 'axios'

export default function PhotoPage() {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      setPhotos(response.data.slice(0, 10))
    })
  }, [])
  return (
    <div>
      <h1>PHOTO PAGE</h1>
      <ul>
        {
          photos.map((el) => {
            return (
              <PhotoItem 
                photo={el}
                key={el.id}
              />
            )
          })
        }
      </ul>
    </div>
  )
}
