import { createBrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import App from "./App";

const router = createBrowserRouter([
    { path: '/', element: <MainPage /> },
    { path: '/note-app', element: <App /> },
]);

export default router;