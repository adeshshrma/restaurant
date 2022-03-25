const Hero = () => {
  return (
    <div className=' h-[50vh]'>
      <img
        className=' object-cover h-[50vh] w-[100vw]'
        src='https://firebasestorage.googleapis.com/v0/b/netflix-f0da8.appspot.com/o/restaurant%2Frestaurant.jpg?alt=media&token=cd132f91-7d55-48ff-8d62-a83bb03f67d0'
        alt='photo'
      />
      <div className='flex flex-col absolute top-[10rem] right-[5rem] items-end text-4xl font-bold'>
        <h3>TASTE</h3>
        <h2>UNIQUE FOOD</h2>
        <button className='text-lg rounded-md w-28 bg-yellow-700'>
          Read More
        </button>
      </div>
    </div>
  )
}

export default Hero
