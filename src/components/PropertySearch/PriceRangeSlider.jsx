import { useState } from "react";
import "./PropertySearch.css";

export default function PriceRangeSlider() {
  const [value, setValue] = useState([0, 100]);

  const handleChange = (e, index) => {
    const newValue = [...value];
    newValue[index] = Number(e.target.value);
    setValue(newValue);
  };

  return (
    <div className="price-range">
      <span>{value[0]} Cr</span>
      <input
        type="range"
        min="0"
        max="100"
        value={value[0]}
        onChange={(e) => handleChange(e, 0)}
      />
    </div>
  );
}
