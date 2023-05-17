import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './style.css';
import FoodSwipeCard from './components/FoodSwipeCard';

function App() {
  const id = React.useId();
  return (
    <div>
      <FoodSwipeCard />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
