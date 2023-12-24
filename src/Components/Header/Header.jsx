import logo from '../../assets/logo.png'
const Header = () => {
    return (
      <div className='absolute  px-6 py-3 bg-gradient-to-b from-black z-10'>
        <img  className="w-50 h-20" src={logo} alt='logo'/>
      </div>
    )
  }
  
  export default Header