import React, {useState} from 'react';

import Style from './Form.module.css';

function Form () {
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault()
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