console.log("Starting React application setup.");

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ViewProvider } from './ViewContext';

const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);
console.log("Root element:", rootElement);

if (rootElement) {
    console.log("Rendering App component...");
    root.render(
        <React.StrictMode>
            <ViewProvider>
                <App />
            </ViewProvider>
        </React.StrictMode>
    );
}
else {
    console.error("Could not find root element with id 'app'.");
}
