import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import SEO from './components/SEO';
import Home from './pages/Home';
import WebDev from './pages/WebDev';
import SMMA from './pages/SMMA';
import Flipping from './pages/Flipping';
import Recall from './pages/Recall';
import Blast from './pages/Blast';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <SEO />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/webdev" element={<WebDev />} />
            <Route path="/smma" element={<SMMA />} />
            <Route path="/flipping" element={<Flipping />} />
            <Route path="/recall" element={<Recall />} />
            <Route path="/blast" element={<Blast />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
