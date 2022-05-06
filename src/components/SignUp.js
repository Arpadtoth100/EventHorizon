import {useState} from 'react'

function SignUp() {

    const [signUpData, setSignUpData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
    })

    const collectSignUpData = (event) => {
        if(event.target.name === 'username'){
            setSignUpData((prev) => ({...prev, 'username': event.target.value}))
        }
        else if(event.target.name === 'email'){
            setSignUpData((prev) => ({...prev, 'email': event.target.value}))
        }
        else if(event.target.name === 'password'){
            setSignUpData((prev) => ({...prev, 'password': event.target.value}))
        }
        else if(event.target.name === 'confirmpassword'){
            setSignUpData((prev) => ({...prev, 'confirmpassword': event.target.value}))
        }
    }

    return (
        <div className='signup_main'>
            <form className="signupform">
                <h3>Sign Up Here</h3>

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" name="username" id="su_username" onChange={collectSignUpData}/>

                <label htmlFor="username">Email</label>
                <input type="text" placeholder="Username" name="email" id="su_email" onChange={collectSignUpData}/>

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" name="password" id="su_password" onChange={collectSignUpData}/>

                <label htmlFor="password">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" name="confirmpassword" id="su_confirmpassword" onChange={collectSignUpData}/>

                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp