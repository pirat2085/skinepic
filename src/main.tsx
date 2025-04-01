import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AboutPage from './pages/AboutPage';
import FAQsPage from './pages/FAQsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about-us',
    element: <AboutPage />,
  },
  {
    path: '/faqs',
    element: <FAQsPage />,
  },
  {
    path: '/testimonials',
    element: <TestimonialsPage />,
  },
]);

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find root element');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
