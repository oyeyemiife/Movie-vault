import './navbar.css'
import Logo from '../../assets/Navbar/logo.png'
import { AccountIcon, Home, SearchIcon, StreakIcon } from '../../assets/svg/svg-export'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { searchMovies } from '../../pages/LandingPage/tmdbservice';

export const Navbar = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');



  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // const results = await searchMovies(inputValue); // Call the API
      navigate('/landingpage', { state: { query : inputValue } }); // Navigate to the landing page with results
    }  };

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
            <form onSubmit={handleSearch}>
              <input
                name="search"
                id="search"
                placeholder="Search for Movies..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
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
