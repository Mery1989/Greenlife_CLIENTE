
import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import EventListPage from "../pages/EventListPages/EventListPages"
import UserSingupPage from "../pages/UserSingupPages/UserSingupPages"
import Contactuspage from "../pages/ContactUsPages/ContactUsPages"
import AboutUsPages from "../pages/AboutUsPages/AboutUsPages"
const AppRoutes = () => {
    return (
  <Routes>
    <Route element={<HomePage />} path="/" />
    <Route element={<EventListPage />} path="/eventos" />
    <Route element={<UserSingupPage />} path="/singup" />
    <Route element={<Contactuspage />} path="/contactanos" />
    <Route element={<AboutUsPages />} path="/sobreNosotros" />
  </Routes>
  )
}

export default AppRoutes
