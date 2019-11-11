import Welcome from "pages/Welcome"
import Dashboard from "pages/Dashboard";
import UserProfile from 'pages/UserProfile'
import Booking from "pages/Booking";
import P404 from "pages/P404"

const routes = [
    {
        id: "welcome",
        requiredAuthentication: true,
        exact: true,
        path: "/",
        HomePage: Welcome
    },
    {
        id: "dashboard",
        requiredAuthentication: true,
        exact: true,
        path: "/dashboard",
        component: Dashboard,
        navItemName: "Dashboard",
    },
    {
        id: "profile",
        requiredAuthentication: true,
        exact: true,
        path: "/profile",
        component: UserProfile,
        navItemName: "User Profile",
    },
    {
        id: "booking",
        requiredAuthentication: true,
        exact: true,
        path: "/booking",
        component: Booking,
        navItemName: "Booking Flight",
    },
    {
        id: "notfound",
        path: "*",
        component: P404
    }
]

export default routes;