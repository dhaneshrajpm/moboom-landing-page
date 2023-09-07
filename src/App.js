import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import { Suspense } from 'react';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='*' element={<ComingSoon />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
