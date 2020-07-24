import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Hidden from './components/hidden/Hidden';
import Post from './components/post/Post';
import './App.css';
import AdminSignin from './components/admin-signin/AdminSignin';

function App() {
  return (
    <div>
      <Router>
				<Switch>
          <Route path="/post"> <Post/> </Route>
          <Route path="/admin-signin"> <AdminSignin/> </Route>
					<Route path="/"> <Home /> </Route>
					<Route path="/hidden"> <Hidden /> </Route>
				</Switch>
			</Router>
    </div>
  );
}

export default App;
