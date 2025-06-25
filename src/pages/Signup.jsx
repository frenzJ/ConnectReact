import './Signup.css'
import Buttons from '../components/Buttons';

function Signup() {
  return (
    <>
        <div className='signupBox'>
            <form action="">
                <label htmlFor="">username: </label>
                <input type="text" /><br /><br />
                <label htmlFor="">email: </label>
                <input type="text" /><br /><br />
                <label htmlFor="">password: </label>
                <input type="text" /><br /><br />
                <Buttons name="Signup" /> <button>Login</button>
                
            </form>
        </div>
    </>
  );
}

export default Signup;