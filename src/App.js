import classes from './App.module.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Form from './component/FeedbackForm'
import LandingPage from './component/LandingPage';
import Start from './component/Start'

function App() {

  return (
    <Router>
      <div className={classes.App}>
        <Routes>
        <Route exact path='/login-page-api' element={< Start />}></Route>
          <Route exact path='/login-page-api/signUp' element={< Form />}></Route>
          <Route exact path='/login-page-api/LandingPage' element={< LandingPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
