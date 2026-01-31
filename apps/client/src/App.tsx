import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetBusStopListByRadius } from "MOT-api";

function App() {
  const queryClient = new QueryClient();

  console.info("hi");
  return (
    <QueryClientProvider client={queryClient}>
      <SmallCheckingComponent />
    </QueryClientProvider>
  );
}

function SmallCheckingComponent() {
  const { data } = useGetBusStopListByRadius(
    1,
    31.788252088613575,
    35.202625941956484,
    50,
    "he",
  );

  return <div>{JSON.stringify(data?.[0].LineList[8].Shilut)}</div>;
}

export default App;
