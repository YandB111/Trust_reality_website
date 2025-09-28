// src/components/About/AnimatedNumber.jsx
import React, { useState, useEffect } from 'react';

const AnimatedNumber = ({ target, duration = 3000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 50); // update every 50ms
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(interval);
  }, [target, duration]);

  return (
    <h3>
      {count}
      <span>+</span>
    </h3>
  );
};

export default AnimatedNumber;
