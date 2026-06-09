import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import WebDev from './pages/WebDev';
import SMMA from './pages/SMMA';
import Flipping from './pages/Flipping';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/webdev" element={<WebDev />} />
            <Route path="/smma" element={<SMMA />} />
            <Route path="/flipping" element={<Flipping />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
