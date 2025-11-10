import { useState } from "react";
import "./App.css";
function App() {
  const [number, setnumber] = useState(0);

  function Increase() {
    setnumber(number + 1);
  }
  function Decrease() {
    if (number === 0) {
      // setnumber(number + 0);

      return number;
    } else {
      setnumber(number - 1);
    }
  }
  return (
    <div className="flex items-center justify-center mt-4 ">
      <div className=" bg-blue-300 h-80 w-80 ">
        <h1 className=" text-5xl mt-3">Counter</h1>
        <p className=" text-7xl mt-5"> {number}</p>
        <button
          className=" w-12 text-center text-4xl border-2 align-middle p-2 m-2.5 rounded-2xl mt-10 hover:bg-fuchsia-400 hover:text-white"
          onClick={Increase}
        >
          {" "}
          +{" "}
        </button>
        <button
          className=" w-12 text-center text-4xl border-2 align-middle p-2 m-2.5 rounded-2xl mt-10  hover:bg-red-500 hover:text-white  "
          onClick={Decrease}
        >
          {" "}
          -{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
