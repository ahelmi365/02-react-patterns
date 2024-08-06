// import "./App.css";
// import ListingsContainerComponent from "./patterns/01-container-presentational/container/ListingsContainer";

import { useEffect, useRef, useState } from "react";
import "get-icao-checker-wc/get-icao-checker-wc.js";
import "./App.css";
function App() {
  const [icaoImgSrc, setICAOImgSrc] = useState("");
  const icaoCheckerWCRef = useRef<HTMLGetIcaoCheckerWcElement>(null);

  useEffect(() => {
    console.log("The icao image src is updated");
    console.log(`the new image src is = ${icaoImgSrc}`);
  }, [icaoImgSrc]);

  useEffect(() => {
    if (icaoCheckerWCRef.current) {
      icaoCheckerWCRef.current.getImgSrc = setICAOImgSrc;
    }
  }, [setICAOImgSrc]);
  return (
    <div className="container">
      {/* <ListingsContainerComponent /> */}

      <div className="icao-container container mt-4">
        <h2>React App - ICAO WC</h2>
        <div className="btns">
          <button
            className="btn btn-primary"
            id="open-icao-modal"
            name="icao-modal"
            type="button"
          >
            Open ICAO Modal
          </button>

          <button
            className="btn btn-success ms-4"
            name="icao-modal"
            type="button"
            onClick={() => console.log(icaoImgSrc)}
          >
            Log image Src
          </button>
        </div>

        <div className="result-image card">
          <img id="icao-result-image" src="" alt="" width="200px" />
        </div>
        <get-icao-checker-wc
          isICAOWC
          openModalElmId="open-icao-modal"
          savedImageElmId="icao-result-image"
          ref={icaoCheckerWCRef}
        ></get-icao-checker-wc>
      </div>
    </div>
  );
}

export default App;
