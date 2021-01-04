import React from "react";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";

import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="container">
        <Header />
        <div>Content</div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
