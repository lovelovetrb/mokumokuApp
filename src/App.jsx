import { useState } from 'react'
import './css/App.css'
import { Header } from './components/Header'
import { auth, provider } from './Auth/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { TimeLine } from './components/Timeline'
import { LoginPage } from './components/LoginPage'
import Footer from './components/Footer'
import Task from './Task'


function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <Header></Header>
      <div className="wrapper">
        {user ? (
          <>
            <Task></Task>
          </>
        ) :
          <>
            <LoginPage></LoginPage>
          </>
        }
      </div>
      <TimeLine></TimeLine>
      <Footer></Footer>
    </div>
  )
}

export default App
