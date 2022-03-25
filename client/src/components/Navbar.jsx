import { BorderColor, Restaurant } from '@mui/icons-material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/context'

const Navbar = () => {
  const { info } = useContext(Context)
  return (
    <div className='bg-transparent fixed top-0 flex justify-between text-black text-lg font-bold p-8 w-[100vw]'>
      <div className='flex gap-2 ml-4'>
        <Restaurant />
        <h5>RESTAURANT</h5>
      </div>
      <div className='flex gap-8 mr-4'>
        <h5>Home</h5>
        <h5>Menu</h5>
        <h5>About</h5>
        <Link to='/orders'>
          <BorderColor />
        </Link>
        <div className=' absolute top-6 right-10 text-sm w-4 h-4 text-center rounded-full bg-white text-black'>
          {info.count}
        </div>
      </div>
    </div>
  )
}

export default Navbar
