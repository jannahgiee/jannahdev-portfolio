import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import { Home, About, Projects, Contact } from './pages';
import Layout from './Layout.jsx';

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <BrowserRouter basename="/jannahdev-portfolio">
        <Nav />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;