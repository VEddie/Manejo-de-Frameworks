import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LoginPage from './components/LoginPage';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
    { path: '/', errorElement: <ErrorPage />, element: <LoginPage /> },
    { path: '/note-app', element: <App /> },
]);

export default router;
