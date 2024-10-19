// Importing necessary libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main App component
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing

// Create a root for the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in BrowserRouter for routing support
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
