import "./App.css"
import Header from "./components/Header/Header"
import Mainer from "./components/Employee/Mainer"
import Mainee from "./components/Mainee/Mainee"
import Profile from "./components/Profile/Profile"
import Signup from "./components/Signup/Signup"
import Login from "./components/Login/Login"
import Signupee from "./components/Signupee/Signupee"
import EmployerInfo from "./components/EmployerInfo/EmployerInfo"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/">
            <Mainer />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/employee/signup">
            <Signupee />
          </Route>
          <Route path="/employee/:username" component={Mainee} />
          <Route path="/list/:accountid" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/:username/info" component={EmployerInfo} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
