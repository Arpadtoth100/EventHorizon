import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"

function SignInUpScreen(){
    return(
        <div className="signinup_main">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInUpScreen