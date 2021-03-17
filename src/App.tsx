import LayoutPage from "components/LayoutPage/LayoutPage";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LayoutPage />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
