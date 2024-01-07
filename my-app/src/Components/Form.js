import React, {useState} from 'react';
import Style from './Form.module.css';
import redirectToPage from './Affiliate';

const getEmail = async (email) => {
  try {
   const response = await fetch('http://localhost:3001/getemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  
    },
    body: JSON.stringify({ email }),
    });
    if (response.ok) {
      return true;
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
} 

function Form () {
  
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const result = await getEmail(email);
        if(result === true) {
          redirectToPage();
        }
        } catch (error) {
          console.error('Error:', error.message); 
        }
    };
    const handleEmailChange = (e) => {
            setEmail(e.target.value);
          };

    return (    
        <form onSubmit={handleSubmit} className='Form'>
            <h1 className='formTitle'>Just one last step.</h1>
        <label>
         <input 
            className='emailInput'
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your Email"
            required
          />
        </label>
        <div className='buttonDiv'>
          
        <button type="submit" className='button'>Continue</button>
        
        </div>
      </form>  
    );
};


export default Form;