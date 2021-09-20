import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseContainer from './components/CourseContainer'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import StudentContainer from './components/StudentContainer';
import TutorContainer from './components/TutorContainer'
import CourseDetails from './components/CourseDetails'
import StudentDetails from './components/StudentDetails';

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

          <Route exact path="/courses">
            <CourseContainer />
          </Route>

          <Route exact path="/students">
            <StudentContainer />
          </Route>

          <Route exact path="/tutors">
            <TutorContainer />
          </Route>

          <Route path="/courses/:id">
            <CourseDetails />
          </Route>

          <Route path="/students/:id">
            <StudentDetails />
          </Route>

        </Switch>  
      </div>
    </Router>
  );
}

export default App;
