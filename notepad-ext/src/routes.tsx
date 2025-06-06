import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import App from "./App";

const router = createBrowserRouter([
    { path: '/', element: <LoginPage /> },
    { path: '/note-app', element: <App /> },
]);

export default router;