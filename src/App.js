// import { useState } from "react";
import "./App.css";
import Table from "./component/table";

function App() {
  // const [name, setName] = useState("this is aman");

  // const handleNameChange = () => {
  //   setName("thankyou");
  // };

  return (
    <div className="App">
      {/* <h2>{name}</h2>
      <button className="btn" onClick={handleNameChange}>
        click
      </button> */}

      <Table />
    </div>
  );
}

export default App;
