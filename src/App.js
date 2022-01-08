import React from "react";
import Layout from "./layout";
import AppRoutes from "./router";

function App() {
  return (
    <div className="container fs-h3 text-primary-3">
      <Layout>
        <AppRoutes/>
      </Layout>
    </div>
  );
}

export default App;
