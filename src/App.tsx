
import { Route, Routes } from 'react-router-dom';
import { Intro } from './components/Intro';
import { NavBar } from './components/navbar/NavBar';
import { SignUp } from './components/User/SignUp';
import { UserEdit } from './components/User/UserEdit';
import { UserView } from './components/User/UserView';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/signup' element={<SignUp />} />
      </Routes>

    </>
  )
}

export default App;
