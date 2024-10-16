'use client'

import { useState, CSSProperties } from "react";
import { SyncLoader } from "react-spinners";



function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#eab308");

  return (
    <div className="sweet-loading flex">
      <SyncLoader
        color={color}
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;