import { useState } from 'react'
import Header from './Header'
import image from '../../assets/image.png'

const Login = () => {
  const[isSingIn,setIsSignIn] = useState(false)

  const toggle = () => {
    setIsSignIn(!isSingIn)

  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={image} alt='background'/>
      </div>
      <div className='w-4/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl p-4'>{isSingIn ? "Sign In" : "Sign Up"}</h1>
        <form>
          {!isSingIn && <input type='text' placeholder='Full Name' className='p-4 m-2 w-full
          bg-gray-700 rounded-md'/>}
          <input type='text' placeholder='Email or phone Number' className='p-4 m-2 w-full
          bg-gray-700 rounded-md'/>
          <input type='text' placeholder='Password' className='p-4 m-2 w-full
          bg-gray-700 rounded-md'/>
          <button className='p-3 m-2 bg-red-700 w-full rounded-md'>{isSingIn ? "Sign In" : "Sign Up"}</button>
          <p className='p-2 cursor-pointer' onClick={toggle}>
            {isSingIn ? "New to Netflix? Sign up now" : "Existing User? Sing In"}</p>
        </form>
      </div>
    </div>
  
    
  )
}

export default Login