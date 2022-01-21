import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./pages/login";
//import Dashboard from "./pages/dashboard";
import Index from "./pages/index";
import AddPage from "./pages/add";
import EditPage from "./pages/edit";
import Register from "./pages/register";
import NotFound from "./pages/notfound";
import FileUploadPage from "./pages/fileupload";
//import Dashboard from './pages/dashboard';
import ChatMessageBox from './ChatMessageBox/ChatMessageBox';
import Dashboard from './pages/dashboard';
//import ChatMessageBox from './ChatMessageBox/ChatMessageBox'

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route path='/index' component={Dashboard}/>
                        <Route path='/register' component={Register} />
                        <Route path='/add' component={Dashboard} />
                        <Route path='/edit/' component={Dashboard} />
                        <Route path='/fileupload/' component={FileUploadPage} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
/*class App extends Component { refreshPage(){ window.location.reload(); } render() { return (  
     <Dashboard/>) } }
  
  
  export default App;*/

 /* class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        
                        <Route  path='/ChatMessageBox' Component={ChatMessageBox} />
                        
                       
                       
                        
                       
                        
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;*/