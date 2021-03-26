import Home from "../views/Home"
import Other from "../views/Other"

const routes = [
    {
        component: Home,
        title: "Home",
        path: "/",
        exact: true
    },
    {
        component: Other,
        title: "Other Page",
        path: "/other"
    }
]

export default routes