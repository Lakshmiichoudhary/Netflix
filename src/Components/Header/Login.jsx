import { useRef, useState } from 'react'
import Header from './Header'
import image from '../../assets/image.png'
import {  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/FireBase';
import { Validation } from '../Validation';

const Login = () => {
  const[isSingIn,setIsSignIn] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)
 
  const name = useRef(null);
  const email = useRef(null)
  const password = useRef(null)

  const submitHandler = () => {
    const message = Validation(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return

    if(!isSingIn){
    createUserWithEmailAndPassword
       (auth,
        email.current.value, 
        password.current.value)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value,
      })
      .then(() => {
        const { uid, email, displayName } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
        setErrorMessage(errorCode,errorMessage)
    });
  } else { 
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => { 
        const user = userCredential.user;
            console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
            setErrorMessage(errorCode,errorMessage)
      });
    }
  }

  const toggle = () => {
    setIsSignIn(!isSingIn)
    setErrorMessage(null);

  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className='h-screen object-cover md:object-none w-screen' src={image} alt='background'/>
      </div>
      <div className='md:w-4/12 w-[70%] absolute bg-black p-11 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl p-4'>{isSingIn ? "Sign In" : "Sign Up"}</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          {!isSingIn && 
          <input ref={name} type='text' placeholder='Full Name' className='p-4 m-2 w-full bg-gray-700 rounded-md'/>}
          <input ref={email} type='text' placeholder='Email or phone Number' className='p-4 m-2 w-full bg-gray-700 rounded-md'/>
          <input ref={password} type='password' placeholder='Password' className='p-4 m-2 w-full bg-gray-700 rounded-md'/>
          <p className='p-2 text-red-700 font-bold'>{errorMessage}</p>
          <button className='p-3 m-2 bg-red-700 w-full rounded-md' onClick={submitHandler}>
            {isSingIn ? "Sign In" : "Sign Up"}</button>
          <p className='p-2 cursor-pointer' onClick={toggle}>
            {isSingIn ? "New to Netflix? Sign up now" : "Existing User? Sing In"}</p>
        </form>
      </div>
    </div>
  )
}

export default Login