import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Home from './pages/Home';
  import StoryDetail from './pages/StoryDetail';
  import Genres from './pages/Genres';
  import Login from './pages/Login';
  import Navbar from './components/Navbar';
  import './styles.css';

  function App() {
    return (
      <Router>
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story/:id" element={<StoryDetail />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;