import { Add, Remove } from '@mui/icons-material'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/context'

const Items = () => {
  const [items, setItems] = useState([])
  const { info, dispatch } = useContext(Context)
  const [finish, setFinish] = useState(false)

  const navigate = useNavigate()

  const handleOrderAgain = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ORDER_AGAIN',
      payload: {
        count: 0,
        orderList: [...info.orderList],
      },
    })
    setFinish(!finish)
  }

  const handleCount = (id, price, title) => {
    return dispatch({
      type: 'IN_COUNT',
      payload: {
        count: info.count + 1,
        orderList: [...info.orderList, { id, price, title }],
      },
    })
  }

  useEffect(() => {
    const getItems = async () => {
      const res = await axios.get('http://localhost:5000/api/items')
      setItems(res.data)
    }
    getItems()
  }, [])

  return (
    <div className={`bg-black h-[50vh] text-white py-[5vh] px-[10vw]`}>
      <div className='flex flex-col gap-4'>
        {items.map((item, i) => {
          return (
            <div
              className={`flex ${finish ? 'pointer-events-none' : null}`}
              key={i}
            >
              <div className='flex w-[80%] h-[5rem]'>
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
                    ${item.price}
                  </h1>
                  <h1>{item.desc}</h1>
                </div>
              </div>
              <div className='flex gap-3 items-center'>
                <button
                  className='px-6 rounded-md py-1 bg-slate-600'
                  onClick={() => handleCount(item._id, item.price, item.title)}
                >
                  Add
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <button
        className={` bg-purple-400 px-6 py-1 ml-[40%] text-black rounded-md ${
          finish ? 'hidden' : 'block'
        }`}
        onClick={() => setFinish(!finish)}
      >
        Order and Eat
      </button>
      <div className='flex'>
        <button
          onClick={handleOrderAgain}
          className={` bg-purple-400 px-6 py-1 ml-[33%] text-black rounded-md ${
            finish ? 'block' : 'hidden'
          }`}
        >
          Order Again
        </button>
        <button
          onClick={() => navigate('/orders')}
          className={`bg-purple-400 px-6 ml-[5%] py-1 text-black rounded-md ${
            finish ? 'block' : 'hidden'
          } `}
        >
          Pay the Bill
        </button>
      </div>
    </div>
  )
}

export default Items
