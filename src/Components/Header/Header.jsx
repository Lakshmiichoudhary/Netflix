import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import signIn from "../../assets/signIn.png"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../utils/FireBase';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser,removeUser } from '../../utils/UserSlice';
import { ToggleExplorePage } from '../../utils/ExploreSlise';

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

  const exploreButtonHandler = (e) => {
    e.preventDefault()
    dispach(ToggleExplorePage())
  }

    return (
      <div className='absolute md:w-full px-2 md:px-6 py-2 md:py-3 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img  className="w-25 m-2 md:m-0 md:w-50 h-10 md:h-20 " src={logo} alt='logo'/>
        {user && <div className='md:p-1 md:mx-2 md:my-1 font-bold flex'>
          <button className='text-white px-7 py-4 hover:text-green-800' 
            onClick={exploreButtonHandler}>
            Explore
          </button>
          <img className='w-5 md:w-10 h-8 md:h-10 m-2' src={signIn} alt="sigin"/>
          <button className='text-white hover:text-red-600 ' onClick={signOutHandler}> Sign Out </button>
        </div>}
      </div>
    )
  }
  
  export default Header