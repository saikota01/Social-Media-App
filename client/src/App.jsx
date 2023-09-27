import './App.css';
import { useEffect } from 'react';
import Users from './Users';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Routing from './Routing';
import MyNavBar from './MyNavBar';
import Login from './Login';
import Signup from './Signup';
import { useDispatch } from "react-redux"
import { cookieLoginActionCreator } from './reducers/userReducer';
import Toast from './Toast';
import Loader from './Loader';
import CreatePost from './CreatePost';
import Home from './Home';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cookieLoginActionCreator())
  }, [])


  return (
    <BrowserRouter>
      <MyNavBar />
      <Toast />
      <Loader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/friends' element={<Users />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/post' element={<CreatePost />} />

        {/* Nested Routing */}
        {/* <Route path='/parent/child-route1' element={<ComponentA />} />
        <Route path='/parent/child-route2' element={<ComponentA />} />
        <Route path='/parent/child-route3' element={<ComponentA />} /> */}
        {/* <Route path='/parent'>
          <Route path='child-route1' element={<ComponentA />} />
          <Route path='child-route2' element={<ComponentA />} />
          <Route path='child-route3' element={<ComponentA />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
