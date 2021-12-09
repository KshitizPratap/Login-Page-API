import classes from './App.module.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Form from './component/FeedbackForm'
import LandingPage from './component/LandingPage';

function App() {

  return (
    <Router>
      <div className={classes.App}>
        <Routes>
          <Route exact path='/signUp' element={< Form />}></Route>
          <Route exact path='/' element={< LandingPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
