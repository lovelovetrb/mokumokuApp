import React from 'react'
import { auth, provider } from '../Auth/firebase'
import { signInWithPopup } from "firebase/auth";

const buttonStyle = {
    margin: '1.2em'
}


const SignInButton = () => {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                alert(`ログインしました\n${auth.currentUser.displayName}さん！ mokumoku appへようこそ！`)
            })
    }

    return (
        <button
            style={buttonStyle}
            onClick={signInWithGoogle} >
            ログイン
        </button>
    )
}

export default SignInButton