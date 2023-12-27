import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import signIn from "../../assets/signIn.png"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../utils/FireBase';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser,removeUser } from '../../utils/UserSlice';

const Header = () => {
  const navigate = useNavigate()
  const dispach = useDispatch()
  const user = useSelector((store) => store.user)

  const signOutHandler = () => {
    signOut(auth).then(() => {
      
    }).catch((error) => {
      navigate("/error")
    }); 
}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
          dispach(addUser({uid:uid,email:email,displayName:displayName}))
          navigate("/browse")        
      } else {
        dispach(removeUser())
        navigate("/")
      }
    });

    return () => unsubscribe();
  },[])

    return (
      <div className='absolute w-full px-6 py-3 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img  className="w-50 h-20" src={logo} alt='logo'/>
        {user && <div className='p-2 mx-2 my-1 font-bold flex'>
          <img className='w-10 m-2' src={signIn} alt="sigin"/>
          <button className='text-white hover:text-red-600' onClick={signOutHandler}> Sign Out </button>
        </div>}
      </div>
    )
  }
  
  export default Header