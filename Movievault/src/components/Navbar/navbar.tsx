import React from 'react'
import './navbar.css'
import Logo from '../../assets/Navbar/logo.png'
import { AccountIcon, Home, SearchIcon } from '../../assets/svg/svg-export'

export const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='imagecontainer'>
            <img src={Logo} alt="" />
            <p>MOVIE VAULT</p>
        </div>
        <div className='navicon'>
            <div className='display'>
            <form 
            // onSubmit={onSubmitClickedHandler}
            >
              <input
                name="search"
                id="search"
                placeholder="Search for Movies..."
                // onChange={onChangeHandler}
              />
              <button title='search' type="submit">
                <SearchIcon />
              </button>
            </form>
            </div>
            <Home/>
            <AccountIcon/>
        </div>
    </nav>
  )
}
