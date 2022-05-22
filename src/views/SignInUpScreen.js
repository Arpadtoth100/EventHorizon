import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

function SignInUpScreen() {
  return (
    <div id="signinup_main" className="signinup_main outlet_main" >
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInUpScreen;
