import Home from "../views/Home"
import Dashboard from "../views/Dashboard"

const routes = [

    {
        component: Home,
        title: "Home",
        path: "/Home",

    },
    {
        component: Dashboard,
        title: "Dashboard",
        path: "/dashboard"
    }
]

export default routes