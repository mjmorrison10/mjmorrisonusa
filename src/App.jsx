import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import Home from './pages/Home';
import WebDev from './pages/WebDev';
import SMMA from './pages/SMMA';
import Flipping from './pages/Flipping';
import Recall from './pages/Recall';
import Blast from './pages/Blast';
import Hooklab from './pages/Hooklab';
import Products from './pages/Products';
import Workflow from './pages/Workflow';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <SEO />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/webdev" element={<WebDev />} />
            <Route path="/smma" element={<SMMA />} />
            <Route path="/flipping" element={<Flipping />} />
            <Route path="/products" element={<Products />} />
            <Route path="/workflow" element={<Workflow />} />
            <Route path="/recall" element={<Recall />} />
            <Route path="/blast" element={<Blast />} />
            <Route path="/hooklab" element={<Hooklab />} />
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
