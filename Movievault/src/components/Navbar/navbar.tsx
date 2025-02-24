import './navbar.css'
import Logo from '../../assets/Navbar/logo.png'
import { AccountIcon, Home, SearchIcon, StreakIcon } from '../../assets/svg/svg-export'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

export const Navbar = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');



  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      navigate('/landingpage', { state: { query : inputValue } }); 
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
              <button title='search' type="submit">
                <SearchIcon />
              </button>
            </form>
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
