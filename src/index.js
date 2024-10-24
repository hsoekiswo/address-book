import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ViewProvider } from './ViewContext';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <ViewProvider>
            <App />
        </ViewProvider>
    </React.StrictMode>
);