import axios from 'axios'
import { useEffect, useState } from 'react'

const Item = ({ id }) => {
  const [item, setItem] = useState({})
  useEffect(() => {
    const getItem = async () => {
      const res = await axios.get(`http://localhost:5000/api/items/${id}`)
      setItem(res.data)
    }
    getItem()
  }, [])

  return (
    <div className='flex justify-between'>
      <div className='flex w-[50%] h-[5rem]'>
        <img
          src={item.img}
          alt=''
          className=' object-cover rounded-full w-16 h-16 mr-4'
        />
        <div className='flex flex-col'>
          <h1>
            {item.title}{' '}
            <span className=' text-gray-600 mx-10'>
              ------------------------------------
            </span>
          </h1>
        </div>
      </div>
      <span>${item.price}</span>
    </div>
  )
}

export default Item
