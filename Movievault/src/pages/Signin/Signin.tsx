import './signin.css'
import { useNavigate } from 'react-router-dom'


export const Signin = () => {

    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/landingpage'); 
  };
  return (
        <div className='signincontainer'>
            <div className='sideform'>
            </div>
            <div className='userdetails'>
                <p className='movievault'>
                   Welcome Back to Movie Vault
                </p>
                <div className='details'>
            <form className='signinform'>
                <label>
                    Email or Username:
                </label>
                <input className='' 
                    type="text"  
                    name='email'
                    placeholder='Enter your email or username'  
                    required />
                    <label>
                    Password:
                </label>
                <input className='' 
                    type="password"  
                    name='password'
                    placeholder='Enter your password'  
                    required />
                    <div className='signinbutton'>
            <button type='submit' className='button'onClick={handleClick} >SignIn</button>
            </div>
            </form>
            </div>
            </div>
        </div>
  )
}
