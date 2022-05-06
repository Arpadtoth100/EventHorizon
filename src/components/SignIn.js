import {useState} from 'react'

function SignIn() {

    const [signInData, setSignInData] = useState({
        email: '',
        password: '',
    })

    const collectSignInData = (event) => {
        if(event.target.name === 'email'){
            setSignInData((prev) => ({...prev, 'email': event.target.value}))
        }
        else if(event.target.name === 'password'){
            setSignInData((prev) => ({...prev, 'password': event.target.value}))
        }
    }

    return (
        <div className='signin_main'>
            <form className="signinform">
                <h3>Sign In Here</h3>

                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email" name="email" id="si_email" onChange={collectSignInData}/>

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" name="password" id="si_password" onChange={collectSignInData}/>
                
                <button>Sing In</button>
            </form>
        </div>
    )
}

export default SignIn
