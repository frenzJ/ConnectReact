import './Signup.css'
import Buttons from '../components/Buttons';
import { useState } from 'react';

function Signup() {
  const [data, setData] = useState({username: "", email: "", password: ""});
  const [response, setResponse] = useState("");

  function handleChange(e){
    setData({...data, [e.target.name]: e.target.value})
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost/Practice/Backend/signup.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    setResponse(result.message)

    setData({ username: "", email: "", password: "" });
  };


  return (
    <>
        <div className='signupBox'>
            <form onSubmit={handleSubmit}>
                <h1>This is Signup Page</h1>
                <div className='inputBox'>
                  <label htmlFor="">Username: </label>
                  <input id='username' onChange={handleChange} value={data.username} name="username" className='inputs' type="text" /><br /><br />
                  <label htmlFor="">Email: </label>
                  <input id='email' onChange={handleChange} value={data.email} name="email" className='inputs' type="text" /><br /><br />
                  <label htmlFor="">Password: </label>
                  <input id='password' onChange={handleChange} value={data.password} name="password" className='inputs' type="text" /><br /><br />
                </div>
                <div className='buttonBox'>
                  <Buttons className='button' type='submit' name='Signup'/> <Buttons className='button' type='button' name='Login' /> 
                </div>
                <h1>{response}</h1>
            </form>
        </div>
    </>
  );
}

export default Signup;