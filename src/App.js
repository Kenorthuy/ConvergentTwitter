import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Nav from "./components/Nav"
import ROUTES from "./misc/routes"
import Login from "./views/Login"
import Dashboard from "./views/Dashboard"
import Home from "./views/Home"
import "./App.css"

class App extends Component {

render() {
	return (
		<Router>
			<Nav />
			<Route exact path ="/" component={Login} />
			<Route exact path ="/dashboard" component={Dashboard} />
			<Route exact path ="/Home" component={Home} />
			
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
