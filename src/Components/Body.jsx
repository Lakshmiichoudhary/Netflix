import { useEffect } from 'react'
import Login from './Header/Login'
import Browse from './Browse'
import  {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/FireBase';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/UserSlice';


const Body = () => {
    const dispach = useDispatch()

    const appRouter = createBrowserRouter([
        {
          path: '/',
          element: <Login/>
        },
        {
          path: '/browse',
          element: <Browse/>
        }
    ])

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = user;
            dispach(addUser({uid:uid,email:email,displayName:displayName}))        
        } else {
          dispach(removeUser())
        }
      });

    },[])

    
  return (
    <>
    <RouterProvider router={appRouter} />
    </>
  )
}

export default Body