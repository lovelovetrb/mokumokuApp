import React from 'react'
import SignInButton from './SignInButton'

const LoginPageStyle = {
    display: 'flex',
    textAlign: 'center',
    width: '100%',
    height: '50vh',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column'
}

export const LoginPage = () => {
    return (
        <div style={LoginPageStyle}>
            <h3>ログインしましょう！</h3>
            <SignInButton></SignInButton>
        </div>
    )
}
