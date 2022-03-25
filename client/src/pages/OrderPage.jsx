import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/context'
import axios from 'axios'
import Item from '../components/item'
import { useNavigate } from 'react-router-dom'
import { jsPDF } from 'jspdf'

const OrderPage = () => {
  const { info, dispatch } = useContext(Context)
  const navigate = useNavigate()
  const [subTotal, setSubTotal] = useState(null)

  useEffect(() => {
    let total = 0
    const getSubTotal = () => {
      {
        info.orderList.map((item) => {
          return (total = total + item.price)
        })
      }
    }
    getSubTotal()
    setTimeout(() => {
      setSubTotal(total)
    }, 1000)
  }, [info])

  const handlePay = () => {
    let num = 30
    const doc = new jsPDF({
      orientation: 'portrait',
    })
    doc.text('Restaurant Bill', 60, 10)
    {
      info.orderList.map((item) => {
        num = num + 20
        return doc.text(
          `${item.title} ------------------ $${item.price}`,
          50,
          num
        )
      })
    }
    doc.text(
      `SubTotal ------------------ $${(
        Math.round(subTotal * 100) / 100
      ).toFixed(2)}`,
      50,
      num + 30
    )
    doc.save('bill.pdf')
    dispatch({
      type: 'PAY_BILL',
      payload: {
        count: 0,
        orderList: [],
      },
    })
    navigate('/')
  }

  return (
    <div className=' bg-slate-500 min-w-[100vw] max-w-[100%] min-h-[100vw] max-h-[100%] px-[10rem] py-16'>
      {info.orderList.map((item, index) => {
        return <Item key={index} id={item.id} />
      })}
      <div className=' text-right'>
        <h1>SubTotal: ${(Math.round(subTotal * 100) / 100).toFixed(2)}</h1>
      </div>
      <button
        className='px-4 py-1 bg-purple-500 rounded-md mt-2 ml-[90%]'
        onClick={() => setSubTotal(subTotal + subTotal * 0.1)}
      >
        Add 10% Tip
      </button>
      <button
        className='px-6 py-2 bg-purple-500 rounded-md mt-2 ml-[50%]'
        onClick={handlePay}
      >
        Pay
      </button>
    </div>
  )
}

export default OrderPage
