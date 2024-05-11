import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import { Home, About, Projects, Contact } from './pages'

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <BrowserRouter basename="jannahdev-portfolio">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Projects />} />
          <Route path="/" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App