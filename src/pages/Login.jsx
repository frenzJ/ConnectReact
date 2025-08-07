import './Login.css'
import Buttons from '../components/Buttons';
import { useState } from 'react';

function Login() {
    const [data, setData] = useState({username: "", password: ""});
    const [response, setResponse] = useState("");

    function handleChange(e){
        setData({...data, [e.target.name]: e.target.value});
    }

const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost/Practice/ConnectReact/backend/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    setResponse(result.message)

    setData({ username: "", password: "" });
  };



    return(
        <>
            <div className='loginpBox'>
                <form onSubmit={handleSubmit}>
                    <h1>This is Login Page</h1>
                    <div className='inputBox'>
                    <label>Username: </label>
                    <input id='username' onChange={handleChange} value={data.username} name="username" className='inputs' type="text" /><br /><br />
                    <label>Password: </label>
                    <input id='password' onChange={handleChange} value={data.password} name="password" className='inputs' type="text" /><br /><br />
                    </div>
                    <div className='buttonBox'>
                        <Buttons className='button' type='submit' name='Login'/>
                    </div>
                    <h1>{response}</h1>
                </form>
            </div>
        </>
    );
}

export default Login;