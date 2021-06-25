import Header from "./components/Header/Header"
import Mainer from "./components/Employee/Mainer"
import Mainee from "./components/Mainee/Mainee"
import EmployeeInfo from "./components/Profile/EmployeeInfo"
import Signup from "./components/Signup/Signup"
import Login from "./components/Login/Login"
import Signupee from "./components/Signupee/Signupee"
import EmployerInfo from "./components/EmployerInfo/EmployerInfo"
import Index from "./components/Index/Index"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <>
        <Header />
        <div style={{ backgroundColor: "#f0f6ff", paddingBottom: "30px" }}>
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/list">
              <Mainer />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/employee/signup">
              <Signupee />
            </Route>
            <Route path="/employee/:username" component={Mainee} />
            <Route path="/list/:name" component={EmployeeInfo} />
            <Route path="/login" component={Login} />
            <Route path="/:username/info" component={EmployerInfo} />
          </Switch>
        </div>
        <Footer />
      </>
    </Router>
  )
}

export default App
