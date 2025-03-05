import App from "./App";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: '/:page',
        element: <App />
    },
];

export default routes;
