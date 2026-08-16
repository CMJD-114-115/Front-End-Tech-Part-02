
import { Route, Routes } from 'react-router-dom';
import { Intro } from './components/Intro';
import { NavBar } from './components/navbar/NavBar';
import { SignUp } from './components/auth/SignUp';
import { UserEdit } from './components/User/UserEdit';
import { UserView } from './components/User/UserView';
import { LogIn } from './components/auth/LogIn';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<LogIn />} />
        <Route path='/users' element={<UserView />} />
      </Routes>

    </>
  )
}

export default App;
