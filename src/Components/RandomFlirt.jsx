import React, { useState } from "react";
import "./Random_Flirt.css";
import { useEffect } from "react";

function RandomFlirt() {
  const [flirt, setFlirt] = useState({});

  async function fetchInfo() {
    return await fetch("https://rizzapi.vercel.app/random")
      .then((res) => res.json())
      .then((d) => setFlirt(d));
  }

  useEffect(() => {
     fetchInfo();
  }, []);

  return (
    <div className="container">
      <div className="flirt">{flirt.text}</div>
    </div>
  );
}

export default RandomFlirt;
