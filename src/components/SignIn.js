import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  const navigateTo = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigateTo('/profile');
  };

  const collectSignInData = (event) => {
    if (event.target.name === 'email') {
      setSignInData((prev) => ({ ...prev, email: event.target.value }));
    } else if (event.target.name === 'password') {
      setSignInData((prev) => ({ ...prev, password: event.target.value }));
    }
  };

  return (
    <div className="signin_main">
      <form className="signinform" onSubmit={submitHandler}>
        <h3>Sign In Here</h3>

        <label htmlFor="si_email" className='textlabel'>Email</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          id="si_email"
          className="textinput"
          onChange={collectSignInData}
        />

        <label htmlFor="si_password" className='textlabel'>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="si_password"
          className="textinput"
          onChange={collectSignInData}
        />

        <button>Sing In</button>
      </form>
    </div>
  );
}

export default SignIn;
