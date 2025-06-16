import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add error handling for the root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found! Make sure there is a div with id="root" in index.html');
  throw new Error('Root element not found');
}

// Wrap the root creation in a try-catch
try {
  console.log('Creating React root...');
  const root = createRoot(rootElement);
  
  console.log('Rendering App component...');
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('App component rendered successfully');
} catch (error) {
  console.error('Error during React initialization:', error);
  // Display a user-friendly error message
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: system-ui, -apple-system, sans-serif;">
      <h1 style="color: #dc2626; margin-bottom: 16px;">Application Error</h1>
      <p style="color: #4b5563; margin-bottom: 12px;">Something went wrong while starting the application.</p>
      <pre style="background: #f3f4f6; padding: 12px; border-radius: 6px; overflow: auto;">
        ${error instanceof Error ? error.message : 'Unknown error occurred'}
      </pre>
      <button 
        onclick="window.location.reload()" 
        style="margin-top: 16px; padding: 8px 16px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer;"
      >
        Reload Page
      </button>
    </div>
  `;
}
