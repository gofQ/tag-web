import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Panel from "./pages/Panel"
import ErrorBoundary from "./pages/ErrorBoundary"
import NotFoundError from "./pages/NotFoundError"

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes  >
          <Route path="/" element={<Home />} />
          <Route path="/t/a/g/admin" element={<Panel />} />
          <Route path="*" element={<NotFoundError />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

export default App