import { Spin } from "antd";
import LayoutPage from "components/LayoutPage/LayoutPage";
import DashboardPage from "pages/DashboardPage/DashboardPage";
import WorkspacesPage from "pages/WorkspacesPage/WorkspacesPage";
import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<Spin className="spin" />}>
          <LayoutPage>
            <Switch>
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/entities" component={() => <div></div>} />
              <Route path="/publications" component={() => <div></div>} />
              <Route path="/workspace/:id" component={WorkspacesPage} />
              <Redirect to="/dashboard" />
            </Switch>
          </LayoutPage>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
