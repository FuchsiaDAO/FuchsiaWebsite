import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimpleNavbar from './components/SimpleNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Launchpad from './pages/Launchpad';
import Treasury from './pages/Treasury';
import Governance from './pages/Governance';
import Community from './pages/Community';
import Blog from './pages/Blog';
import Docs from './pages/Docs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-white">
        <div className="neon-grid fixed inset-0 opacity-30"></div>
        <div className="relative z-10">
          <SimpleNavbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/launchpad" element={<Launchpad />} />
              <Route path="/treasury" element={<Treasury />} />
              <Route path="/governance" element={<Governance />} />
              <Route path="/community" element={<Community />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/docs" element={<Docs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
