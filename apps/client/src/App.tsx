import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BusStopList } from "./components/BusStopList";

function App() {
  const queryClient = new QueryClient();

  console.info("hi");
  return (
    <QueryClientProvider client={queryClient}>
      <BusStopList />
    </QueryClientProvider>
  );
}

export default App;
