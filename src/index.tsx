import React, {FC}  from 'react';
import ReactDOM from 'react-dom/client';

const App: FC = () => <div>hello</div>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

