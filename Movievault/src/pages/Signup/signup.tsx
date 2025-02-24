import { useState } from 'react';
import './signup.css'
import { useNavigate } from 'react-router-dom'

interface SignupForm {
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
}

export const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<SignupForm>({
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
    });
    const [error, setError] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('YOUR_API_ENDPOINT/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    username: formData.username
                }),
            });

            if (response.ok) {
                navigate('/signin');
            } else {
                const data = await response.json();
                setError(data.message || 'Signup failed');
            }
        } catch (err) {
            setError('An error occurred during signup');
        }
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
                    <form className='signinform' onSubmit={handleSubmit}>
                        {error && <p className='error-message'>{error}</p>}
                        
                        <label>Username:</label>
                        <input 
                            type="text"
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            placeholder='Enter your username'
                            required 
                        />

                        <label>Email:</label>
                        <input 
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter your email'
                            required 
                        />

                        <label>Password:</label>
                        <input 
                            type="password"
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Enter your password'
                            required 
                        />

                        <label>Confirm Password:</label>
                        <input 
                            type="password"
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder='Confirm your password'
                            required 
                        />

                        <div className='signinbutton'>
                            <button type='submit' className='button'>Sign Up</button>
                        </div>
                    </form>
                </div>
                <div className='signin'>
                    <p className='signinoption'>Already have an account? <button type='button' className='signin-button' onClick={() => navigate('/signin')}>Sign In</button></p>
                </div>
            </div>
        </div>
    )
}
