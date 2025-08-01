import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from './components/ui/provider.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/App.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes.tsx';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
