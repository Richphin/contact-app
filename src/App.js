import { BrowserRouter,Switch,Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ProtectedRoute from "./components/ProtectedRoute";




function App() {

 return(
  <BrowserRouter>
            
  <Switch>
      <ProtectedRoute exact path="/" component={Dashboard}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      
  </Switch>
</BrowserRouter>
  
 )
}

export default App;
