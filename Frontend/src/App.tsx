import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NounsNavbar from './components/NounsNavbar';
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
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-bg text-white">
        <div className="relative">
          <NounsNavbar />
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
