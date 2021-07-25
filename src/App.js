import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import layout from './components/layout/layout';
import homePage from './containers/homePage/homePage';
import loginPage from './containers/loginPage/loginPage';
import registerPage from './containers/registerPage/registerPage';
import PrivateRoute from './components/PrivateRoute';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from './actions/auth.actions';


function App() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isLoggedInUser())
    }
  }, []);

  return (
    <div className="App">
      <Router>
        {/* only logged in user can see */}
        <PrivateRoute path='/' exact component={homePage} />

        <Route path='/login' component={loginPage} />
        <Route path='/signup' component={registerPage} />

      </Router>
    </div>
  );
}

export default App;
