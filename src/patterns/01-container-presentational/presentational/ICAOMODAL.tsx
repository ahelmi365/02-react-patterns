import "../../../../declarations.d.ts";

const ICAOMODAL = () => {
  return (
    <div className="icao-modal-react">
      <button
        className="btn btn-primary"
        id="open-icao-modal"
        name="icao-modal"
        type="button"
      >
        Open ICAO Modal
      </button>
      <icao-checker-wc data-is-icao-wc={true}></icao-checker-wc>

      <div className="result-image card mt-4 p-4" style={{ height: "315px" }}>
        <img id="icao-result-image" src="" alt="" width="200px" />
      </div>
    </div>
  );
};

export default ICAOMODAL;
