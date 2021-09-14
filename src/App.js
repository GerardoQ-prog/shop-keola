import { QueryClient, QueryClientProvider } from "react-query";
import AppRoutes from "./infrastructure/routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
