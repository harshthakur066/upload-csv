import React from "react";
import axios from "axios";

import "./App.css";
import Upload from "./components/upload";

axios.defaults.baseURL = "https://upload-csv-file.herokuapp.com/";

function App() {
  return (
    <div className="App">
      <h2 className="head">Upload CSV </h2>
      <div>
        <Upload />
      </div>
    </div>
  );
}

export default App;
