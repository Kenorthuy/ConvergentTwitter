import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Login from "./views/Login"
import Dashboard from "./views/Dashboard"
import Search from "./views/Search"
import AboutUs from "./views/AboutUs"
import Profile from "./views/Profile"
import "./App.css"

class App extends Component {

render() {
	return (
		<Router>
			<Nav />
			<Route exact path ="/" component={Login} />
			<Route exact path ="/dashboard" component={Dashboard} />
			<Route exact path ="/Search" component={Search} />
			<Route exact path ="/AboutUs" component={AboutUs} />
			<Route exact path ="/Profile" component={Profile} />
			
			{/* {
				ROUTES.map(route => {
					return <Route 
						exact={route.exact}
						path={route.path}
						component={route.component}
					/>
				})
			} */}
		</Router>
		
	)
		}
}


export default App
