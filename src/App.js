import React from "react";
import Layout from "./layout";
import AppRoutes from "./router";

function App() {
  return (
    <div>
      <Layout>
        <AppRoutes/>
      </Layout>
    </div>
  );
}

export default App;
