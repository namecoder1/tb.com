import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";



function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#eab308");

  return (
    <div className="sweet-loading flex">
      <ClipLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;