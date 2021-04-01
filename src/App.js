import { BrowserRouter as Router, Route } from "react-router-dom"
import Nav from "./components/Nav"
import ROUTES from "./misc/routes"
import "./App.css"
import "bootswatch/dist/darkly/bootstrap.min.css"

function App() {
	return (
		<Router>
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

export default App
