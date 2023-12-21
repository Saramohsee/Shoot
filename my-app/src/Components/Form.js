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
        <form onSubmit={handleSubmit}>
            <h1>Just one last step.</h1>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>  
    );
};


export default Form;