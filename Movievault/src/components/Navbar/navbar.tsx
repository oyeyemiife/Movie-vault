import './navbar.css'
import Logo from '../../assets/Navbar/logo.png'
import { AccountIcon, Home, SearchIcon, StreakIcon } from '../../assets/svg/svg-export'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate();

  const handleAccount = () => {
    navigate('/profile'); 
  };

  const handleClick = () => {
    navigate('/landingpage'); 
  };
  return (
    <nav className='nav'>
        <div className='imagecontainer'>
            <img src={Logo} alt="" />
            <p>MOVIE VAULT</p>
        </div>
        <div className='navicon'>
            <div className='display'>
            <form>
              <input
                name="search"
                id="search"
                placeholder="Search for Movies..."
              />
            </form>
            <button title='search' type="submit">
                <SearchIcon />
              </button>
            </div>
            <div onClick={handleClick}>
            <Home/>
            </div>
            <div onClick={handleAccount}>
            <AccountIcon/>
            </div>
            <StreakIcon/>
        </div>
    </nav>
  )
}
