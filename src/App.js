import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import { useReducer } from 'react';
import { initialState, reducer } from './reducers/Reducers';
import NewGame from './components/NewGame';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <div className="App" style={{ backgroundColor: "white" }}>
      <Routes>
        <Route path="/" element={<Home state={state} dispatch={dispatch} />} />
        <Route path="/game/:id" element={<Details state={state} />} />
        <Route path="/create" element={<NewGame dispatch={dispatch} />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
