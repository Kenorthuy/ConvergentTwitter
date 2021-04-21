import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Nav from "./components/Nav"
import ROUTES from "./misc/routes"
import Login from "./views/Login"
import "./App.css"

class App extends Component {

render() {
	return (
		<Router>
			<Route exact path ="/" component={Login} />
			<Nav />
			{
				ROUTES.map(route => {
					return <Route 
						exact={route.exact}
						path={route.path}
						component={route.component}
					/>
				})
			}
		</Router>
	)
		}
}


export default App
