// import "./App.css";
// import ListingsContainerComponent from "./patterns/01-container-presentational/container/ListingsContainer";

import { useEffect, useRef, useState } from "react";

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
    <div>
      {/* <ListingsContainerComponent /> */}
      <>
        <div className="icao-modal-react container mt-4">
          <get-icao-checker-wc
            isICAOWC={true}
            openModalElmId="open-icao-modal"
            savedImageElmId="icao-result-image"
            // getImgSrc={setICAOImgSrc}
            ref={icaoCheckerWCRef}
          ></get-icao-checker-wc>

          {/* <icao-checker-wc data-is-icao-wc={false}></icao-checker-wc> */}
          <h5>React App - ICAO WC</h5>
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
            log icao src{" "}
          </button>

          <div
            className="result-image card mt-4 p-4"
            style={{ height: "315px" }}
          >
            <img id="icao-result-image" src="" alt="" width="200px" />
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
