import AppRouter from "./app/route";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const client = new QueryClient({
    defaultOptions: {
        mutations: {
            retry: false,
            networkMode: "always",
        },
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            networkMode: "always",
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={client}><AppRouter/></QueryClientProvider>
    );
};

export default App;