import React from 'react'
import { auth, provider } from '../Auth/firebase'
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import SignInButton from './SignInButton'


const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
  // marginBottom: '1.5rem',
  padding: '1rem 2rem'
}

const imgStyle = {
  height: '32px',
  width: '32px',
  borderRadius: '50%',
  marginRight: '1rem'
}

export const Header = () => {

  const [user] = useAuthState(auth)

  return (
    <header style={headerStyle}>
      <h3>mokumoku App</h3>
      <div>
        {user ? (
          <>
            <UserInfo></UserInfo>
            <SignOutButton></SignOutButton>
          </>
        ) :
          <SignInButton></SignInButton>
        }
      </div>
    </header >

  )
}

function UserInfo() {
  return (
    <>
      <img
        src={auth.currentUser.photoURL}
        alt=""
        style={imgStyle}
      />
      <span>{auth.currentUser.displayName}</span>
    </>
  )
}



function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>ログアウト</button>
  )
}

