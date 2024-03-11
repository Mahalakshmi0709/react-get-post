import axios from "axios";
import React, { useState } from "react";

const App = () => {
  //get request - String
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  //post request -String
  const data = "Hello";
  const postDataFromBackend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  //post reuest - form
  const [formData, setFormData] = useState("");

  const postFormFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formData,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  return (
    <div className="App">
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>
      <br /> <br />
      <button onClick={postDataFromBackend}>Post Data</button>
      <p id="para"></p>
      <br /> <br />
      <form onSubmit={postFormFromFrontend}>
        <input
          type="text"
          name="formData"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        ></input>
        <input type="submit" value="Test Form"></input>
      </form>
    </div>
  );
};

export default App;
