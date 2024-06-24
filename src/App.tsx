// src/App.tsx
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <Home />
        </Route>
    </Router>
  );
}

export default App;
