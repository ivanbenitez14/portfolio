import { Navigate, Route, Routes } from "react-router"
import { Home } from "../pages/Home"
import { Projects } from "../pages/Projects"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />

        <Route path="*" element={<Navigate to="home" />} />
    </Routes>
  )
}
