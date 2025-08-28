import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import Layout from "./components/Layout";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
