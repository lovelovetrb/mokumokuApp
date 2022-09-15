import { useState } from 'react'
import './css/App.css'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { TaskRegister } from './components/TaskRegister'
import { auth, provider } from './Auth/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { TimeLine } from './components/Timeline'
import { LoginPage } from './components/LoginPage'

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <Header></Header>
      <div className="wrapper">
        {user ? (
          <>
            <TaskRegister></TaskRegister>
            <TaskList></TaskList>
          </>
        ) :
          <LoginPage></LoginPage>
        }
      </div>
      <TimeLine></TimeLine>
    </div>
  )
}

export default App
