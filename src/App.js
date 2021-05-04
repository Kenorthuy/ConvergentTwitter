import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Sidebar from "./components/Sidebar"
import ROUTES from "./misc/routes"
import "./App.css"
import "./components/Sidebar.css"
import "bootswatch/dist/darkly/bootstrap.min.css"

function App() {
	return (
		<Router>
			<Nav />
			<Sidebar />
			<Switch>
				<Route path='/' />
			</Switch>
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

export default App
