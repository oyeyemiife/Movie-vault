import './signup.css'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {

    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signin'); 
  };

  return (
        <div className='signincontainer'>
            <div className='sideform'>
            </div>
            <div className='userdetails'>
                <p className='movievault'>
                   Welcome to Movie Vault
                </p>
                <div className='details'>
            <form className='signinform'>
                <label>
                    Email:
                </label>
                <input className='' 
                    type="text"  
                    name='email'
                    placeholder='Enter your email...'  
                    required />
                    <label>
                    Password:
                </label>
                <input className='' 
                    type="password"  
                    name='password'
                    placeholder='Enter a password'  
                    required />
                    <div className='signinbutton'>
            <button type='submit' className='button'>SignUp</button>
            </div>
            </form>
            </div>
            <div className='signin'>
            <p className='signinoption'>Already have an account? <button type='submit' className='signin-button' onClick={handleClick}>SignIn</button></p>
            </div>
            </div>
        </div>
  )
}
