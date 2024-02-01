import { 
    signInWithGooglePopup,
     signInWithGoogleRedirect, 
     createUserDocumentFromAuth, 
     auth
    } from '../../utils/firebase/firebase.utils'

import { useEffect } from 'react'
import { getRedirectResult } from "firebase/auth";
import SignUpForm from '../../components/sign-up/SignUpForm'

const SignIn = () => {
    const logGooglePopup = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGooglePopup}>
                Sign in with Google
            </button>
            <SignUpForm />
        </div>

    )
}

export default SignIn