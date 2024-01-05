import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Button from './components/Button';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <h1 className="bg-primary">Hallo Welt</h1>
      <Button variant="secondary" size="md">
        test
      </Button>
      <Button variant="primary" size="sm">
        testsmall
      </Button>
    </div>
  </React.StrictMode>
);
