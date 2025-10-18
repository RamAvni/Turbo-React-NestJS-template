import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";
import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-react";
import { useGetCities } from "../use-get-cities.hook";

const queryClient = new QueryClient();
const TestQueryClient: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const TestComponent: FC<{ children?: ReactNode }> = ({ children }) => {
  const { data } = useGetCities("he");

  return (
    <div>
      {children}
      <ol>
        {data?.data.map((city) => (
          <li>{`myCityName: ${city.NAME}, priority: ${city.PRIORITY}, id: ${city.ID}`}</li>
        ))}
      </ol>
    </div>
  );
};

describe("useGetCities hook", () => {
  it.skipIf(!import.meta.env.VITE_COSTLY)(
    "should fetch cities from the API and display text within the component",
    async () => {
      const screen = await render(<TestComponent />, {
        wrapper: TestQueryClient,
      });
      await expect.element(screen.getByText("ירושלים")).toBeVisible();
    },
  );
});
