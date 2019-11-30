import Welcome from "pages/Welcome"
import Dashboard from "pages/Dashboard";
import BookingDetail from "pages/BookingDetail"
import UserProfile from 'pages/UserProfile'
import Booking from "pages/Booking";
import P404 from "pages/P404";

import DevTest from "Test/DevTest";
import RecoveryPassword from "pages/RecoveryPassword";

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
        id: "bookingdetail",
        requiredAuthentication: true,
        exact: true,
        path: "/booking=:detail",
        component: BookingDetail
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
        id: "recoverylink",
        exact: true,
        path: "/rl=:link",
        component: RecoveryPassword
    },
    {
        // this route (path="") is used for testing purpose only, will be removed in final release
        id: "devtest",
        exact: true,
        path: "/devtest",
        component: DevTest
    },
    {
        id: "notfound",
        path: "*",
        component: P404
    }
]

export default routes;