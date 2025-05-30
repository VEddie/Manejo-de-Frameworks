import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from './components/ui/provider.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.tsx';
import '../src/App.css'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider>
            <App/>
        </Provider>
    </StrictMode>
);
