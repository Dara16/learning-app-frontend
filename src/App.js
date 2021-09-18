import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseContainer from './components/CourseContainer'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import StudentContainer from './components/StudentContainer';
import TutorContainer from './components/TutorContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <div className='navbar'>
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/courses">
            <CourseContainer />
          </Route>

          <Route path="/students">
            <StudentContainer />
          </Route>

          <Route path="/tutors">
            <TutorContainer />
          </Route>

        </Switch>  
      </div>
    </Router>
  );
}

export default App;
